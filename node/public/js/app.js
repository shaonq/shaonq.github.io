window.ing = function (t) {
    return window.requestAnimationFrame = window.requestAnimationFrame || function (t) {
            return setInterval(t, 100)
        }, window.cancelAnimationFrame = window.cancelAnimationFrame || function (t) {
            clearInterval(t)
        }, t.addText = function (t, n, e, i) {
        return i = i || {}, i.index = 0, function () {
            t.innerHTML = n.substr(0, i.index) + (i.text || ""), i.index++, i.each && i.each();
            var a = requestAnimationFrame(arguments.callee);
            n.length < i.index && (cancelAnimationFrame(a), e && e())
        }(), this
    }, t.copy = function () {
        var n = $, e = n(this), i = function (t) {
            try {
                return document.execCommand ? function () {
                        var n = function (n) {
                            n.clipboardData ? n.clipboardData.setData("text/plain", t) : window.clipboardData && window.clipboardData.setData("text", t), n.preventDefault()
                        };
                        return document.addEventListener("copy", n), document.execCommand("copy"), document.removeEventListener("copy", n), t
                    }() : void 0
            } catch (n) {
                return void 0
            }
        };
        e.on("dblclick", function () {
            var n = "input" == this.tagName.toLocaleLowerCase() ? this.value : this.innerHTML;
            i(n) ? nui.open("复制成功，按Ctrl+V粘贴", "green") : nui.open("您的浏览器不支持复制", "orange")
        })
    }, t.ie = function () {
        var n = $("pre");
        nui.form({
            form:'.nui-form_redirect',
            url:location.href
        },function (e) {
            if(e&&e.status === 1 ){
                nui.open({type:3,content:e.msg||'跳转中，清稍等..',skin:"green",time:2});
                setTimeout(function () {
                    location.href=e.redirect|| location.href;
                },2000)
            }else {
                nui.open({type:3,content:e.msg||'异常错误',skin:"orange",time:3})
            }
        });
        /** 用户头像 */
        var photo = $(".app-user_photo");
        photo.each(function () {
            nui.upload({
                elem:this,
                name: 'file',
            },function (e) {
                e.status === 1?function () {
                        photo.find('img').attr('src',e.url);
                        nui.open({
                            shadow:false,
                            title:'是否保存当前头像',
                            content:'<ul class="center"><li class="nui-btn js-yes">确认</li><li class="nui-btn nui-btn-default  js-no">取消</li></ul>',
                            success:function (that,index) {
                             $('.nui-btn',that).on("click",function () {
                                 if ($(this).hasClass('js-yes')) {
                                     $.post("/user/setPhoto", {url: e.url}, function (e) {
                                         e.status === 1 ?
                                             nui.open({type: 3, content: e.msg || '更新成功', skin: "green", time: 2})
                                             : nui.open({type: 3, content: e.msg || '更新失败', skin: "orange", time: 2})
                                     })
                                 }
                                 nui.close(index)
                             })
                            }
                        })
                    }():nui.open({type:3,content:e.msg||'上传失败',skin:'orange'});
            })
        });
        return n.length && nui.loadJs("//cdn.bootcss.com/prettify/r298/prettify.min.js", function () {
            n.each(function () {
                if (-1 !== this.className.indexOf("ing-pre"))try {
                    new Function(this.innerHTML)()
                } catch (t) {
                    nui.log(t.message, "error")
                }
            }), n.addClass("prettyprint") && prettyPrint()
        }), nui.is.ie
    }(), t
}({}, window);