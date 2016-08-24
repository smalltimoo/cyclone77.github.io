---
layout:     post
title:      发布一款Github博客皮肤 
subtitle:   Major是基于jekyll的皮肤
date:       2016-08-25
author:     "Cyclone77"
header-img: "img/post-bg-js-version.jpg"
permalink:  "/1472018423617"
tags:
    - Jekyll
    - 博客皮肤
---

**Major**是一款基于jekyll的皮肤，没有用hexo，原因是换机器后无法更新博客，但是可以用U盘考环境。总之很麻烦!折腾纠结好久，还是用jekyll！不用发布直接push文章即可，方便快捷。用的放心舒心……
皮肤地址：https://github.com/Cyclone77/Major 
演示地址: https://cyclone77.github.io 
欢迎Star，Fork！
废话不多，先上图：

![](http://images2015.cnblogs.com/blog/438520/201608/438520-20160824131736511-609691729.jpg)

- **为博客园打抱不平** ：以前看到很多园子里的朋友说，博客园样式好丑，对移动端还不兼容等等！这里就给博客园打抱不平了！申请了js权限，想怎么搞怎么搞都没人管你好吧。一起我也搞过几个皮肤文章也有介绍。其实很人性化的好么！

## 皮肤由来
其实我本想学一下jekyll的语法，但是配置本地环境各种错误（我的win7居然还是黑色桌面，你们懂的），无奈我只能找个功能差不多有的，开始改！
这个皮肤来源于如下：连接地址 https://github.com/Kaijun/hexo-theme-huxblog 
![](http://images2015.cnblogs.com/blog/438520/201608/438520-20160824132614401-1532170398.jpg)

- 没错，别不相信。把主要样式抽掉想怎么改怎么改，然后学习下jekyll简单的语法，接下来就剩下时间了。
- 我在修改的时候发现作者用了很多重复代码，比如，每个有侧边栏的页面都写了一边侧边栏代码，我把侧边栏直接写成了模版。
- 精简了很多导致博客速度变慢的js和不影响阅读的css。

## 皮肤简单介绍
![](http://images2015.cnblogs.com/blog/438520/201608/438520-20160824133122370-19560429.png)

- 这是标签页面，点击右面的标签可以定位。
![](http://images2015.cnblogs.com/blog/438520/201608/438520-20160824133502745-1795073321.jpg)

- 侧边栏：标签我只显示10个，太多影响美观，可以查看更多。
- 关于我：在_config.yml里面填写了帐号就显示对于的图标，可以填写知乎，Github等等。
- PS: 图标用的是字体图标，地址: http://www.fontawesome.com.cn/faicons/
``` jekyll
{% for tag in site.tags offset:1 limit:10 %}
	<a href="{{ site.baseurl }}/tags/#{{ tag[0] }}" title="{{ tag[0] }}" rel="{{ tag[1].size }}">{{ tag[0] }}</a>
{% endfor %}
```
- 这里差了下语法 offset:1 limit:10 就解决了。只显示10个标签的问题。

## 写文章
``` markdown
---
layout:     post
title:      "标题"
subtitle:   "副标题"
date:       2016-08-23
author:     "Cyclone77"
header-img: "img/post-bg-unix-linux.jpg"
permalink:  "/1472014309297"
tags:
    - Markdown
---
```
- **header-img** ：是当前页面应该显示那个头背景图片
- **permalinkg** : 自定义当前页面的路径，默认路径文件名，文件名的规则：2016-08-25-Markdown-post.md, 2016-08-25-Markdown-post.markdown都可以。

## 如何使用
**使用方法非常之简单**你可以fork我的[博客](https://github.com/Cyclone77/cyclone77.github.io)所在的库。也可以[克隆](https://github.com/Cyclone77/Major)来push到你博客所在库。
简单的git命令部署博客
``` git
git add -A （提交所有文件包括删除的这样远程库也可以删除）
git commit -m "提交备注"
git push -u origin master 提交远程库
```
## 移动端支持
- 当然支持移动端啦，本来就是基于Bootstrap的。

## 后期维护
- 喜欢的朋友可以克隆[克隆](https://github.com/Cyclone77/Major)我的Major项目，因为我的博客经常改动，Major是稳定的