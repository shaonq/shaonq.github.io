define(function (require) {
    /* 全局jquery */
    window.$ = window.jQuery = require('jquery');
    window.nui = require('nui');
    var pre = $("pre");
    pre.length && require.async('cdn/prettify/r298/prettify.min.js', function () {
        pre.addClass("prettyprint") && prettyPrint()
    });
    var header = '\
        <div class="header">\
        <div class="header-links">\
        <div class="main">\
        <div class="right"><a href="javascript:;" onclick=\'window.open("https://shaonq.github.io","","width=375,height=800")\'>手机版</a></div>\
        </div>\
        </div>\
        <div class="header-main main"><a class="header-logo" href="https://shaonq.github.io"></a>\
        <div class="header-search">\
        <div class="new"><label class="tag">最新</label></div>\
        <div class="search-box">\
        <form><input>\
        <button>搜索</button>\
        </form>\
        </div>\
        </div>\
        </div>\
        <div class="header-menu main cl">\
        <div class="menu-lists fl">\
        <span><i class="iconfont icon-menu" aria-hidden="true"></i>网站分类</span>\
        <ul class="menu-nav" style="display: none">\
        <li>IE8+\
        <div class="nav-content">\
        <ul>\
        <li class="nav-item"><img src="images/default.png"></li>\
        </ul>\
        </div>\
        </li>\
        <li>H5 <div class="nav-content"><div class="nav-item"><img src="images/default.png"></div></div> </li>\
        <li>Mobile <div class="nav-content"><div class="nav-item"><img src="images/default.png"></div></div> </li>\
        </ul>\
        </div>\
        <div class="header-nav fl" data-scroll>\
        <a href="animation.html">动画</a>\
        <!--<a href="mod/note/" target="_blank">笔记</a>-->\
        <a href="vision.html">设计</a>\
        <a href="vue/" target="_blank">Vue</a> \
        <a href="nui/" target="_blank">Nui</a> </div>\
        <div class="header-nav fr"><a href="javascript:;">我也感兴趣</a></div>\
        </div>\
        </div>';
    var footer = '\
    <div class="footer">\
        <div class="main center">\
        <ul class="nui-flex ">\
        <li class="col col-3"><i class="iconfont icon-git" aria-hidden="true"></i><a href="https://git.oschina.net/progit/" target="_blank">Git</a></li>\
        <li class="col col-3"><i class="iconfont icon-google" aria-hidden="true"></i><a href="http://rj.baidu.com/soft/detail/14744.html" target="_blank">Google Chrome</a></li>\
        <li class="col col-3"><i class="iconfont icon-iconfont" aria-hidden="true"></i><a href="http://www.iconfont.cn/" target="_blank">iconfont</a></li>\
        <li class="col col-3"><i class="iconfont icon-coding" aria-hidden="true"></i><a href="https://coding.net/" target="_blank">coding</a></li>\
        </ul>\
        <div><a href="javascript:;">关于网站</a><a href="about.html">关于我</a></div>\
    </div>\
    </div>';
    if (document.getElementById("J_header")) document.getElementById("J_header").innerHTML = header;
    if (document.getElementById("J_footer"))document.getElementById("J_footer").innerHTML = footer;
    var use = $("[data-use]");
    use.length && use.each(function () { try { var a = this.getAttribute("data-use"); a && require.async("auto/" + a) } catch (e) { } });


    var scroll = $("[data-scroll]");
    scroll.length && require.async("cdn/iScroll/5.2.0/iscroll-lite.min", function () {
        (nui.is.ios || nui.is.android) && scroll.each(function () {
            this.innerHTML = "<div style='white-space: nowrap;display: inline-block;'>" + this.innerHTML + "</div>";
            var Scroll = new IScroll(this, {snap: true, tap: true, click: true, scrollX: true, scrollY: false});
        })
    });
    var J_loading = $("#J_loading");
    J_loading.length && setTimeout(function () { J_loading.hide(); }, 300);
    try{
        var c = require('base/nui/0.2.0/nui.canvas');
        var d = new c();
        d.getImageData({
            src: "//shaonq.github.io/images/logo/logo.png"
        }, function (d) {
            var canvas = this.canvas,
                context = this.context,
                update = function () {
                    context.clearRect(0, 0, canvas.width, canvas.height);
                    for (var i in d) {
                        context.fillStyle = d[i].fillStyle;
                        if (Math.random() < 0.96) {
                            context.fillRect(d[i].x + Math.random() , d[i].y + Math.random() , 1, 1);
                        }
                    }
                    requestAnimationFrame(update);
                };
            canvas.style.marginTop= '12.5px';
            $(".header-logo").html(canvas).css({
                background:'none'
            });
            //document.body.appendChild();
            update();
        });
    }catch (e){

    }
    var loadChatModel = 'models/chat.js';
    nui.loadJs("/nui/resource/"+loadChatModel,function () {
        nui[loadChatModel]($(".search-box form"))
    });
});

/**
 *     background-color: rgb(248, 181, 0);
 background-image: linear-gradient(to left, rgb(252, 234, 187), rgb(248, 181, 0));
 *
 *
 * */
