/*! na.js */

;!function () {
    var $app = $("#NA_app");
    var na = {};
    var noTop = top !== self;
    if(noTop){
        var open = nui.open;
        nui.open = function () {
        if(typeof arguments[0] === "object" && arguments[0].type ===4) {return open.apply(nui,arguments);}
        return top.window.nui.open.apply(top.window.nui,arguments)
    }}
    var $iframe =  $("#NA_iframe",top.window.document.body);
    na.contentWindow =$iframe[0].contentWindow;
    /**
     * 路由功能
     */
    na.router = {
        isOk: function () {
            if ($iframe.length) {
                return true
            }
            nui.toast('错误的路由指令');
            return false
        },
        load:function(){
           var parent = $iframe.parents('.na-body');
           if(parent.length){
               parent.addClass('is-loading');
               $iframe.one('load', function () {
                   parent.removeClass('is-loading');
               })
           }
        },
        push: function (path) {
            if (this.isOk()) {
                $iframe.attr('src', path);
                this.load()
            }
        },
        refresh: function () {
            if (this.isOk()) {
                $iframe[0].contentWindow.location.reload(true);
                this.load()
            }
        }
    };
    var requestFull = (function () {
        var val, str = [
            ['requestFullscreen', 'exitFullscreen'],
            // New WebKit
            ['webkitRequestFullscreen', 'webkitExitFullscreen'],
            // Old WebKit (Safari 5.1)
            ['webkitRequestFullScreen', 'webkitCancelFullScreen'],
            ['mozRequestFullScreen', 'mozCancelFullScreen'],
            ['msRequestFullscreen', 'msExitFullscreen']
        ], i = 0, l = str.length, ret = {};
        for (; i < l; i++) {
            val = str[i];
            if (val && val[1] in document) {
                for (i = 0; i < val.length; i++) {
                    ret[str[0][i]] = val[i];
                }
                return ret;
            }
        }
        return false;
    })();
    var keyboardAllowed = typeof Element !== 'undefined' && 'ALLOW_KEYBOARD_INPUT' in Element;
    na.requestFullscreen = function (elem) {
        elem = elem || document.documentElement;
        var request = requestFull.requestFullscreen;
        // Safari 浏览器中，如果方法内有参数，则 Fullscreen 功能不可用。
        if (/ Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent)) {
            elem[request]();
        } else {
            // Chrome 参数 Element.ALLOW_KEYBOARD_INPUT 使全屏状态中可以键盘输入。
            elem[request](keyboardAllowed && Element.ALLOW_KEYBOARD_INPUT);
        }
    };
    na.exitFullscreen = function () {
        document[requestFull.exitFullscreen]()
    };
    /** na 指令 */
    var $na = function (str) {return $("["+str+"]")};
    /** 路由 */
    $na("na-route").on("click",function () {
        na.router.push(this.getAttribute("na-route"));
    });
    /** 事件 */
    $na('na-click').on("click",function () {
        var that =$(this),ev = that.attr("na-click");
        if(ev)switch (ev){
            case 'refresh':
                na.router.refresh();
                break;
            case 'fullscreen':
                var className = 'is-fullscreen';
                if($app.hasClass(className)){
                    $app.removeClass(className);
                    na.exitFullscreen();
                }else {
                    $app.addClass(className);
                    na.requestFullscreen()
                }
                break;
        }
    });
    window.na =na;
}(jQuery,nui);