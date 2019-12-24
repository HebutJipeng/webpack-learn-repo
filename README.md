## 成为 Webpack 配置工程师的第一步
---

### 构建性能 摘选
- commont env
    - **更新到最新版本**， 此条乃webpack优化第一准则；
    - loader, 对最少数量的必要模块使用 loader。
    - 引导时间(bootstrap) ,每个额外的 loader/plugin 都有其启动时间。尽量少使用工具。
    - ddl, 使用 DllPlugin 为更改不频繁的代码生成单独编译结果。这可以提高应用程序的编译速度，尽管它确实增加了构建过程的复杂度。
    - 小即是快(smaller = faster) ， 减少编译结果的整体大小，以提高构建性能。尽量保持 chunk 体积小。
    - worker 池(worker pool) ，thread-loader 可以将非常消耗资源的 loader 分流给一个 worker pool。
    - 持久化缓存， 使用 cache-loader 启用持久化缓存。使用 package.json 中的 "postinstall" 清除缓存目录。
    - 自定义 plugin/loader。 慎用？
- dev env
    - 增量编译
    - 在内存中编译
    - stats.toJson 加速 ， webpack 4 中默认
    - devtool
    - 避免在生产环境下才会用到的工具
    - 最小化 entry chunk