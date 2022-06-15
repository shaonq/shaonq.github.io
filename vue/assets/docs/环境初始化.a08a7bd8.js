import{_ as e}from"../index.e3586e2d.js";import{d as r,q as o,l as s,I as n}from"../@vue/@vue.3037e913.js";import"../shaonq/shaonq.754e411d.js";import"../vue-router/vue-router.4388a103.js";import"../pinia/pinia.03fbb748.js";import"../vue-demi/vue-demi.784001c0.js";import"../quill/quill.3362dfa5.js";import"../nprogress/nprogress.18cafdd9.js";import"../echarts/echarts.22f0db08.js";import"../tslib/tslib.b9ce9c9f.js";import"../zrender/zrender.31b37330.js";const t=r({setup:()=>({})}),i={class:"u-quill-body"},l=[n('<h1>工具版本</h1><ul><li class="u-color-light">node v14.16.0(2021-09)[截至 2023-04]</li><li>node v16.13.0(2022-04)[推荐]</li><li>yarn v1.22.18</li></ul><h1>工具安装</h1><div><ul><li><code>VS Code</code><a href="https://pc.qq.com/detail/16/detail_22856.html">下载地址</a>，部分插件如下： <ol><li><code>Chinese (Simplified) Language Pack for Visual Studio Code</code> 一 中文语言包</li><li><code>Vetur</code> 一 <code>Vue</code> 语法工具</li><li><code>Auto Close Tag</code> 一 自动添加结束标签</li><li><code>IntelliJ IDEA Keybindings</code> 一 <code>IntelliJ</code>风格快捷键</li></ol><blockquote>推荐登录账号同步插件 、 <code>vscode</code>,<code>git</code>,<code>nodejs</code> 安装在系统盘</blockquote></li><li><a href="https://pc.qq.com/detail/13/detail_22693.html"><code>Git</code>下载地址</a></li><li><a href="https://nodejs.org/en/blog/release/v14.16.0/"><code>Node</code>下载地址</a></li></ul><h1>项目依赖包( yarn )</h1><pre class="line-numbers"><code class="language-javascript">\r\n # npm config set registry https://registry.npm.taobao.org \r\n npm install -g yarn --registry https://registry.npm.taobao.org\r\n yarn config set registry https://registry.npm.taobao.org -g\r\n yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g\r\n # yarn global add @vue/cli\r\n # yarn config set electron_mirror https://cdn.npm.taobao.org/dist/electron/\r\n</code> </pre><h1 style="color:#ff4e20;">﹡ 由于2021年 taobao npm 不稳定,以下备选</h1><blockquote><p>[非必须]去除node-sass 使用dart-sass ,(dart-sass2.0语法差异，这里使用固定版本)</p><p> &quot;sass&quot;: &quot;~1.32.6&quot;, &quot;sass-loader&quot;: &quot;~10.2.0&quot; <del>,&quot;node-sass&quot;: &quot;^4.12.0&quot;</del></p></blockquote><pre> # npm default registry\t  \r\n npm config set registry http://registry.npmjs.org\r\n\r\n # tencent npm registry  \r\n yarn config set registry  http://mirrors.cloud.tencent.com/npm/ \r\n\r\n # huawei npm registry  \r\n yarn config set registry https://repo.huaweicloud.com/repository/npm/\r\n yarn config set sass_binary_site https://repo.huaweicloud.com/node-sass\r\n\r\n yarn cache clean -f\r\n </pre></div><h1>兼容IE10+</h1><h1 style="color:#ff4e20;">﹡ 2022年6月15日后IE11将不再被支持</h1><div><blockquote>package.json -&gt; browserslist 或者 .browserslist  添加 [“not ie &lt; 10”]</blockquote><div><blockquote> Vue CLI 项目会使用 @vue/babel-preset-app，它通过 @babel/preset-env 和 browserslist 配置来决定项目需要的 polyfill 默认情况下，它会把 useBuiltIns: ‘usage’ 传递给 @babel/preset-env </blockquote><pre class="line-numbers">          <code class="language-shell-session">\r\n# vue-cli3 推荐使用 babel-polyfill@6 \t  \r\nyarn add babel-polyfill -D </code>\r\n          <code class="language-javascript">\r\n# babel.config.js       \r\n  presets: [ [ &quot;@vue/app&quot;, { useBuiltIns: &quot;entry&quot; } ] ]\r\n\r\n# vue.config.js\r\nconfigureWebpack: config =&gt; {\r\n    transpileDependencies: [&#39;*&#39;], // node_modules 里面也需要编译的包\r\n    configureWebpack: config =&gt; {\r\n        config.entry.app = [&quot;babel-polyfill&quot;, &quot;./src/main.js&quot;]\r\n\t\t...\r\n\t}\t\r\n}\t\r\n      </code>  </pre></div></div><h1>项目结构</h1><pre class="line-numbers"><code class="language-javascript">\r\n# public/\r\n# -------- index.html\r\n# src/\r\n# -------- asstes/ # 静态资源\r\n# -------- components/ # 组件\r\n# -------- styles/ # 样式\r\n# -------- utils/ # 工具\r\n# -------- views/ # 程序页面\r\n# -------- App.vue # 入口模板\r\n# -------- main.js # 主程序入口\r\n# -------- router.js # 路由\r\n# -------- store.js # Vuex\r\n# babel.config.js\r\n# vue.config.js \r\n</code></pre><h1>项目启动</h1><pre class="line-numbers"><code class="language-javascript">\r\nyarn   # 安装依赖包\r\nyarn dev   # 启动测试环境\r\nyarn build   # 编译项目 \r\n</code> </pre>',11)];var a=e(t,[["render",function(e,r,n,t,a,c){return s(),o("div",i,l)}]]);export{a as default};
