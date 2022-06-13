import{_ as e}from"./index.ebd9b1da.js";import{e as o,o as r,m as s}from"./vendor.c8610fdc.js";const n={mounted(){}},t={class:"u-quill-body"},a=s(`<h1>\u5DE5\u5177\u7248\u672C</h1><ul><li class="u-color-light">node v14.16.0(2021-09)[\u622A\u81F3 2023-04]</li><li>node v16.13.0(2022-04)[\u63A8\u8350]</li><li>yarn v1.22.18</li></ul><h1>\u5DE5\u5177\u5B89\u88C5</h1><div><ul><li><code>VS Code</code><a href="https://pc.qq.com/detail/16/detail_22856.html">\u4E0B\u8F7D\u5730\u5740</a>\uFF0C\u90E8\u5206\u63D2\u4EF6\u5982\u4E0B\uFF1A <ol><li><code>Chinese (Simplified) Language Pack for Visual Studio Code</code> \u4E00 \u4E2D\u6587\u8BED\u8A00\u5305</li><li><code>Vetur</code> \u4E00 <code>Vue</code> \u8BED\u6CD5\u5DE5\u5177</li><li><code>Auto Close Tag</code> \u4E00 \u81EA\u52A8\u6DFB\u52A0\u7ED3\u675F\u6807\u7B7E</li><li><code>IntelliJ IDEA Keybindings</code> \u4E00 <code>IntelliJ</code>\u98CE\u683C\u5FEB\u6377\u952E</li></ol><blockquote>\u63A8\u8350\u767B\u5F55\u8D26\u53F7\u540C\u6B65\u63D2\u4EF6 \u3001 <code>vscode</code>,<code>git</code>,<code>nodejs</code> \u5B89\u88C5\u5728\u7CFB\u7EDF\u76D8</blockquote></li><li><a href="https://pc.qq.com/detail/13/detail_22693.html"><code>Git</code>\u4E0B\u8F7D\u5730\u5740</a></li><li><a href="https://nodejs.org/en/blog/release/v14.16.0/"><code>Node</code>\u4E0B\u8F7D\u5730\u5740</a></li></ul><h1>\u9879\u76EE\u4F9D\u8D56\u5305( yarn )</h1><pre class="line-numbers"><code class="language-javascript">\r
 # npm config set registry https://registry.npm.taobao.org \r
 npm install -g yarn --registry https://registry.npm.taobao.org\r
 yarn config set registry https://registry.npm.taobao.org -g\r
 yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g\r
 # yarn global add @vue/cli\r
 # yarn config set electron_mirror https://cdn.npm.taobao.org/dist/electron/\r
</code> </pre><h1 style="color:#ff4e20;">\uFE61 \u7531\u4E8E2021\u5E74 taobao npm \u4E0D\u7A33\u5B9A,\u4EE5\u4E0B\u5907\u9009</h1><blockquote><p>[\u975E\u5FC5\u987B]\u53BB\u9664node-sass \u4F7F\u7528dart-sass ,(dart-sass2.0\u8BED\u6CD5\u5DEE\u5F02\uFF0C\u8FD9\u91CC\u4F7F\u7528\u56FA\u5B9A\u7248\u672C)</p><p> &quot;sass&quot;: &quot;~1.32.6&quot;, &quot;sass-loader&quot;: &quot;~10.2.0&quot; <del>,&quot;node-sass&quot;: &quot;^4.12.0&quot;</del></p></blockquote><pre> # npm default registry	  \r
 npm config set registry http://registry.npmjs.org\r
\r
 # tencent npm registry  \r
 yarn config set registry  http://mirrors.cloud.tencent.com/npm/ \r
\r
 # huawei npm registry  \r
 yarn config set registry https://repo.huaweicloud.com/repository/npm/\r
 yarn config set sass_binary_site https://repo.huaweicloud.com/node-sass\r
\r
 yarn cache clean -f\r
 </pre></div><h1>\u517C\u5BB9IE10+</h1><h1 style="color:#ff4e20;">\uFE61 2022\u5E746\u670815\u65E5\u540EIE11\u5C06\u4E0D\u518D\u88AB\u652F\u6301</h1><div><blockquote>package.json -&gt; browserslist\xA0\u6216\u8005 .browserslist\xA0 \u6DFB\u52A0 [\u201Cnot ie &lt; 10\u201D]</blockquote><div><blockquote> Vue CLI \u9879\u76EE\u4F1A\u4F7F\u7528 @vue/babel-preset-app\uFF0C\u5B83\u901A\u8FC7 @babel/preset-env \u548C browserslist \u914D\u7F6E\u6765\u51B3\u5B9A\u9879\u76EE\u9700\u8981\u7684 polyfill \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5B83\u4F1A\u628A useBuiltIns: \u2018usage\u2019 \u4F20\u9012\u7ED9 @babel/preset-env </blockquote><pre class="line-numbers">          <code class="language-shell-session">\r
# vue-cli3 \u63A8\u8350\u4F7F\u7528 babel-polyfill@6 	  \r
yarn add babel-polyfill -D </code>\r
          <code class="language-javascript">\r
# babel.config.js       \r
  presets: [ [ &quot;@vue/app&quot;, { useBuiltIns: &quot;entry&quot; } ] ]\r
\r
# vue.config.js\r
configureWebpack: config =&gt; {\r
    transpileDependencies: [&#39;*&#39;], // node_modules \u91CC\u9762\u4E5F\u9700\u8981\u7F16\u8BD1\u7684\u5305\r
    configureWebpack: config =&gt; {\r
        config.entry.app = [&quot;babel-polyfill&quot;, &quot;./src/main.js&quot;]\r
		...\r
	}	\r
}	\r
      </code>  </pre></div></div><h1>\u9879\u76EE\u7ED3\u6784</h1><pre class="line-numbers"><code class="language-javascript">\r
# public/\r
# -------- index.html\r
# src/\r
# -------- asstes/ # \u9759\u6001\u8D44\u6E90\r
# -------- components/ # \u7EC4\u4EF6\r
# -------- styles/ # \u6837\u5F0F\r
# -------- utils/ # \u5DE5\u5177\r
# -------- views/ # \u7A0B\u5E8F\u9875\u9762\r
# -------- App.vue # \u5165\u53E3\u6A21\u677F\r
# -------- main.js # \u4E3B\u7A0B\u5E8F\u5165\u53E3\r
# -------- router.js # \u8DEF\u7531\r
# -------- store.js # Vuex\r
# babel.config.js\r
# vue.config.js \r
</code></pre><h1>\u9879\u76EE\u542F\u52A8</h1><pre class="line-numbers"><code class="language-javascript">\r
yarn   # \u5B89\u88C5\u4F9D\u8D56\u5305\r
yarn dev   # \u542F\u52A8\u6D4B\u8BD5\u73AF\u5883\r
yarn build   # \u7F16\u8BD1\u9879\u76EE \r
</code> </pre>`,11),l=[a];function i(c,d,p,u,g,b){return r(),o("div",t,l)}var y=e(n,[["render",i]]);export{y as default};
