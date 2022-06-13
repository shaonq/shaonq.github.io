import{_ as o}from"./index.ebd9b1da.js";import{e as r,o as t,m as n}from"./vendor.c8610fdc.js";const e={mounted(){}},s={class:"u-quill-body"},a=n(`<h1>docker\u642D\u5EFAkoa\u5F00\u53D1\u73AF\u5883</h1><h1>\u5DE5\u5177\u5B89\u88C5</h1><ul><li>docker windows<a href="https://www.docker.com/products/docker-desktop" target="_blank">\u4E0B\u8F7D\u5730\u5740</a></li></ul><hr><ol><li><code>images: node:10.16.0 + nginx +mysql:5.6 </code></li><li><code>koa: koa + koa-router + mysql + promise-mysql</code></li><li><code>docker-compose</code></li></ol><figure contenteditable="false" tabindex="-1"><hr></figure><h1>\u6839\u76EE\u5F55\u6587\u4EF6</h1><ul><li>server.js</li></ul><pre>const Koa = require(&#39;koa&#39;)\r
const Router = require(&#39;koa-router&#39;)\r
const mysql = require(&#39;promise-mysql&#39;)\r
const app = new Koa()\r
const router = new Router()\r
\r
// \u6839\u8DEF\u7531\r
router.get(&#39;/&#39;, async ctx=&gt;{ctx.body = &#39;hello word&#39;});\r
\r
// \u6D4B\u8BD5mysql\u8FDE\u63A5\u8DEF\u7531\r
router.get(&#39;/db&#39;, async ctx=&gt;{\r
let db = await mysql.createPool({\r
	host: &#39;mysql&#39;,\r
	port: 3306,\r
	user: &#39;root&#39;,\r
	password: &#39;123456&#39;\r
})\r
let res = await db.query(&#39;SHOW DATABASES&#39;)\r
ctx.body = res\r
})\r
\r
app.use(router.routes())\r
app.listen(3000)\r
</pre><ul><li>package.json</li></ul><pre>{\r
  &quot;name&quot;: &quot;docker-koa&quot;,\r
  &quot;version&quot;: &quot;1.0.0&quot;,\r
  &quot;description&quot;: &quot;&quot;,\r
  &quot;main&quot;: &quot;index.js&quot;,\r
  &quot;scripts&quot;: {\r
    &quot;start&quot;: &quot;nodemon server.js&quot;\r
  },\r
  &quot;keywords&quot;: [],\r
  &quot;author&quot;: &quot;shaonq&quot;,\r
  &quot;license&quot;: &quot;MIT&quot;,\r
  &quot;dependencies&quot;: {\r
    &quot;koa&quot;: &quot;^2.13.1&quot;,\r
    &quot;koa-router&quot;: &quot;^10.0.0&quot;,\r
    &quot;nodemon&quot;: &quot;^2.0.12&quot;,\r
    &quot;promise-mysql&quot;: &quot;^5.0.3&quot;\r
  }\r
}\r
</pre><ul><li>.dockerignore</li></ul><pre>*.log\r
.idea\r
.node_modules\r
node_modules\r
.vscode\r
</pre><ul><li>docker-compose.yml</li></ul><pre>version: &quot;3&quot;\r
services:\r
        koa:\r
                image: node:10.16.0                          #node\u955C\u50CF\u540D\u79F0\r
                working_dir: /koa                            #\u5DE5\u4F5C\u76EE\u5F55\u7684\u8DEF\u5F84\r
                build:                                       #\u6784\u5EFA\u955C\u50CF\r
                     context: ./                            #\u4E0A\u4E0B\u6587\u73AF\u5883\r
                     dockerfile: ./compose/koa.Dockerfile            #Dockerfile\u8DEF\u5F84\r
                volumes:                                     #\u6302\u8F7D\u70B9 [\u683C\u5F0F] \u672C\u5730\u6587\u4EF6:\u6620\u5C04\u8DEF\u5F84\r
                        - .:/koa                             # \r
                ports:                                       #\u7AEF\u53E3\u6620\u5C04\r
                        - &quot;3000:3000&quot;                        #\u672C\u5730\u7AEF\u53E3:\u5BB9\u5668\u7AEF\u53E3\r
                command: npm start #\u8FD9\u6761\u547D\u4EE4\u4F1A\u5728\u5DE5\u4F5C\u76EE\u5F55\u4E0B\u6267\u884C\r
        mysql:\r
                image: mysql:5.6\r
                volumes:\r
                        - ./mysql:/var/lib/mysql\r
                command: --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci\r
                restart: always\r
                environment:\r
                        - MYSQL_ROOT_PASSWORD=123456         #root password \r
                        - MYSQL_DATABASE=db_database\r
                ports:\r
                        - &quot;3306:3306&quot;\r
        nginx:\r
                image: nginx:latest\r
                volumes:\r
                        - ./static:/code/static\r
                        - ./compose/nginx.conf:/etc/nginx/conf.d/default.conf\r
                ports:\r
                        - &quot;80:80&quot;\r
</pre><ul><li>compose/nginx.conf</li></ul><pre>server {\r
    listen       80;\r
    server_name  localhost;\r
\r
    location /static {\r
        alias /koa/static;             # \u4EE3\u7406\u8BBF\u95EE/koa/\u4E0B\u7684static\r
    }\r
\r
    location / {\r
        proxy_pass http://koa:3000;    #  docker-compose.yml koa\r
    }\r
}\r
			</pre><ul><li>compose/koa.Dockerfile</li></ul><pre>FROM node:10.16.0                       # \u4F7F\u7528\u7684\u57FA\u7840\u955C\u50CF\u6587\u4EF6\r
WORKDIR /koa                            # \u5DE5\u4F5C\u76EE\u5F55\u7684\u8DEF\u5F84\r
COPY ./package.json ./server.js /koa/   # \u62F7\u8D1D\u6587\u4EF6\u5230/koa\r
COPY ./static /koa/static               # \u62F7\u8D1D\u6587\u4EF6\u5230/koa/static\r
RUN sed -i &#39;s/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g&#39; /etc/apk/repositories \\\r
	&amp;&amp; apk update &amp;&amp; apk add yarn \\\r
	&amp;&amp; yarn config set registry https://registry.npm.taobao.org/ \\\r
	&amp;&amp; yarn       # \u8BBE\u7F6E\u955C\u50CF\u6E90\u5230\u56FD\u5185, \u66F4\u65B0; \u5B89\u88C5yarn,yarn\u8BBE\u7F6E\u56FD\u5185\u955C\u50CF\u6E90\uFF0C\u5B89\u88C5\u4F9D\u8D56\r
CMD [&quot;npm&quot;, &quot;start&quot;]  # \u5BB9\u5668\u542F\u52A8\u65F6\u8FD0\u884C\r
			</pre>`,19),u=[a];function i(c,l,q,d,p,m){return t(),r("div",s,u)}var y=o(e,[["render",i]]);export{y as default};
