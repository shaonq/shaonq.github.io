/*! nui.js| MIT License | shaonq@qq.com */
;(function () {
    "use strict";
    var global = {v: '0.1.6'};
    global.log = window.console ? function (t, e, n) {
        location.hostname === "localhost" && t && "error" === e && (n = "red"), "success" === e && (n = "green"), console.log("%c" + (e || "info") + " ", "color:" + (n || "blue") + ";", t)
    } : function () { window.console = { log: function () { }} }();
    global.loadJs = function (src, callback) {
        var n = document.getElementsByTagName("head")[0], o = document.createElement("script");
        o.onload = o.onreadystatechange = o.onerror = function () {
            o && o.readyState && /^(?!(?:loaded|complete)$)/.test(o.readyState) || (o.onload = o.onreadystatechange = o.onerror = null, o.src = "", o.parentNode.removeChild(o), o = null, callback && callback())
        }, o.src = src;
        try {
            n.appendChild(o)
        } catch (i) {
        }
    };
    global.loadCss = function (href, id) {
        var n =  document.getElementsByTagName("head")[0], o = document.createElement("link"),el =document.getElementById(id);
        o.onload = o.onreadystatechange = o.onerror = null,o.rel = "stylesheet", o.href = href;
        try {
            el?(o =null):(id&&(o.id=id),n.appendChild(o))
        } catch (i) {
        }
    };
    global.init = function ($) {
        global.is = function () { /* 环境 */
            var t = {}, e = navigator.userAgent;
            return t.ios = !!e.match(/(iphone|ipod|ipad)/i), t.android = !!e.match(/android/i), t.wechat = !!e.match(/micromessenger/i), e = e.match(/msie \d+?/i), t.ie = function () {
                var t = navigator.userAgent.toLowerCase();
                return window.ActiveXObject || "ActiveXObject" in window ? (t.match(/msie\s(\d+)/) || [])[1] || "11" : !1
            }(), t
        }();
        global.get = {
            param: function (a) { /* 获取参数 */
                var r = new RegExp("(\\?|#|&)" + a + "=([^&#]*)(&|#|$)"), m = location.href.match(r);
                return decodeURIComponent(!m ? "" : m[2]);
            },
            redirect: function (a) { /* 获取重定向地址 */
                var r = "?" + (a || "redirect") + "=", m = location.href.split(r);
                var c = !m ? ""  : (m[1]).match(/http:\/\/([^/]*)\/?/i) || [];
                return decodeURIComponent(c);
            },
            index: 0,
            path: function () {
                var js = document.scripts, script = js[js.length - 1], jsPath = script.src;
                return jsPath.substring(0, jsPath.lastIndexOf("/") + 1);
            }(),
            genId: function (a) { /* 全局唯一变量 */
                return (a || 0) + ++this.index
            },
            className: {
                open: "nui-open"
            },
            check: {
                phone: function (v) {
                    return /^1\d{10}$/g.test(v) ? void 0 : "手机格式不合法"
                },
                pass: function (v) {
                    return /[a-z0-9]{6,}/g.test(v) ? void 0 : "密码太过简单"
                },
                repass: function (v, val) {
                    return val === v ? void 0 : "两次密码不一致"
                },
                email: function (v) {
                    return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(v) ? void 0 : "邮箱格式不正确"
                },
                url: function (v) {
                    return /(^#)|(^http(s*):\/\/[^\s]+\.[^\s]+)/.test(v) ? void 0 : "链接格式不正确"
                },
                date: function (v) {
                    return /^(\d{4})[-\/](\d{1}|0\d{1}|1[0-2])([-\/](\d{1}|0\d{1}|[1-2][0-9]|3[0-1]))*$/.test(v) ? void 0 : "日期格式不正确"
                },
                number: function (v) {
                    return /^\d+$/.test(v) ? void 0 : "只能填写数字"
                },
                identity: function (v) {
                    return /(^\d{15}$)|(^\d{17}(x|X|\d)$)/.test(v) ? void 0 : "请输入正确的身份证号"
                },
                checked: function (v) {
                    return this.checked ? void 0 : v || ""
                },
                required: function (v, val) {
                    return "" !== v.replace(/\s/g, "") ? void 0 : (val || "此项不能为空")
                }
            }

        };
        global.util = {
            stop: function (t) {
                t = t || window.event, t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0
            }, randomSize: function (t, e, n) { // 小 大 小数位数
                return t = t || 0, e = e || 10, (t + Math.random() * (e - t)).toFixed(n || 0)
            }, drop: function (t, n) { // 父[$] 子
                var o = $(document), i = $(window), s = t, r = s.find(n), a = {};
                r.on("mousedown", function (t) {
                    t.preventDefault(), a.start = !0, a.offset = [t.clientX - parseFloat(s.css("left")), t.clientY - parseFloat(s.css("top"))]
                }), o.on("mousemove", function (t) {
                    if (a.start) {
                        var e = t.clientX - a.offset[0], n = t.clientY - a.offset[1], o = "fixed" === s.css("position");
                        t.preventDefault(), a.stX = o ? 0 : i.scrollLeft(), a.stY = o ? 0 : i.scrollTop();
                        var r = i.width() - s.outerWidth() + a.stX, c = i.height() - s.outerHeight() + a.stY;
                        e < a.stX && (e = a.stX), e > r && (e = r), n < a.stY && (n = a.stY), n > c && (n = c), s.css({
                            left: e,
                            top: n
                        })
                    }
                }).on("mouseup", function () {
                    a.start && (a.start = null)
                })
            }, date: {
                /* 格式化日期 */
                n2s: function (a) { return 10 > a ? "0" + (a | 0) : a                },
                format: function (a, b) {
                    var c;
                    typeof a === "number" && (a = new Date(a));
                    c = a.getFullYear();
                    var d = this.n2s(a.getMonth() + 1), f = this.n2s(a.getDate()), e = this.n2s(a.getHours()), k = this.n2s(a.getMinutes()), g = this.n2s(a.getSeconds());
                    switch (b) {
                        case "yyyy-MM-dd HH:mm:ss":
                            c = c + "-" + d + "-" + f + " " + e + ":" + k + ":" + g;
                            break;
                        case "yyyy-MM":
                            c = c + "-" + d;
                            break;
                        case "yyyy":
                            break;
                        default:
                            c = c + "-" + d + "-" + f
                    }
                    return c
                }, toDate: function (a) {// 转日期类型
                    var b, c, d, f, e, g;
                    if (19 == a.length)return b = a.substring(0, 4), c = a.substring(5, 7), d = a.substring(8, 10), f = a.substring(11, 13), e = a.substring(14, 16), g = a.substring(17, 19), new Date(b, c - 1, d, f, e, g);
                    if (10 == a.length)return b = a.substring(0, 4), c = a.substring(5, 7), d = a.substring(8, 10), new Date(b, c - 1, d);
                    if (7 == a.length)return b = a.substring(0, 4), c = a.substring(5, 7), new Date(b, c - 1);
                    if (4 == a.length)return b = a.substring(0, 4), new Date(b)
                }, countDown: function (a) {// 倒计时 yyyy-MM-dd HH:mm:ss
                    var b = (this.toDate(a) - this.toDate(this.now("yyyy-MM-dd HH:mm:ss"))) / 1E3, c, d;
                    0 < b ? (a = Math.floor(b / 86400), c = Math.floor(b / 3600) - 24 * a, d = Math.floor(b / 60) - 60 * c - 1440 * a, b = Math.floor(b % 60)) : a = c = d = b = 0;
                    return {dd: this.n2s(a), d: a, HH: this.n2s(c), H: c, mm: this.n2s(d), m: d, ss: this.n2s(b), s: b}
                }, now: function (a, b) {
                    typeof a === "string" && (b = a);
                    var c = Date, d;
                    a | 0 ? (d = parseInt(a), d = 864E5 > d ? +new Date + 864E5 * d : d) : d = +new Date;
                    c = new c(d);
                    return b ? this.format(c, b) : this.format(c)
                }, history: function (a, b) {
                    "string" === typeof a && (a = this.toDate(a));
                    var c = (new Date).getTime() - a;
                    return 2592E6 < c ? this.format(a, b) : 864E5 <= c ? (c / 1E3 / 60 / 60 / 24 | 0) + "\u5929\u524d" : 36E5 <= c ? (c / 1E3 / 60 / 60 | 0) + "\u5c0f\u65f6\u524d" : 3E5 <= c ? (c / 1E3 / 60 | 0) + "\u5206\u949f\u524d" : "\u521a\u521a"
                }
            }
        };
        /* nui.http */
        global.http = function (url, data, success, options) {
            global.log(url, "http-url");
            "function" === typeof data ? (options = success, success = data) : global.log(data, "http-data");
            options = options || {};
            data = data || {};
            var g = {}; // http拦截预留
            var f = g.http || {};
            return $.ajax({
                type: options.type || "post",
                dataType: options.dataType || "json",
                data: data,
                url: url,
                timeout: options.timeout || 1E4,
                success: function (a) {
                    f.success ? f.success(a, success) : (success && success(a), !options.dataType && global.log(a, "http-success"))
                },
                error: function (a) {
                    f.error ? f.error(a) : options.error?options.error(a):global.log("\u8bf7\u6c42\u5f02\u5e38\uff0c\u8bf7\u91cd\u8bd5", "http-error", "red")
                }
            })
        };
        global.cookie = function (name, value, options) {
            name = name || "";
            var d, f, e;
            if ("undefined" == typeof value) {
                if (value = null, document.cookie && "" != document.cookie)for (options = document.cookie.split(";"), f = 0; f < options.length; f++)if (d = $.trim(options[f]), d.substring(0, name.length + 1) == name + "=") {
                    value = decodeURIComponent(d.substring(name.length + 1));
                    break
                }
                return value
            }
            options = options || {};
            null === value && (value = "", options.expires = -1);
            d = "";
            options.expires && ("number" == typeof options.expires || options.expires.toUTCString) && ("number" == typeof options.expires ? (f = new Date, f.setTime(f.getTime() + 864E5 * options.expires)) : f = options.expires, d = "; expires=" + f.toUTCString());
            f = options.path ? "; path=" + options.path : "";
            e = options.domain ? "; domain=" + options.domain : "";
            options = options.secure ? "; secure" : "";
            document.cookie = [name, "=", encodeURIComponent(value), d, f, e, options].join("")
        };
        global.store = function (key, value) {
            return ( window.localStorage && typeof JSON ) ? function () {
                    if (typeof key === "string") {
                        if (typeof value === "undefined") {
                            value = window.localStorage.getItem(key);
                            return (JSON.parse(value) || value)
                        } else {
                            value = typeof value === "object" ? JSON.stringify(value) : value;
                            return window.localStorage.setItem(key, value)
                        }
                    } else {
                        return window.localStorage.clear()
                    }
                }() :  void 0;
        };
        /* nui.tpl */
        global.tpl = function (t, e, n) {
            var o = {open: "{{", close: "}}"}, i = {
                exp: function (t) {
                    return new RegExp(t, "g")
                }, query: function (t, e, n) {
                    return s((e || "") + o.open + ["#([\\s\\S])+?", "([^{#}])*?"][t || 0] + o.close + (n || ""))
                }, escape: function (t) {
                    return String(t || "").replace(/&(?!#?[a-zA-Z0-9]+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;")
                }, error: function (t, e) {
                    return "object" == typeof console && console.error("tpl Error：" + t + "\n" + (e || "")), "tpl Error：" + t
                }
            }, s = i.exp, r = function (t) {
                this.tpl = t
            };
            r.pt = r.prototype, window.errors = 0, r.pt.parse = function (t, e) {
                var n = t, r = s("^" + o.open + "#", ""), a = s(o.close + "$", "");
                t = t.replace(/\s+|\r|\t|\n/g, " ").replace(s(o.open + "#"), o.open + "# ").replace(s(o.close + "}"), "} " + o.close).replace(/\\/g, "\\\\").replace(/(?="|')/g, "\\").replace(i.query(), function (t) {
                    return t = t.replace(r, "").replace(a, ""), '";' + t.replace(/\\/g, "") + ';view+="'
                }).replace(i.query(1), function (t) {
                    var e = '"+(';
                    return t.replace(/\s/g, "") === o.open + o.close ? "" : (t = t.replace(s(o.open + "|" + o.close), ""), /^=/.test(t) && (t = t.replace(/^=/, ""), e = '"+_escape_('), e + t.replace(/\\/g, "") + ')+"')
                }), t = '"use strict";var view = "' + t + '";return view;';
                try {
                    return this.cache = t = new Function("d, _escape_", t), t(e, i.escape)
                } catch (c) {
                    return delete this.cache, i.error(c, n)
                }
            }, r.pt.render = function (t, e) {
                var n;
                return t ? (n = this.cache ? this.cache(t, i.escape) : this.parse(this.tpl, t), e ? void e(n) : n) : i.error("no data")
            };
            var a = function (t) {
                return "string" != typeof t ? i.error("Template not found") : new r(t)
            };
            return a.config = function (t) {
                t = t || {};
                for (var e in t)o[e] = t[e]
            }, n ? (a(t).render(e, n), this) : a(t).render(e)
        };
        /* nui.upload */
        global.upload = function (f, i) {
            if (typeof f !== "object") {
                return
            }
            f.elem && (f.trigger = f.elem);
            var j = 0;
            var b = function (l) {
                if (!(this instanceof b)) {
                    return new b(l)
                }
                if (a(l)) {
                    l = {trigger: l}
                }
                var m = {
                    trigger: null,
                    name: null,
                    action: null,
                    data: null,
                    accept: null,
                    change: null,
                    error: null,
                    multiple: false,
                    success: null
                };
                if (l) {
                    $.extend(m, l)
                }
                var k = $(m.trigger);
                m.action = m.action || k.data("action") || "/upload";
                m.name = m.name || k.attr("name") || k.data("name") || "file";
                m.data = m.data || c(k.data("data"));
                m.accept = m.accept || k.data("accept");
                m.success = m.success || k.data("success");
                this.settings = m;
                this.setup();
                this.bind()
            };
            b.prototype.setup = function () {
                this.form = $('<form method="post" enctype="multipart/form-data"target="" action="' + this.settings.action + '" />');
                this.iframe = e();
                this.form.attr("target", this.iframe.attr("name"));
                var m = this.settings.data;
                this.form.append(h(m));
                if (window.FormData) {
                    this.form.append(h({_uploader_: "formdata"}))
                } else {
                    this.form.append(h({_uploader_: "iframe"}))
                }
                var l = document.createElement("input");
                l.type = "file";
                l.name = this.settings.name;
                if (this.settings.accept) {
                    l.accept = this.settings.accept
                }
                if (this.settings.multiple) {
                    l.multiple = true;
                    l.setAttribute("multiple", "multiple")
                }
                this.input = $(l);
                var k = $(this.settings.trigger);
                this.input.attr("hidefocus", true).css({
                    position: "absolute",
                    top: 0,
                    right: 0,
                    opacity: 0,
                    outline: 0,
                    cursor: "pointer",
                    height: k.outerHeight(),
                    fontSize: Math.max(64, k.outerHeight() * 5)
                });
                this.form.append(this.input);
                this.form.css({
                    position: "absolute",
                    top: k.offset().top,
                    left: k.offset().left,
                    overflow: "hidden",
                    width: k.outerWidth(),
                    height: k.outerHeight(),
                    zIndex: g(k) + 10
                }).appendTo("body");
                return this
            };
            b.prototype.bind = function () {
                var l = this;
                var k = $(l.settings.trigger);
                k.mouseenter(function () {
                    l.form.css({
                        top: k.offset().top,
                        left: k.offset().left,
                        width: k.outerWidth(),
                        height: k.outerHeight()
                    })
                });
                l.bindInput()
            };
            b.prototype.bindInput = function () {
                var k = this;
                k.input.change(function (m) {
                    k._files = this.files || [{name: m.target.value}];
                    var l = k.input.val();
                    if (k.settings.change) {
                        k.settings.change.call(k, k._files)
                    } else {
                        if (l) {
                            return k.submit()
                        }
                    }
                })
            };
            b.prototype.submit = function () {
                var k = this;
                if (window.FormData && k._files) {
                    var m = new FormData(k.form.get(0));
                    m.append(k.settings.name, k._files);
                    var n;
                    if (k.settings.progress) {
                        var l = k._files;
                        n = function () {
                            var o = $.ajaxSettings.xhr();
                            if (o.upload) {
                                o.upload.addEventListener("progress", function (s) {
                                    var r = 0;
                                    var p = s.loaded || s.position;
                                    var q = s.total;
                                    if (s.lengthComputable) {
                                        r = Math.ceil(p / q * 100)
                                    }
                                    k.settings.progress(s, p, q, r, l)
                                }, false)
                            }
                            return o
                        }
                    }
                    $.ajax({
                        url: k.settings.action,
                        type: "post",
                        processData: false,
                        contentType: false,
                        data: m,
                        xhr: n,
                        context: this,
                        success: k.settings.success,
                        error: k.settings.error
                    });
                    return this
                } else {
                    k.iframe = e();
                    k.form.attr("target", k.iframe.attr("name"));
                    $("body").append(k.iframe);
                    k.iframe.one("load", function () {
                        $('<iframe src="javascript:false;"></iframe>').appendTo(k.form).remove();
                        var o;
                        try {
                            o = $(this).contents().find("body").html()
                        } catch (p) {
                            o = "cross-domain"
                        }
                        $(this).remove();
                        if (!o) {
                            if (k.settings.error) {
                                k.settings.error(k.input.val())
                            }
                        } else {
                            if (k.settings.success) {
                                k.settings.success(o)
                            }
                        }
                    });
                    k.form.submit()
                }
                return this
            };
            b.prototype.refreshInput = function () {
                var k = this.input.clone();
                this.input.before(k);
                this.input.off("change");
                this.input.remove();
                this.input = k;
                this.bindInput()
            };
            b.prototype.change = function (k) {
                if (!k) {
                    return this
                }
                this.settings.change = k;
                return this
            };
            b.prototype.success = function (l) {
                var k = this;
                this.settings.success = function (m) {
                    k.refreshInput();
                    if (l) {
                        l(m)
                    }
                };
                return this
            };
            b.prototype.error = function (l) {
                var k = this;
                this.settings.error = function (m) {
                    if (l) {
                        k.refreshInput();
                        l(m)
                    }
                };
                return this
            };
            b.prototype.enable = function () {
                this.input.prop("disabled", false);
                this.input.css("cursor", "pointer")
            };
            b.prototype.disable = function () {
                this.input.prop("disabled", true);
                this.input.css("cursor", "not-allowed")
            };
            function a(k) {
                return Object.prototype.toString.call(k) === "[object String]"
            }

            function h(n) {
                if (!n) {
                    return []
                }
                var k = [], m;
                for (var l in n) {
                    m = document.createElement("input");
                    m.type = "hidden";
                    m.name = l;
                    m.value = n[l];
                    k.push(m)
                }
                return k
            }

            function c(r) {
                if (!r) {
                    return {}
                }
                var k = {};
                var n = r.split("&");
                var o = function (t) {
                    return decodeURIComponent(t.replace(/\+/g, " "))
                };
                for (var m = 0; m < n.length; m++) {
                    var q = n[m].split("=");
                    var l = o(q[0]);
                    var p = o(q[1]);
                    k[l] = p
                }
                return k
            }

            function g(k) {
                var l = k.parentsUntil("body");
                var o = 0;
                for (var m = 0; m < l.length; m++) {
                    var n = l.eq(m);
                    if (n.css("position") !== "static") {
                        o = parseInt(n.css("zIndex"), 10) || o
                    }
                }
                return o
            }

            function e() {
                var l = "iframe-uploader-" + j;
                var k = $('<iframe name="' + l + '" />').hide();
                j += 1;
                return k
            }

            var d = function (l) {
                if (!(this instanceof d)) {
                    return new d(l)
                }
                if (a(l)) {
                    l = {trigger: l}
                }
                var k = $(l.trigger);
                var m = [];
                k.each(function (n, o) {
                    l.trigger = o;
                    m.push(new b(l))
                });
                this._uploaders = m
            };
            d.prototype.submit = function () {
                $.each(this._uploaders, function (k, l) {
                    l.submit()
                });
                return this
            };
            d.prototype.change = function (k) {
                $.each(this._uploaders, function (l, m) {
                    m.change(k)
                });
                return this
            };
            d.prototype.success = function (k) {
                $.each(this._uploaders, function (l, m) {
                    m.success(k)
                });
                return this
            };
            d.prototype.error = function (k) {
                $.each(this._uploaders, function (l, m) {
                    m.error(k)
                });
                return this
            };
            d.prototype.enable = function () {
                $.each(this._uploaders, function (k, l) {
                    l.enable()
                });
                return this
            };
            d.prototype.disable = function () {
                $.each(this._uploaders, function (k, l) {
                    l.disable()
                });
                return this
            };
            d.Uploader = b;
            return new d(f).success(i)
        };
        global.form = function (op, fn) {
            typeof op === "function" ? (fn = op, op = {}) : (op = op || {});
            var conf = {}, o = {
                check: global.get.check,
                times: 0,
                submit: function (t) {
                    var n = t.find("[name]"), d = {}, y = !0, pass = "";
                    return n.each(function () {
                        try {
                            var t = $(this), c = t.attr("data-check") || t.attr("check"), n = t.attr("name"), v = t.val(), r;
                            if (c) { //验证类型
                                switch ((op.check && typeof op.check[c]) || typeof o.check[c]) {
                                    case "function":
                                        switch (c) {
                                            case "pass":
                                                pass = t.val();
                                                r = o.check[c](v);
                                                break;
                                            case "repass":
                                                r = o.check[c](v, pass);
                                                break;
                                            case "checked":
                                                var tt = this.getAttribute("title");
                                                tt && (r = o.check.checked.call(this, tt));
                                                break;
                                            default:
                                                r = o.check[c](v);
                                                break
                                        }
                                        break;
                                    default:
                                        r = o.check.required(v, c);
                                        break
                                }
                                if (r)return y = !1, t.focus(), typeof op.message === "function" ? op.message.call(this, n, t) : global.alert(r), y; //提示
                            }
                            if (!o.check.required(v) && n) {
                                var tagName = this.tagName.toLowerCase(), type = this.type;
                                if (type === "radio") {
                                    this.checked && (d[n] = v);
                                } else if (type === "checkbox") {
                                    d[n] = d[n] || [], this.checked && d[n].push(v);
                                } else d[n] = v;
                            }
                        } catch (e) {
                            global.log(e, "error")
                        }
                    }), y && o.action.call(this, d), !1
                },
                action: function (d) {
                    var that = $(this), url = that.attr("action") || op.url;
                    url ? global.http(url, (d || {}), fn) : global.log("data-form,no url !", "error")
                }
            }, u = {
                checkbox: function (t) {//checkbox,switch,radio
                    var _this = this, x = t || "checkbox", c = $(_this).find("input[type=" + x + "]");
                    return c.each(function () {
                        var that = $(this), n = {
                            id: that.attr("id") || "",
                            css: 'nui-form-' + ( this.getAttribute("role") || x) + '-label',
                            checked: function (label) {
                                x !== "radio" ? this.checked ? label.addClass("checked") : label.removeClass("checked") : c.each(function () {
                                        var t = $(this), p = t.next("." + n.css);
                                        this.checked ? p.addClass("checked") : p.removeClass("checked");
                                    })
                            },
                            event: function (label, t, b) {
                                var i = this;
                                label.on("click", function () {
                                    b || (i.checked = !i.checked), t.trigger("change");
                                    //n.checked.call(i, label)
                                }), t.on("change", function () {
                                    n.checked.call(i, label);
                                })
                            }
                        };
                        that.css({"position": "absolute", "clip": "rect(0,0,0,0)"}),
                            that.after($('<label class=' + n.css + ' for="' + n.id + '"></label>')),
                            n.label = that.next('.' + n.css),
                            n.checked.call(this, n.label) , n.event.call(this, n.label, that, n.id);
                        that.attr("disabled") && that.next().addClass("is-disabled")
                    })
                }
                , select: function () {
                    var ev, select = $("select", this), _text = ".nui-form-select-text", _lists = ".nui-form-select-list", _select = "nui-form-select";
                    return ev = function (next, that) {
                        var s = $(_text, next);
                        s.on("click", function (e) {
                            var lists = $(_lists, next), selects = $(_lists, '.' + _select);
                            e.stopPropagation(), function (i) {
                                selects.hide().parent().removeClass(i), lists.show().parent().addClass(i);
                            }(_select + "ed"), function (i) {
                                $(document).one("click", function () {
                                    lists.hide().parent().removeClass(i)
                                })
                            }(_select + "ed")
                        }), next.find("a").on("click", function () {
                            var i = $(this), n = i.attr("data-value");
                            i.addClass("this").siblings().removeClass("this");
                            s.find("span").html(i.html()), that.val(n).trigger("change");
                        })
                    }, select.each(function () {
                        var that = $(this), val = that.val(), i = this.selectedIndex, n = $(this.options[i]), a = $(function () {
                            for (var e = '<div class="nui-form-select-list"><div class="nui-dropdown">', i = that.find("option"), n = 0; n < i.length; n++)e += '<a class="nui-dropdown-item" data-value="' + i.eq(n).val() + '">' + (i.eq(n).html() || i.eq(n).val()) + '</a>';
                            return e + "</div></div>"
                        }()), o = $('<div class="nui-form-select"><div class="nui-form-select-text nui-input"><span>' + (n.html() || val ) + '</span><i></i></div>' + a.prop("outerHTML") + "</div>");
                        o.find(_lists).find("a").eq(i).addClass("this"), that.hide(), that.after(o), ev(that.next(), that)
                    }), this
                }
            };
            return conf.form = op.form , conf.btn = op.btn, op.form && $(conf.form).each(function () {
                var that = $(this);
                // 渲染ui - ui不会重复渲染
                $("[data-form]", this)[0] || this.getAttribute("data-form") || (u.checkbox.call(this), u.checkbox.call(this, "radio"), u.select.call(this), this.setAttribute("data-form", !0));
                // 有回调事件绑定提交
                typeof fn === "function" && "form" === this.tagName.toLowerCase() ? function (t) {
                        conf.btn && $(conf.btn, that).on("click", function () {
                            return "a" === t.tagName.toLowerCase() && that.trigger("submit"), !1
                        });
                        that.off("submit").on("submit", function () { // 防止多次绑定
                            return o.submit.call(this, that), !1
                        })
                    }(this) : conf.btn && that.on("click", conf.btn, function () {
                        return o.submit.call(this, that), !1
                    })
            }), this;
        };
        /* nui.open */
        global.close = function (index) {
            var className = global.get.className.open, name;
            var remove = function (t) {
                if (!t.hasClass("is-remove")) {
                    t.addClass("is-remove");
                    setTimeout(function () {
                        t.remove();
                    }, 350)
                }
            };
            if (typeof index === "string") {
                name = className + "-" + index;
                remove($("." + name));
            } else if (typeof index === "number") {
                name = index ? className + index : className;
                var shade = index ? className + "-shade" + index : className + "-shade";
                remove($("#" + shade));
                remove($("#" + name));
            } else {
                remove($("." + className));
                remove($("." + className + "-shade"));
            }

        };
        global.open = function (op) {
            /* 配置 */
            var layer = {
                query: $,
                type: ['dialog', 'msg', 'iframe', 'toptip', 'dropdown'],
                doms: [],
                index: global.get.genId(),
                className: global.get.className.open,
                tpl: global.tpl
            }, win = layer.query(window);
            /* 配置文件 */
            layer.config = {
                type: op.type | 0,                                // 类型
                content: op.content || "",                        // 内容
                shade: op.shadow,                             // 0.1
                skin: op.skin || "",                           // 皮肤
                fixed: !!op.fixed,                          // 定位1 ["计算坐标预留"]
                title: op.title,                           // 标题
                move: op.move,                           // 可拖动
                offset: op.offset || 'auto',               // 定位2
                area: op.width || op.area || 'auto',        // 宽度 ["宽高"]
                time: op.time,                         // 0表示不自动关闭
                zIndex: 20170513,                     // z轴
                full: op.full,
                close: op.close,
                success: typeof op.success === "function" ? op.success : false, //弹出
                cancel: typeof op.cancel === "function" ? op.cancel : false //关闭
            };
            layer.setConfig = function (callback) {
                /* 防错 */
                if (this.query('#' + layer.className + layer.index)[0])  return;
                /* 生成节点 */
                var _this = this, i = 0, config = layer.config, domsList = ["shade", "title", "close", "content", "hd", "bd","btnfull"];
                for (i in domsList) {
                    layer.doms[domsList[i]] = layer.className + '-' + domsList[i] || '';
                }
                /* 不存在的type */
                if (config.type > 4)return;
                /* 规范格式 */
                if (typeof config.area === 'string') {
                    config.area = config.area === 'auto' ? ['', ''] : [config.area, ''];
                }
                if (typeof content)
                    var content = config.content, conType = typeof config.content === 'object';
                if (conType) return; //目前不支持object类型的conType;
                var is = function (a, b) {
                    return typeof a === "undefined" ? b : a
                };
                switch (config.type) {
                    case 0: //dialog
                        config.title = is(config.title, "信息");
                        config.move = is(config.move, true);
                        config.shade = is(config.shade, 0.3);
                        break;
                    case 1: // msg
                        _this.close('msg');
                        config.time = is(config.time, 2);
                        break;
                    case 2: // iframe
                        global.close();
                        config.title = is(config.title, "窗体");
                        config.move = is(config.move, true);
                        config.shade = is(config.shade, 0.3);
                        config.content = conType ? config.content : [config.content, 'auto'];
                        config.content = '<iframe scrolling="' + (config.content[1] || 'auto') + '" allowtransparency="true" onload="this.className=\'\';" class="" frameborder="0" src="' + config.content[0] + '"></iframe>';
                        break;
                    case 3: //toptip
                        _this.close('toptips');
                        config.title = false;
                        config.time = is(config.time, 10);
                        config.offset = "t";
                        break;
                    case 4: //dropdown
                        if (!op.elem)return; // elem选择器
                        _this.close('dropdown');
                        break;
                }
                config.close = is(config.close, true);
                config.time = config.time | 0;
                callback && callback.call(this);
            };
            /* 创建容器 */
            layer.createElement = function () {
                var data = layer;
                var titleHTML = data.config.title ? layer.tpl('<div class="{{d.doms.title}}">{{ d.config.title}}</div>', data) : '';
                var hdHTml = '<div class="' + data.doms.hd + (data.config.move ? " is-move" : "") + '" >' + titleHTML + (data.config.full ? "<i class='"+data.doms.btnfull+"'>"+"</i>" : "") + (data.config.close ? "<i class='"+ data.doms.close+"'>"+"</i>" : "") + '</div>';
                var bdHTml = '<div  class="' + data.doms.bd + '">' + data.config.content + '</div>';
                data.html = hdHTml + bdHTml;
                data.shade = data.className + "-shade" + data.index;
                var bodyHtml = layer.tpl('{{# if(d.config.shade){var color="#000",opacity=d.config.shade+";filter:alpha(opacity="+d.config.shade*100+")";}}<div class="{{d.doms.shade}}" id="{{d.shade}}" style="z-index:{{d.config.zIndex-1}}; background-color:{{color}};opacity:{{opacity}};"></div>{{# } }}{{# var type=d.type[d.config.type],classType=d.className+"-"+type,classBorder=(d.config.type==0||d.config.type==2)&&!d.config.shade?d.doms.border:"",classSkin=d.config.skin,classStyle="z-index:"+d.config.zIndex+";width:"+d.config.area[0]+";height:"+d.config.area[1]+(d.config.fixed?"":";position:absolute;");}}<div class="{{d.className}} {{classType}} {{classSkin}}" id="{{d.className+d.index}}" style="{{classStyle}}">{{d.html}}</div>', data);
                data = null;
                return bodyHtml;
            };
            /* 自动计算宽高 */
            layer.auto = function (index) {   //预留index用来更新
                var _this = this, config = _this.config, that = _this.that = _this.query('#' + layer.className + index);
                var area = [that.innerWidth(), that.innerHeight()];

                var titHeight = that.find("." + layer.doms.hd, that).outerHeight() || 0;
                var btnHeight = that.find("." + layer.doms.fd).outerHeight() || 0;

                function setHeight(elem) {
                    elem = that.find(elem);
                    elem.height(area[1] - titHeight - btnHeight - 2 * (parseFloat(elem.css('padding')) | 0));
                }

                switch (config.type) {
                    case 2:
                        setHeight('iframe');
                        break;
                    default:
                        if (config.area[1] === '') {
                            if (config.fixed && area[1] >= win.height()) {
                                area[1] = win.height();
                                setHeight('.' + layer.doms.bd);
                            }
                        } else {
                            setHeight('.' + layer.doms.bd);
                        }
                        break;
                }
                return _this;
            };
            /* 自动定位 */
            layer.offset = function () {
                var _this = this, config = _this.config, that = _this.that;
                var area = [that.outerWidth(), that.outerHeight()];
                var type = typeof config.offset === 'object';
                _this.offsetTop = (win.height() - area[1]) / 2;
                _this.offsetLeft = (win.width() - area[0]) / 2;
                if (type) {
                    _this.offsetTop = config.offset[0];
                    _this.offsetLeft = config.offset[1] || _this.offsetLeft;
                } else if (config.offset !== 'auto') {

                    if (config.offset === 't') { //上
                        _this.offsetTop = 0;
                    } else if (config.offset === 'r') { //右
                        _this.offsetLeft = win.width() - area[0];
                    } else if (config.offset === 'b') { //下
                        _this.offsetTop = win.height() - area[1];
                    } else if (config.offset === 'l') { //左
                        _this.offsetLeft = 0;
                    } else if (config.offset === 'lt') { //左上角
                        _this.offsetTop = 0;
                        _this.offsetLeft = 0;
                    } else if (config.offset === 'lb') { //左下角
                        _this.offsetTop = win.height() - area[1];
                        _this.offsetLeft = 0;
                    } else if (config.offset === 'rt') { //右上角
                        _this.offsetTop = 0;
                        _this.offsetLeft = win.width() - area[0];
                    } else if (config.offset === 'rb') { //右下角
                        _this.offsetTop = win.height() - area[1];
                        _this.offsetLeft = win.width() - area[0];
                    } else {
                        _this.offsetTop = config.offset;
                    }

                }
                if (!config.fixed) {
                    _this.offsetTop = /%$/.test(_this.offsetTop) ?
                        win.height() * parseFloat(_this.offsetTop) / 100
                        : parseFloat(_this.offsetTop);
                    _this.offsetLeft = /%$/.test(_this.offsetLeft) ?
                        win.width() * parseFloat(_this.offsetLeft) / 100
                        : parseFloat(_this.offsetLeft);
                    _this.offsetTop += win.scrollTop();
                    _this.offsetLeft += win.scrollLeft();
                }

                that.css({top: _this.offsetTop, left: _this.offsetLeft});
                if (config.type === 4) {  //dropdown
                    var el = this.query(op.elem);
                    config.area[0]||that.css({width: el.outerWidth()});
                    var _left =el.offset().left;
                    var _w = window.innerWidth;
                    that.css({top: el.offset().top + el.outerHeight() + 4, left: ( _left < _w/2 ?el.offset().left:el.offset().left + (el.outerWidth() - area[0]) ) });
                }
                return _this
            };
            /* 可拖动 */
            layer.move = function () {
                var move = global.util.drop;
                return this.config.move && this.config.title && move(this.that, "." + this.doms.title), this
            };
            layer.append = function (callback) { // 渲染
                this.query(document.body).append(layer.createElement());
                callback && callback.call(this);
            };

            layer.callback = function () {
                var that = this.that, config = this.config, doms = this.doms, index = this.index,body=this.query("body");
                // 加载完毕
                if (config.success) {
                    if (config.type == 2) {
                        that.find('iframe').on('load', function () {
                            config.success.call(that.find('iframe').contents()[0], that, index);
                        });
                    } else {
                        config.success.call(that[0], that, index);
                    }
                }
                //关闭窗口回调
                var cancel = function () {
                    return config.cancel ? config.cancel(index, that) : global.close(index)
                };
                that.find('.' + doms.close).on('click', cancel);
                that.find('.' + doms.btnfull).on('click', function () {
                    var className = 'nui-open-full';
                    if(that.hasClass(className)){
                        that.removeClass(className);
                        body.css({"overflow":"visible"});
                        layer.auto(index)

                    } else {
                        that.addClass(className);
                        body.css({"overflow":"hidden"});
                        layer.auto(index)
                    }
                });
                return this

            };
            layer.close = function (type) {  // 定时关闭
                var index = this.index;
                if (type) {
                    global.close(type)
                } else {
                    if (layer.config.time > 0) {
                        setTimeout(function () {
                            global.close(index);
                        }, layer.config.time * 1000)
                    }
                }
                return this
            };
            layer.init = function () {
                var index = this.index;
                this.setConfig(function () {   // 配置阶段
                    this.append(function () { // 节点生成
                        this.auto(index).offset().move().callback().close();
                        //layer = null;
                    })
                });
                return index
            };
            return layer.init();
        };
        global.alert = function (text, time) {
            nui.open({
                content: text,
                type: 1,
                fixed: !0,
                time: time || 2
            })
        };
        /* nui.page */
        global.page = function (options, fn) {
            var S = $, g = function () {
            };
            g.prototype.success = function (callback,a) {
                return this.render(), callback && callback(this.conf,a), this
            };
            g.prototype.view = function () {
                var b = this.conf, a = [], c = {};
                b.pages = b.pages || 1;
                b.curr = (b.curr | 0) || 1;
                b.groups = "groups" in b ? (b.groups | 0) : 5;
                b.first = "first" in b ? b.first : "首页";
                b.last = "last" in b ? b.last : "尾页";
                b.prev = "prev" in b ? b.prev : "上一页";
                b.next = "next" in b ? b.next : "下一页";
                if (b.groups > b.pages) {
                    b.groups = b.pages
                }
                c.index = Math.ceil((b.curr + ((b.groups > 1 && b.groups !== b.pages) ? 1 : 0)) / (b.groups === 0 ? 1 : b.groups));
                if (b.curr > 1 && b.prev) { //上一页
                    a.push('<a href="javascript:;" class="nui-page_prev" data-page="' + (b.curr - 1) + '">' + b.prev + "</a>")
                }else {
                    a.push('<cite>'+ b.prev +'</cite>')
                }
                if (c.index > 1 && b.first && b.groups !== 0) {
                    a.push('<a href="javascript:;" class="nui-page_first" data-page="1"">' + b.first + "</a><span>…</span>")
                }
                c.poor = Math.floor((b.groups - 1) / 2);
                c.start = c.index > 1 ? b.curr - c.poor : 1;
                c.end = c.index > 1 ? (function () {
                        var d = b.curr + (b.groups - c.poor - 1);
                        return d > b.pages ? b.pages : d
                    }()) : b.groups;
                if (c.end - c.start < b.groups - 1) {
                    c.start = c.end - b.groups + 1
                }
                for (; c.start <= c.end; c.start++) {
                    if (c.start === b.curr) {
                        a.push('<span class="this" ' + (/^#/.test(b.skin) ? 'style="background-color:' + b.skin +';border-color:'+b.skin +'"' : "") + ">" + c.start + "</span>")
                    } else {
                        a.push('<a href="javascript:;" data-page="' + c.start + '">' + c.start + "</a>")
                    }
                }
                if (b.pages > b.groups && c.end < b.pages && b.last && b.groups !== 0) {
                    a.push('<span>…</span><a href="javascript:;" class="nui-page_last"  data-page="' + b.pages + '">' + b.last + "</a>")
                }
                c.flow = !b.prev && b.groups === 0;
                if (b.curr !== b.pages && b.next || c.flow) {//下一页
                    a.push((function () {
                        return (c.flow && b.curr === b.pages) ? '<span class="nui-page_next">' + b.next + "</span>" : '<a href="javascript:;" class="nui-page_next" data-page="' + (b.curr + 1) + '">' + b.next + "</a>"
                    }()))
                }else {
                    a.push('<cite>'+ b.next +'</cite>')
                }
                return '<div class="nui-pages">' + a.join("") + "</div>"
            };
            g.prototype.render = function (callback) {
                this.that.html(this.view(this.conf));
                callback && callback.call(this)
            };
            g.prototype.event = function () {
                var that = this;
                that.that.on("click", '[data-page]', function () {
                    that.conf.curr = parseInt(this.getAttribute('data-page')) || 1;
                    that.success(fn);
                    that.that.trigger("nui(page)",that.conf);
                });
                return that
            };
            g.prototype.init = function (options) {
                var conf = this.conf = options || {};
                this.that = S(conf.elem);
                delete conf.elem;
                this.render(function () {
                    this.event();
                });
                return this
            };
            return new g().init(options).success(fn,true)
        };
        /* nui.date */
        global.date = function () {
            var g = {
                query: $,
                date : global.util.date,
                isYear: function (a) {
                    return (a % 4 === 0 && a % 100 !== 0) || a % 400 === 0;
                },
                months : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                className: {
                    table: 'nui-dropdown-date',
                    curr: '_curr',
                    toDay: '_today',
                    next: '_next',
                    prev: '_prev',
                    _void: '_void',
                    tools: 'nui-dropdown-date__tools'
                }
            };
            g.table = function () {
                var tr, view = [], weeks = ['日', '一', '二', '三', '四', '五', '六'];
                var a = {},
                    table = document.createElement('table'), thead = document.createElement('thead');
                thead.appendChild(document.createElement('tr'));
                a.creath = function (i) {
                    var th = document.createElement('th');
                    th.innerHTML = weeks[i];
                    thead.getElementsByTagName('tr')[0].appendChild(th);
                    th = null;

                };
                for (var i =0,ii=6;i<ii;i++) {
                    view.push([]);
                    tr = table.insertRow(0);
                    for (var j=0,jj=7;j<jj;j++) {
                        view[i][j] = 0;
                        i === 0 && a.creath(j);
                        tr.insertCell(j);
                    }
                }
                table.insertBefore(thead, table.children[0]);
                table.className = g.className.table;
                tr = view = null;
                return table.outerHTML.toLowerCase();
            }();
            //检测是否在有效期
            g.checkVoid = function(YY, MM, DD,options){
                var back = [];
                YY = YY|0;
                MM = MM|0;
                DD = DD|0;
                if(YY < options.min[0]){
                    back = ['y'];
                } else if(YY > options.max[0]){
                    back = ['y', 1];
                } else if(YY >= options.min[0] && YY <= options.max[0]){
                    if(YY == options.min[0]){
                        if(MM < options.min[1]){
                            back = ['m'];
                        } else if(MM == options.min[1]){
                            if(DD < options.min[2]){
                                back = ['d'];
                            }
                        }
                    }
                    if(YY == options.max[0]){
                        if(MM > options.max[1]){
                            back = ['m', 1];
                        } else if(MM == options.max[1]){
                            if(DD > options.max[2]){
                                back = ['d', 1];
                            }
                        }
                    }
                }
                return back;
            };

            //生成日期
            g.viewDate = function (Y, M, D,options) {
                var o = {}, now = new Date();
                o.today = now.getDate();
                now.setFullYear(Y, M, D);
                o.ymd = [now.getFullYear(), now.getMonth(),  o.today];
                g.months[1] = g.isYear(o.ymd[0]) ? 29 : 28;
                now.setFullYear(o.ymd[0], o.ymd[1], 1);
                o.FDay = now.getDay();
                o.PDay = g.months[M === 0 ? 11 : M - 1] - o.FDay + 1;
                o.NDay = 1;
              //  console.log('-------',o);
                //渲染日
                var n = function (a, b) {
                    this.innerHTML =a;
                    b && ( this.className = b)
                };
                g.query("td",this).each(function (i) {
                    var YY = o.ymd[0], MM = o.ymd[1] + 1, DD;

                    if (i < o.FDay) {//上一月
                        DD = i + o.PDay;
                        n.call(this, DD, g.className.prev);

                        MM === 1 && (YY -= 1);
                        MM = MM === 1 ? 12 : MM - 1;
                    } else if (i >= o.FDay && i < o.FDay + g.months[o.ymd[1]]) {//这个月
                        DD = i - o.FDay + 1;
                        n.call(this, DD);
                        if (i - o.FDay + 1 === o.ymd[2]) {
                            o.thisDay = this;
                        }
                    } else {//其他
                        DD = o.NDay++;
                        n.call(this, DD, g.className.next);

                        MM === 12 && (YY += 1);
                        MM = MM === 12 ? 1 : MM + 1;
                    }
                    // today
                    (o.today === DD) &&( this.className += (' '+g.className.toDay));
                    // 限制
                    if(options&&g.checkVoid(YY, MM, DD,options)[0]) this.className += (' '+g.className._void);
                    this.setAttribute('y', YY);
                    this.setAttribute('m', MM);
                    this.setAttribute('d', DD);
                })
            };
            return function (conf,callback) {
                var input = g.query(conf.elem);
                var ev ="input" === input[0].tagName.toLowerCase()?"focus":"click";
                input.on(ev,function () {
                    var ymd=(conf.min||g.date.now()).split('-');
                    nui.open({
                        content: g.table,
                        title:  "<span><i></i><cite>"+ymd[0]+"</cite><em></em></span>"+"<span><i></i><cite>"+ymd[1]+"</cite><em></em></span>",
                        type: 4,
                        time: 0,
                        width: '240px',
                        elem: input,
                        success: function (_, index) {
                            var _this = this;
                            var hd =  g.query(('.'+global.get.className.open+'-hd'),_this);
                            hd.addClass(g.className.tools);
                            var bd =  g.query(('.'+global.get.className.open+'-bd'),_this);
                            var MaxMin = {
                                min:conf.min.split('-'),
                                max:conf.max.split('-')
                            };
                            var setDate = function (y,m,d) {
                                bd.html(g.table);
                                g.viewDate.call(_this, y, --m, d,conf.max?MaxMin:void 0)
                            };
                            g.query('span', hd).each(function () {
                                var e = g.query(this), i = g.query('i', this), cite = g.query('cite', this),
                                    em = g.query('em', this),type =e.index(), time = parseInt(cite.html());
                                var c = function (num) {
                                    time += num;
                                    if(type){
                                        time>12&&(time = 12);
                                        time<1&&(time = 1);
                                        ymd[1] =time
                                    }else {
                                        if(conf.max){
                                            var min = parseInt(MaxMin.min[0]);
                                            time < min&&(time = min);
                                        }
                                        ymd[0] =time
                                    }
                                    cite.html(g.date.n2s(time));
                                    setDate.apply(null,ymd);
                                };
                                e.on("click", 'i', function () {c(-1)}).on("click", 'em', function () {c(+1)})
                            });
                            setDate.apply(null,ymd);
                            g.query(this).on("click","td",function () {
                                if ((this.className.indexOf(g.className.next) !== -1 ) || (this.className.indexOf(g.className.prev) !== -1 )|| (this.className.indexOf(g.className._void) !== -1 )) {

                                } else {
                                    //format
                                    var curr = g.date.format(new Date(this.getAttribute('y'),parseInt(this.getAttribute('m'))-1,this.getAttribute('d')),conf.format);
                                    input.val(curr);
                                    callback&&callback({min:conf.min,max:conf.max,format:conf.format,curr:curr});
                                    global.close(index);
                                }

                            })
                        }
                    });
                });
            };
        }();
        /* nui.tab */
        global.tab = function () {
            var l = $, hash = "#tab_", id = location.hash.split(hash)[1], show = document.getElementById(id);
            if (show) { // 反向推理
                var name = show.className.split(" ");
                l("[data-tab]").each(function () {
                    var that = l(this), b = that.attr("data-tab");
                    for (var i in name) {
                        if (name[i].indexOf(b)) {
                            b = b.split('|');
                            if (b[3]) {
                                l(b[3], l(b[2])).each(function (index) {
                                    if (this.id === id) {
                                        l(b[0], that).eq(index).addClass(b[1]).siblings().removeClass(b[1]);
                                        l(this).show().siblings(b[3]).hide();
                                    }
                                })
                            }
                            break;
                        }
                    }
                });
            }
            return function () {
                var a = l(this), b = a.attr("data-tab").split('|');
                typeof b === typeof [] || (b = ["a", "this"]);// , global.log(true, "data-tab");
                l(b[0], a).on("click", function () {
                    var c = l(this), i = c.index(), s = b[3];
                    c.addClass(b[1]).siblings().removeClass(b[1]);
                    s && l(s, b[2]).eq(i).show().each(function () {
                        if (this.id) location.hash = hash + this.id
                    }).siblings(s).hide();
                    a.trigger("nui(tab)", {el: c, tab: l(s, b[2]), index: i})
                });
            }
        }();
        /* loaded */
        $("[data-tab]").each(function () {
            global.tab.call(this)
        });//渲染tab
        global.form({form: ".nui-form"}); //渲染UI
        return global;
    };
    "function" === typeof define ? define(function (require) {
            var $ = require("jquery");
            return global.init($);
        }) : window.nui = global.init($);
}());