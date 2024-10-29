# [IIS 静态托管某些文件出现404](https://github.com/shyn/shyn.github.io/issues/16)

需要手动添加 MIME 类型，比如我这里是nupkg无法识别，那就添加 `application/zip`.

没想到 IIS 不认识的文件就 404. 笑死。