define(function (require) {
    var $ = require("jquery"), global = {};
    window.requestAnimationFrame =  window.requestAnimationFrame || function (fn) { return setInterval(fn,1000/10) };
    window.cancelAnimationFrame =  window.cancelAnimationFrame || function(i) { clearInterval(i); };
    global.util = {
        each : function(arr, fn){ var i = 0, len = arr.length; for (; i < len; i++){ if (fn(i, arr[i]) === false){ break } }return this },
        random: function (min, max) {
            return !max && ( max = min, min = 0 ), min + Math.floor(Math.random() * (max - min + 1)),this
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
        },
        drop:function (el) {
            var offset = [],isDown,on=this.on;
            var setOffset = function(e) {
                isDown = true;
                offset = [
                    el.offsetLeft - (e.clientX || e.touches[0].clientX),
                    el.offsetTop - (e.clientY || e.touches[0].clientY)
                ]
            };
            var setPosition = function(e) {
                if (isDown) {
                    el.style.right = 'auto';
                    el.style.left = ((e.clientX || e.touches[0].clientX) + offset[0]) +'px';
                    el.style.top = ((e.clientY || e.touches[0].clientY) + offset[1]) +'px';
                }
            };
            on(el, 'mousedown', function (e) {
                if (e.target.tagName == 'P') {
                    setOffset(e)
                }
            });
            on(el, 'touchstart', function (e) {
                setOffset(e)
            });
            on(document, 'mouseup', function (e) {
                isDown = false
            });
            on(document, 'touchend', function (e) {
                isDown = false
            });
            on(document, 'mousemove', function (e) {
                e.preventDefault();
                setPosition(e)
            });
            on(document, 'touchmove', function (e) {
                e.preventDefault();
                setPosition(e)
            });
            return this;
        },on : function(el, ev, fn){ return( el.attachEvent ? el.attachEvent('on'+ ev, function(){ fn.call(el, window.event); }) : el.addEventListener(ev, fn, false)),global.util}
    };

    global.mind = function(op) {
        var log ={};
        log.init = function () {
            op.el.html('<div class="mind-note"></div><div class="style"><p  type="hd">console: index.css</p><div type="bd"><div class="line"></div><style spellcheck="false" class="code"></style></div></div>');
            setTimeout(function () { log.main() }, 1800)
        }();
        log.main =function () {
            var me = document.querySelector('.mind-note');
            var code = document.querySelector('.code');
            var style = document.querySelector('.style');
            var line = function() { var row = (code.offsetHeight - 2 * 14) / 16; var nums = ''; for (var i = 1; i <= row; i ++) { nums += i + '<br />' } if(document.querySelector('.line'))document.querySelector('.line').innerHTML = nums };

            var text ='{<p> 蒹葭苍苍，白露为霜。</p>\n<p>所谓伊人，在水一方。\n<p class="right"><a>【作者】</a>佚名 <a>【朝代】</a>先秦,</p>\n}';
            var css = '.mind-note p {\n    margin-left: 40px;\n    line-height: 1.4;\n}\n.mind-note a {\n    color: #2d9cd0;\n    margin-left: 10px;\n}\n';

            global.util.addText(me,text,function () {
                style.style.display = 'block';
                global.util.addText(code,css,function () {
                    code.setAttribute('contenteditable', true);
                    global.util.on(code,'focus', function() {
                        style.style.background = '#ebeeef';
                    }).on(code,'blur', function() {
                        style.style.background = '#fafafa';
                        window.scroll(0, 0)
                    }).on(code,'input', function() {
                        line()
                    })
                },{each:function () {
                    line()
                }});
            },{text:'<em>|</em>'}).drop(style);

        }
    };

    global.parallax = function(op) {
        var log ={};
        log.init = function () {
            var html = '<style>/**视觉差 */\
                .parallax { width: 400px; margin: 30px; display: inline-block; text-align: left; text-decoration: none; position: relative; vertical-align: top; }\
            .parallax .tl , .parallax .tr , .parallax .bl , .parallax .br { position: absolute; width: 50%; height: 50%; z-index: 10; }\
            .parallax .tl { left: 0; top: 0; }\
            .parallax .tr { right: 0; top: 0; }\
            .parallax .bl { left: 0; bottom: 0; }\
            .parallax .br { right: 0; bottom: 0; }\
            .parallax .warp { width: 100%; background: #fff; box-shadow: rgba(0, 0, 0, 0.15) 0 3px 20px; -webkit-transform: perspective(1000px); transform: perspective(1000px); -webkit-transform-style: preserve-3d; transform-style: preserve-3d; -webkit-transition: all 0.4s ease; transition: all 0.4s ease; }\
            .parallax .br:hover ~ .warp { -webkit-transform: perspective(1000px) rotateX(3deg) rotateY(-3deg); transform: perspective(1000px) rotateX(3deg) rotateY(-3deg); }\
            .parallax .tl:hover ~ .warp { -webkit-transform: perspective(1000px) rotateX(-3deg) rotateY(3deg); transform: perspective(1000px) rotateX(-3deg) rotateY(3deg); }\
            .parallax .tr:hover ~ .warp { -webkit-transform: perspective(1000px) rotateX(-3deg) rotateY(-3deg); transform: perspective(1000px) rotateX(-3deg) rotateY(-3deg); }\
            .parallax .bl:hover ~ .warp { -webkit-transform: perspective(1000px) rotateX(3deg) rotateY(3deg); transform: perspective(1000px) rotateX(3deg) rotateY(3deg); }</style>';
            html +='<div style="width: 920px;margin: 20px auto 0"><div class="parallax"><i class="tl"></i><i class="tr"></i><i class="bl"></i><i class="br"></i><div class="warp"><img src="http://p2.wmpic.me/article/2015/06/02/1433222287_QyEEtuic.jpg"></div></div><div class="parallax"><i class="tl"></i><i class="tr"></i><i class="bl"></i><i class="br"></i><div class="warp"><img src="http://p1.wmpic.me/article/2015/10/27/1445916243_CmCpJHtM.JPG"></div></div></div>';
            op.el.html(html);
            setTimeout(function () { log.main() }, 1800)
        }();
        log.main =function () {


        }
    };
    global.flip = function (op) {
        var html = '<style>/**视觉差 */\
                .flip,.flip-item,.flip img {transition: 500ms;width: 100% }\
                .flip {position: relative;transform: perspective(1000px) rotateY(0);  }\
                .flip:hover{transform: perspective(1000px) rotateY(-180deg); }\
                .flip-item{position: absolute;left: 0;top:0;box-shadow: rgba(0, 0, 0, 0.15) 0 4px 16px; }\
                .flip-item+.flip-item{visibility: hidden;opacity: 0;transform: rotateY(-180deg) }\
                .flip:hover .flip-item+.flip-item {visibility: visible;opacity: 1 }\
            }</style>';
        html +='<div style="width: 300px;margin: 20px auto 0">\
            <div class="flip"> <div class="flip-item"><img src="http://p2.wmpic.me/article/2015/06/02/1433222287_QyEEtuic.jpg"></div><div class="flip-item"><img src="http://p1.wmpic.me/article/2015/10/27/1445916243_CmCpJHtM.JPG"></div> </div>\
        </div>';
        op.el.html(html);
    };
    return global
});

