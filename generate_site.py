# -*- coding: utf-8 -*-
import argparse
import os

# import markdown
# from feedgen.feed import FeedGenerator
from github import Github, Issue
from sqids import Sqids
# from lxml.etree import CDATA
# from marko.ext.gfm import gfm as marko

MD_HEAD = """## Gitblog
My personal blog using issues and GitHub Actions
[RSS Feed](https://raw.githubusercontent.com/{repo_name}/master/feed.xml)
"""

OUTPUT_DIR = os.getenv("OUTPUT", "output")
ANCHOR_NUMBER = 5
TOP_ISSUES_LABELS = ["Top"]
TODO_ISSUES_LABELS = ["TODO"]
FRIENDS_LABELS = ["Friends"]
IGNORE_LABELS = FRIENDS_LABELS + TOP_ISSUES_LABELS + TODO_ISSUES_LABELS


def is_me(issue, me):
    return issue.user.login == me


def hugo_prepare_directories():
    # use hugo in the action
    os.makedirs(os.path.join(OUTPUT_DIR, "content", "posts"), exist_ok=True)


sqids = Sqids(alphabet="0123456789", min_length=3)
HUGO_CONFIG='''
baseURL = 'http://lovex.in/'
languageCode = 'zh-cn'
title = 'Complex Standalone'
hasCJKLanguage=true


'''


HUGO_TEMPLATE = """
+++
title = '{title}'
date = '{date}'
draft = {draft}
slug = '{slug}'
tags = [{tags}]
comments = {comments}
+++

{body}
"""
def is_page(labels: list[str]) -> bool:
    return 'page' in labels 

def is_draft(labels: list[str]) -> bool:
    return 'draft' in labels

def generate_frontmatter(issue: Issue, labels: list[str]) -> dict:
    basic = {
            'title': issue.title,
            'date': str(issue.created_at)[:10]
    }
    extra = {} 
    for label in labels:
        if '=' in label:
            key, value = label.split('=')
            key_parts = key.split('.') 
            root = extra
            for p in key_parts[:-1]:
                if p not in root:
                    root[p] = {}
                if not isinstance(root[p], dict):
                    # unexpected key
                    raise
                root = root[p]
            if (last := key_parts[-1]) in root:
                root[last] = [root[last], value]
            else:
                root[last] = value
    basic.update(extra)
    return basic


def hugo_generate_one(issue):
    labels: list[str] = [label.name for label in issue.labels]
    if is_page(labels):
        slug = issue.title.lower()
        md_name = f"{issue.title.replace('/', '-').replace(' ', '.')}.md"
    else:
        slug = sqids.encode([issue.number])
        md_name = f"{issue.number}_{issue.title.replace('/', '-').replace(' ', '.')}.md"
    # label color is not used
    frontmatter = generate_frontmatter(issue, labels)
    frontmatter.update(
        draft=str(is_draft(labels)).lower(),
        slug=slug,
        tags=[label[1:] for label in labels if label.startswith('#')],
        comments=issue.comments,
    )
    import json
    md = f'{json.dumps(frontmatter)}\n{issue.body}'
    if is_page(labels):
        generate_path = os.path.join(OUTPUT_DIR, 'content', md_name)
    else:
        generate_path = os.path.join(OUTPUT_DIR, "content", "posts", md_name)
    with open(generate_path, "w") as f:
        f.write(md)


def hugo_generate(issues, me):
    with open(os.path.join(OUTPUT_DIR, 'hugo.toml'), 'w') as f:
        f.write(HUGO_CONFIG)
    for issue in issues:
        if is_me(issue, me):
            hugo_generate_one(issue)


def main(token, repo_name, issue_number=None):
    gh = Github(token)
    repo = gh.get_repo(repo_name)
    issues = repo.get_issues()
    me = repo.owner.login

    hugo_prepare_directories()
    hugo_generate(issues, me)


if __name__ == "__main__":
    # prepare for hugo: generate hugo directories in output dir
    # generate hugo site
    # publish hugo site

    if not os.path.exists(OUTPUT_DIR):
        os.mkdir(OUTPUT_DIR)
    parser = argparse.ArgumentParser()
    parser.add_argument("github_token", help="github_token")
    parser.add_argument("repo_name", help="repo_name")
    parser.add_argument(
        "--issue_number", help="issue_number", default=None, required=False
    )
    options = parser.parse_args()
    main(options.github_token, options.repo_name, options.issue_number)
