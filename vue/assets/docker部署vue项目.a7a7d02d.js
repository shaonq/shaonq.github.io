import{_ as e}from"./index.ebd9b1da.js";import{e as r,o as n,m as o}from"./vendor.c8610fdc.js";const i={mounted(){}},t={class:"u-quill-body"},d=o(`<h1>docker\u90E8\u7F72vue\u9879\u76EE</h1><h1>\u5DE5\u5177\u5B89\u88C5</h1><ul><li>docker windows<a href="https://www.docker.com/products/docker-desktop" target="_blank">\u4E0B\u8F7D\u5730\u5740</a></li></ul><ol><li>\u542F\u7528\xA0\u7A0B\u5E8F\u4E0E\u529F\u80FD\xA0Hyper-V</li><li>\u542F\u7528\xA0\u7A0B\u5E8F\u4E0E\u529F\u80FD\xA0\u9002\u7528\u4E8E Linux\xA0\u7684\xA0Windows\xA0\u5B50\u7CFB\u7EDF</li><li>\u5B89\u88C5\u9009\u62E9\u4F7F\u7528 WSL2</li></ol><figure contenteditable="false" tabindex="-1"><hr></figure><h1>\u9879\u76EE\u4F9D\u8D56 (\xA0nginx\xA0 )</h1><pre>docker pull nginx</pre><h1>\u5E38\u7528\u547D\u4EE4\xA0</h1><pre>docker image # \u67E5\u770B\u955C\u50CF\r
docker run --name=nginx -d -p 4030:80 nginx # \u5728 4030 \u7AEF\u53E3\u4E0A\u8FD0\u884C nginx \u955C\u50CF\r
# \u8FD0\u884C\u4E4B\u540E\u7684\u955C\u50CF\u53EF\u4EE5\u5728 docker \u5DE5\u5177\u4E0A\u76F4\u63A5\u7BA1\u7406\u548C\u67E5\u770B\u8FD0\u884C\u65E5\u5FD7\r
</pre><h1>\u6253\u5305\u955C\u50CF</h1><p></p><ul><li>\u6DFB\u52A0Dockerfile\u6587\u4EF6</li></ul><pre># nginx\r
FROM nginx\r
# @author: shaonq\r
MAINTAINER shaonq\xA0\r
# copy dist =&gt;\xA0 /usr/share/nginx/html/\r
COPY dist/\xA0 /usr/share/nginx/html/\xA0\r
</pre><ul><li>\u6253\u5305\u955C\u50CF</li></ul><pre># \u6253\u5305\u955C\u50CF\u547D\u4EE4  docker build -t dockervue .\r
# \u57289020\u7AEF\u53E3\u8FD0\u884C\u955C\u50CF docker run --name=dockervue -d -p 9020:80 dockervue \r
# \u5176\u4ED6\u64CD\u4F5C\u53EF\u5728 docker \u4E0A\u76F4\u63A5\u64CD\u4F5C\r
      </pre><blockquote>dist\u6587\u4EF6\u5939\u548CDockerfile \u540C\u7EA7\uFF0C\u6267\u884C\u6253\u5305\u547D\u4EE4\u5C31\u53EF\u4EE5</blockquote><p>\xA0</p><p>\xA0</p><p>\xA0</p>`,19),c=[d];function l(s,p,a,u,h,k){return n(),r("div",t,c)}var f=e(i,[["render",l]]);export{f as default};
