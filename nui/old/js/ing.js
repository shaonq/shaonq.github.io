window.ing = function (global) { //1e9+
    window.requestAnimationFrame =  window.requestAnimationFrame || function (fn) { return setInterval(fn,1000/10) };
    window.cancelAnimationFrame =  window.cancelAnimationFrame || function(i) { clearInterval(i); };
    global.util = {
        each : function(arr, fn){ var i = 0, len = arr.length; for (; i < len; i++){ if (fn(i, arr[i]) === false){ break } }return this },
        random: function (min, max,fixed) {
            return !max && ( max = min, min = 0 ),( min + Math.random() * (max - min)).toFixed((fixed?fixed:0));
        },
        addText:function (el, html, fn,op) {
            op=op||{},op.index = 0;
            return (function () {
                el.innerHTML = html.substr(0, op.index) +(op.text||'');
                op.index++;
                op.each && op.each();
                var ani = requestAnimationFrame(arguments.callee);
                html.length < op.index && (cancelAnimationFrame(ani),fn && fn())
            })(),this;
        }
    };
    global.blur = function () {
        var G = function (ele, img) {
            this.that = ele;
            this.image = img;
            var x = this.that.width - this.image.width,
                y = this.that.height - this.image.height;
            this.context = this.that.getContext("2d");
            this.context.drawImage(this.image, x/2, y/2);   //图片 开始x 开始y
        };
        G.prototype.blur = function(a,b,c){var i,j,k,l,m,n,o,p,q,r,d=a.data,e=a.width,f=a.height,g=[],h=0;for(b=Math.floor(b)||3,c=c||b/3,n=1/(Math.sqrt(2*Math.PI)*c),m=-1/(2*c*c),o=0,i=-b;b>=i;i++,o++)l=n*Math.exp(m*i*i),g[o]=l,h+=l;for(o=0,r=g.length;r>o;o++)g[o]/=h;for(j=0;f>j;j++)for(i=0;e>i;i++){for(k=l=m=n=0,h=0,p=-b;b>=p;p++)q=i+p,q>=0&&e>q&&(o=4*(j*e+q),k+=d[o]*g[p+b],l+=d[o+1]*g[p+b],m+=d[o+2]*g[p+b],h+=g[p+b]);o=4*(j*e+i),d[o]=k/h,d[o+1]=l/h,d[o+2]=m/h}for(i=0;e>i;i++)for(j=0;f>j;j++){for(k=l=m=n=0,h=0,p=-b;b>=p;p++)q=j+p,q>=0&&f>q&&(o=4*(q*e+i),k+=d[o]*g[p+b],l+=d[o+1]*g[p+b],m+=d[o+2]*g[p+b],h+=g[p+b]);o=4*(j*e+i),d[o]=k/h,d[o+1]=l/h,d[o+2]=m/h}return a.data=d,a};
        return function (id) {
            var t = +new Date();
          var el = document.getElementById(id);
          var img = new Image;
          if(el && img){
              img.onload = function () {
                  var bg = new G(el, this);
                  var canvasData = bg.context.getImageData(0, 0, bg.that.width,bg.that.height);
                  bg.context.putImageData(bg.blur(canvasData, 0), 0, 0);
                  console.log(+new Date() - t)
              };
              var attr ="data-src";
              img.src = el.getAttribute(attr)||"s";
              el.removeAttribute(attr)
          }
        };
    }();
    global.copy = function () {
        var l = $, a = l(this);
        var b = function (c, d) {
            try {
                return document.execCommand ? function () {
                    var e = function (f) {
                        if (f.clipboardData) {
                            f.clipboardData.setData("text/plain", c)
                        } else {
                            if (window.clipboardData) {
                                window.clipboardData.setData("text", c)
                            }
                        }
                        f.preventDefault()
                    };
                    document.addEventListener("copy", e);
                    document.execCommand("copy");
                    document.removeEventListener("copy", e);
                    return c
                }() : void 0
            } catch (d) {
                return void 0
            }
        };
        a.on("dblclick", function (d) {
            var c = this.tagName.toLocaleLowerCase() === "input" ? this.value : this.innerHTML;
            b(c) ? global.open("复制成功，按Ctrl+V粘贴", "green") : global.open("您的浏览器不支持复制", "orange")
        })
    };
    global.ie = function () {
        var body = $("body"),win =$(window);
        var pre =$("pre");
        pre.length && nui.loadJs('//cdn.bootcss.com/prettify/r298/prettify.min.js', function () {   //代码高亮 是多大
            pre.each(function () {
                if (this.className.indexOf("ing-pre") !== -1) {
                    try {
                        new Function(this.innerHTML)();
                    } catch (e) {
                        nui.log(e.message,"error")
                    }
                }
            });
            pre.addClass("prettyprint linenums") && prettyPrint();

        });
        var boxItems = [];
        $(".nui-box.nui-box-large").each(function () {
           if(this.id){
               boxItems.push({
                   id:this.id,
                   name:$(".nui-box-hd",this).html()
               })
           }
        });
        if (boxItems.length > 1) { //{{ i==0?\'this\':\' \' }}"
            var tpl = '<div class="nui-dropdown" style="max-height:inherit;margin: -10px -20px" >{{# for(var i in d){}}<a class="nui-dropdown-item nui-overflow" draggable="false" href="javascript:;" data-anchor="#{{d[i].id}}" title="{{d[i].name}}">{{d[i].name}}</a>{{#}}}</div> ';

            nui.is.android||nui.is.ios||nui.open({
                fixed: true,
                title: "导航",
                close: false,
                shadow: false,
                width:"200px",
                offset: "r",
                content: nui.tpl(tpl, boxItems),
                success:function () {
                    var t =$("a",this);
                    nui.renderData("anchor",this);
                    t.on("click",function (e) {
                        t.removeClass('this');
                        this.className += ' this';
                       // location.hash = this.getAttribute("data-anchor");
                        //nui.anchor.call(this);

                        return false;

                    });
                }
            })
        }
        body.addClass("loaded");    //完毕
        return nui.is.ie


    }();
    return global
}({},window);
nui&&(nui.log = function (t, e, n) {
    window.console && t && "error" === e && (n = "red"), "success" === e && (n = "green"), console.log("%c" + (e || "info") + " ", "color:" + (n || "blue") + ";", t)
});