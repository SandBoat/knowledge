# knowledge
收藏、记录、学习

##  前端

### CSS`

[常用 css](./css/common.md)

### js
[常用 js](./js/common.md)

[小数相关](https://github.com/SandBoat/knowledge/issues/1)~

[js 错误类型](https://www.jianshu.com/p/ef9f0b1f7382)

### 工具 & 库
[zdog](https://github.com/metafizzy/zdog) - 3D 设计和动画制作库

[Git 各类问题解决方案](https://github.com/k88hudson/git-flight-rules/blob/master/README_zh-CN.md)

[vue-element-table 优化](https://github.com/xuliangzhan/vue-element-extends)

### 浏览器

**浏览器进程**

浏览器启动时，会新建一个浏览器进程、一个GPU进程、一个网络进程，所有标签页共享这些进程（包括隐身窗口）。渲染进程每个标签页独享，且标签业内跳转其他站点也会新建渲染进程
- 浏览器进程：主要负责界面显示、用户交互、子进程管理，同时提供存储等功能。
- 渲染进程：核心任务是将 HTML、CSS 和 JavaScript 转换为用户可以与之交互的网页，排版引擎 Blink 和 JavaScript 引擎 V8 都是运行在该进程中，默认情况下，Chrome 会为每个 Tab 标签创建一个渲染进程。出于安全考虑，渲染进程都是运行在沙箱模式下。
- GPU 进程：其实，Chrome 刚开始发布的时候是没有 GPU 进程的。而 GPU 的使用初衷是为了实现 3D CSS 的效果，只是随后网页、Chrome 的 UI 界面都选择采用 GPU 来绘制，这使得 GPU 成为浏览器普遍的需求。最后，Chrome 在其多进程架构上也引入了 GPU 进程。
- 网络进程：主要负责页面的网络资源加载，之前是作为一个模块运行在浏览器进程里面的，直至最近才独立出来，成为一个单独的进程。
- 插件进程：主要是负责插件的运行，因插件易崩溃，所以需要通过插件进程来隔离，以保证插件进程崩溃不会对浏览器和页面造成影响。

### 性能相关
[实战篇 - 如何实现和淘宝移动端一样的模块化加载 （task-silce）](https://juejin.im/post/5d33fd0f5188256e820c80d4)

[性能优化篇 - Performance（工具 & api）](https://juejin.im/post/5c8fa71d5188252d785f0ea3)

### 文档
[ECMAScript® 2019 Language Specification](http://ecma-international.org/ecma-262/)

[ECMAScript 5.1](http://es5.github.io/)

[90行代码，15个元素实现无限滚动](https://sale-dev.saas.crland.com.cn/customerManage/customerInputter) / [代码](https://codesandbox.io/s/react-wuxiangundong-i7ppg)

[Monorepo——大型前端项目的代码管理方式](https://segmentfault.com/a/1190000019309820)

##  后端

## 优秀资源
### 书籍
[阮一峰 —— 互联网上的免费书籍](https://github.com/ruanyf/free-books)

[Webpack 指南](https://www.webpackjs.com/guides/)

[阿里工程师的自我修养.PDF](./阿里工程师的自我修养.pdf)

### 工具
[百度网盘不限速下载器](https://github.com/b3log/baidu-netdisk-downloaderx)

### 资源
[github emoji 库 ](https://www.webfx.com/tools/emoji-cheat-sheet/) :smile: 

[阿里图标库](https://www.iconfont.cn/home/index)

[github 每日趋势](https://github.com/trending) :fire:

[流体动画](https://github.com/PavelDoGreat/WebGL-Fluid-Simulation)

### 敏捷相关 & 团队
[猪齿鱼文档](https://choerodon.io/zh/docs/concept/)

[敏捷管理](https://mp.weixin.qq.com/s/xyMsn5p-_t0YW5h3yjM_Iw)

[gitflow](https://www.cnblogs.com/wish123/p/9785101.html)

[前端协作规范](https://juejin.im/post/5d3a7134f265da1b5d57f1ed)

## 待读 & 待分类
[前端大文件上传](https://juejin.im/post/5cf765275188257c6b51775f)