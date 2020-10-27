## 写在前面
``` javascript
/**
 * 声明           本文章由mcwm原创
 * 分类           javascript 工具
 * 功能           体验优化
 */ 
```

## 写这篇文章的目的
网页如何预览PDF文件


## PDF.js
pdf.js，为其为HTML5实现的，无需任何本地支持，即可讲pdf文件转换为html可显示的内容，即实现在线预览。


## 快速实现网页如何预览PDF文件

关于原理，我还没有研究，这里就不讲了。
写这文章的意义在于，公司的很多小伙伴需要在线预览pdf文件，我这里就用最小的时间写一个基本的文档，以方便小伙帮。这里只讨论快速预览功能


## javascript 代码
```javascript
    // 唯一依赖 https://cdn.bootcss.com/pdf.js/2.0.163/pdf.min.js
    function getParam(a) { /* 鑾峰彇鍙傛暟 */
        var r = new RegExp("(\\?|#|&)" + a + "=([^&#]*)(&|#|$)"), m = location.href.match(r);
        return decodeURIComponent(!m ? "" : m[2]);
    }
    var loadPage =function () {

    };
    var numPages ;
    var pageNumber = 1;
    var num = document.getElementById('num');
    //PDFJS.workerSrc = 'https://cdn.bootcss.com/pdf.js/2.0.163/pdf.worker.js'; //加载核心库
    function loadPdfPath(path) {
        PDFJS.getDocument(path||'https://shaonq.github.io/md/__file/如何快速实现网页预览PDF文件.pdf').then(function(pdf) {
            console.log(pdf)
            // you can now use *pdf* here
            numPages =pdf.numPages;
            var canvas = document.getElementById('canvas');
            var context = canvas.getContext('2d');
            var loadPdfPage = function (pageNumber,callback) {
                pdf.getPage(pageNumber).then(function(page) {
                    console.log('Page '+pageNumber+' loaded');
                    var scale = 1.5;
                    var viewport = page.getViewport(scale);
                    // Prepare canvas using PDF page dimensions
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;
                    // Render PDF page into canvas context
                    var renderContext = {
                        canvasContext: context,
                        viewport: viewport
                    };
                    var renderTask = page.render(renderContext);
                    renderTask.then(function () {
                        console.log('Page '+pageNumber+' rendered');
                        callback&&callback()
                    });
                });
            };
            loadPage = function (v) {
              pageNumber = pageNumber+(v|0);
              if(pageNumber > numPages)pageNumber=numPages;
              if(pageNumber < 1) pageNumber=1;
              loadPdfPage(pageNumber)

                num.innerHTML = pageNumber+'/'+numPages;
            };
            loadPage()


        }).catch(function (e) {
            document.getElementById('error').style.display='block'
        });
    }
    var pdfPath = getParam('pdf');
    loadPdfPath(pdfPath)

```
## demo


[点击预览](http://maika.coding.me/pdf/)
> 在线预览其他PDF文件, 加参数`?pdf= http://*.pdf` 
[在线预览网络上的pdf](http://maika.coding.me/pdf/?pdf=http://cdn.mozilla.net/pdfjs/tracemonkey.pdf)
