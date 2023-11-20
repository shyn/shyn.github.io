# [使用github写博客的](https://github.com/shyn/shyn.github.io/issues/6)

主要的想法有两点：

1. GitHub备份博客（暂时可以认为，它比其他方式更持久。不用担心VPS到期续费、不用担心网站倒闭）
2. 使用Github的编辑器，随时随地写博客，舒适的markdown编辑体验，免费的永续的，不用维护的wordpress后台

为什么不使用其他服务在线服务直接写，也能绑定域名，比如：wordpress.com、ghost.org、typlog.com。这里的阻碍是：

- 需要额外注册（一般都有GitHub账号了）
- 绑定域名需要付费
- 担心服务的可靠性，不会存在的比GitHub还久吧

第一点自不必说，使用其他方式写博客，只要能自动备份到GitHub就行，比如各种静态网站生成器，把原始markdown推送到GitHub，设置好Actions，自动build然后发布。

第二点才是关键。自建Wordpress、Ghost这种就不必说了，虽说有优秀的在线编辑器，但需要维护服务器，维护数据库，设置备份等等，想起来就头大。静态网站生成器比如hugo这种，将编辑体验下放到客户端，在本地电脑，用自己喜欢的编辑器写作，写完上传github即可。

---

本地编辑器创作然后编辑方式的弊端：

- 需要运行一行命令
- 多设备写作涉及git仓库的同步

---

使用GitHub编辑器的方式：
- 直接编辑仓库：不太方便，需要点几下，markdown没有预览功能，但是有一切可能性，过于hardcore
- 使用 issue
- 使用 discussion
- 使用 wiki

使用wiki体验上稍差，而且不像issue和discussion，自带评论。编辑器上是一样的。

缺点：编辑器的体验并不完美。
- 无法全屏编辑
- 不能实时预览

---

使用 issue 或者 discussion 有点非常明显：自带评论、自带图床

---

- Pin 功能可以用来置顶（不过数量有限制，可以使用特殊的label来）
- Label 拥有无限玩法，当作普通内容tag，或者某种特殊标记，比如top置顶、page表示独立页面等等
- Discussion 中还能分类，可以发问答帖和投票，更好玩