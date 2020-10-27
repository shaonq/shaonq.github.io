(function () {
    var util = {
        type: {
            msg: function (option) {
                var a = '<div class="{{d.me}}"> \
                            <p>{{d.text}}</p>\
                         </div>',
                    b = {
                        text: option.text,
                        time: nui.util.date.now(),
                        user: option.user || "你猜我是谁",
                        img: option.img || "http://placeholder.qiniudn.com/40x40/ddd/ddd",
                        me: (option.me ? "this" : "")
                    };
                return nui.tpl(a, b)
            },
            zip: function (option) {
                var a = '<div class="{{d.me}}" type="zip"> \
                            <p><a href="{{d.text}}">下载</a></p>\
                         </div>',
                    b = {
                        text: option.text,
                        time: nui.util.date.now(),
                        user: option.user || "你猜我是谁",
                        img: option.img || "http://placeholder.qiniudn.com/40x40/ddd/ddd",
                        me: (option.me ? "this" : "")
                    };
                return nui.tpl(a, b)
            }
        }
    };
    var global = window.nui.chat = function (option) {
        this.box = option.box

    };
    global.prototype.escape = function (html) {
        return String(html || '').replace(/&(?!#?[a-zA-Z0-9]+;)/g, '&amp;')
            .replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');
    };
    global.prototype.send = function (op) {
        var box = this.box;
        if (typeof op === "object") {
            op.type in util.type ? box.append(util.type[op.type](op)) : box.append(util.type.msg(op));
            var thisBox = box[0];
            nui.animate(thisBox.scrollTop, thisBox.scrollHeight, function (v) {
                thisBox.scrollTop = v
            }, "easeOut", 1000)
        }

    };
    global.prototype.ai = function (text, callback) {
        var config = [
            {
                text: "笑话",
                random: 0.6,
                func: 'joke'
            }
        ];
        var type = {
            joke: function () {
                nui.http("https://bird.ioliu.cn/joke/rand", function (e) {
                    if (e.status.code === 200) {
                       callback(nui.tpl('<img src="{{d.url}}" draggable="false"><span style="padding: 10px;\
                        text-align: {{ (d.content.length>10?\'left\':\'center\') }};\
                        display: block;">{{d.content}}</span>',e.data[nui.util.randomSize(0,9)|0]))
                    } else {
                        type.all();
                    }
                });
            },
            all: function () {
                nui.http("https://bird.ioliu.cn/v1?url=http://www.tuling123.com/openapi/api", {
                    key: "71d42b94bc57459a9a99017b53377579", info: text
                }, function (e) {
                    if (e && e.text) callback(e.text)
                });
            }
        };
        try {
            var on, index;
            for (index in config) {
                if (!on) {
                    if ((config[index].text.indexOf(text) !== -1) && ( (nui.util.randomSize(0, 10) | 0) / 10 <= config[index].random)) {
                        type[config[index].func]();
                        on = !0;
                    } else {
                        type.all();
                        on = !0;
                    }
                }
            }
        } catch (e) {
            type.all()
        }
    };
    if (window.nui) {
        var content = '<style>  \
            .__c{position:fixed;left:50%;top:50%;width:320px;margin-top:-240px;margin-left:-160px;height:430px;border-radius:0 0 3px 3px;overflow:hidden;box-shadow:0 4px 16px rgba(0,0,0,0.16)}\
            .__cc{height:5px;background-color:#f75b43}.__cc:hover{cursor:move}.__cc,.__ch,.__cb{position:relative;width:100%;box-sizing:border-box}\
            .__ch{height:340px;overflow-x:hidden;overflow-y:scroll;padding:10px 0 0;background-color:#eee}\
            .__cb{height:85px;background-color:#fff}.__ch>div>*{display:none}.__ch>div>p{max-width:280px;padding:9px 13px;background-color:#fff;min-height:1em;display:inline-block;vertical-align:top;position:relative;text-align:left;font-size:13px;border-radius:3px;color:#666;margin:5px 10px;animation:scale-in cubic-bezier(0.22,0.58,0.12,0.98) .5s}\
            .__ch>div>p:before{content:" ";position:absolute;top:12px;right:100%;border:6px solid transparent;border-right-color:#fafafa}\
            .__ch>div.this>p:before{right:auto;left:100%;border-right-color:transparent;border-left-color:#b2e281}\
            .__ch>div.this{text-align:right}.__ch>div.this p{background-color:#b2e281}.__cb a{margin-top:10px;margin-right:10px}\
            </style><div class="__c a-move-in-top"> <div class="__cc"></div><div class="__ch"> </div> <div class="__cb"> <div> <textarea class="nui-textarea nui-noborder" placeholder="按 Enter 发送"></textarea> <span  class="fr hide"><a class="nui-btn nui-btn-red" onclick="parentNode.parentNode.parentNode.parentNode.style.display=\'none\'">关闭</a> <a id="submit" class="nui-btn nui-btn-default">发送</a> </span></div> </div> </div> '
        var d = document.createElement('div');
        d.innerHTML = content;
        document.body.appendChild(d);
        !function () {
            var __ch = $(".__ch");
            __ch.on("click","img",function () {
               nui.open({
                   content:'<img src='+this.getAttribute('src')+'>',title:$(this).next('span').html()
               })
            });
            nui.util.drop($(".__c"), ".__cc");
            var chat = new nui.chat({box: __ch});
            var arr = ['见到你很高兴！', '本站导航：<a class="" href="/na" target="_blank">主页</a>、<a class="" href="/nui/temple/api" target="_blank">文档</a>'],
                index = 0,
                timer = setInterval(function () {
                    var text = arr[index];
                    text ? (chat.send({text: text}), index++) : clearInterval(timer);
                }, 5e2);
            var textarea = $(".nui-textarea");
            var filter = function (text) {
                switch (!0) {
                    case text.indexOf("首页") !== -1:
                    case text.indexOf("home") !== -1:
                        nui.alert("跳转中...");
                        setTimeout(function () {
                            location.href = '/na';
                        }, 8e2);
                        break;
                    case text.indexOf("下载") !== -1:
                        chat.send({type: 'zip', text: 'resource/nui.' + nui.v + '.zip', me: !0});
                        break;
                    case text.indexOf("api") !== -1:
                    case text.indexOf("API") !== -1:
                        nui.alert("跳转中...");
                        setTimeout(function () {
                            location.href = 'temple/api.html';
                        }, 8e2);
                        break;
                    default:
                        nui.debounce(function () {
                            chat.send({text: text, me: !0});
                            chat.ai(text, function (text) {
                                chat.send({text: text});
                            })
                        }, 100)();
                        break;
                }
            };
            var historyText = (nui.store("_Chat_History_Text") || {}).text;
            var submit = function () {
                var text = textarea.val() || "";
                if ("" !== text.replace(/\s/g, "")) {
                    nui.store("_Chat_History_Text", {text: text});
                    historyText = text;
                    filter(chat.escape(text));
                    textarea.val('');
                }
            };
            textarea.on("keydown", function (e) {
                if (e.keyCode === 13) {
                    return submit(), false
                }
                if (e.keyCode === 38 && this.value === "" && historyText) {
                    return this.value = historyText, false
                }
            });
            $("#submit").on("click", submit);


            var input = $(".ing-header input");
            input.length ? __ch.parent().hide() : __ch.parent().show();
            input.on("change", function () {
                __ch.parent().show();
                filter(chat.escape(this.value));
                this.value = '';
            })
        }();
    }
}());