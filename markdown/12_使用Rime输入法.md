# [使用Rime输入法](https://github.com/shyn/shyn.github.io/issues/12)

一般来讲，我现在是直接使用系统自带的输入法的。然后由于使用了小鹤双拼，除了苹果平台默认的双拼里有这个输入方案外，其他都需要配置一番。但是新版macOS的中文输入体验着实不佳，而且卡顿之bug不绝于耳。于是，最终还是需要三方输入法。我的三方输入法只有[rime](https://rime.im)。

rime 以折腾出名，但是我还是想在5分钟内完成设定和切换。

## 安装

打开官网，开始安装。我使用brew来管理软件包，自然希望rime也能方便用brew来安装，然后打开官网，这个命令不是那么显著。
`brew install --cask squirrel`
注意必须要有--cask，否则就会安装成另外一个包了。安装过程需要sudo权限，因为这里安装了一个pkg

## 切换输入源头
这点，官方的文档却没有说明。安装完成后，直接F4，显然是无法自动切换为鼠须管的（rime的macOS版本的名称）。

在macOS的输入法设置里添加。然后现在苹果的系统bug太多，打开之后没有找到，重启之后竟然直接空白，点击其他语言，再切回简体中文，终于看到了鼠须管的名字，搞定。

## 安装小鹤双拼输入方案

快递浏览了一下rime文档，发现没有双拼具体的配置说明，只好google一下，一下就找到 https://github.com/rime/rime-double-pinyin 根据文档说明的设定，我把这个仓库的所有yaml文件都放到了用户目录 `~/Library/Rime/`

## 添加输入小鹤输入法到切换列表

默认的设定档在rime程序目录，不可以随意修改，好在提供了 patch 方案，参照文档，在用户设定目录添加 `default.custom.yaml`，然后添加如下内容：
```yaml
patch:
  schema_list:
    - schema: double_pinyin_flypy
```

搞定。

整个过程果然无法5分钟完成哈哈，一来rime文档还需完善，二来果子的bug也是烦人。还有rime竟然不支持yml扩展名你敢信:laugh: