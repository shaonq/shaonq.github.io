define(function (require) {
    var $ = require("jquery");
    /*
    *     ,{"songid":"003","url":"wei_wei_yi_xiao_hen_qing_cheng","image":"http://img5.5sing.kgimg.com/force/T1o.CnB_KT1RXrhCrK_188_188.jpg","name":"微微一笑很倾城","user":"季天&Anmi"}
     ,{"songid":"004","url":"ru_xi_tai_shen","image":"http://img4.5sing.kgimg.com/force/T1HrETBXET1RXrhCrK_188_188.jpg","name":"入戏太深","user":"2080倩儿"}
    * */
   var htmlCodes = '  \
     .nk-musics { background-color: rgba(102, 102, 102, 0.05);position: fixed; left: 0; bottom: 0; width: 300px; padding: 8px; z-index: 4; -webkit-animation: fadeInTop .8s; animation: fadeInTop .8s; box-shadow: rgba(0, 0, 0, 0.1) 0 1px 2px; }\
     .nk-musics .nk-music-lists { height: 72px; overflow: auto; }\
    .nk-musics .nk-music-lists li { position: relative; line-height: 30px; padding: 3px 8px 3px 40px; font-size: 0; cursor: pointer; }\
    .nk-musics .nk-music-lists li:hover { background-color: #f5f5f5 }\
    .nk-musics .nk-music-lists li * { position: relative; display: inline-block; vertical-align: top; font-size: 14px; z-index: 10; }\
    .nk-musics .nk-music-lists li img { position: absolute; left: 0; border-radius: 50%; width: 30px; height: 30px; }\
    .nk-musics .nk-music-lists li.error { background-color: red }\
    .nk-musics .nk-music-lists li.this { color: red; }\
    .nk-musics .nk-music-lists li:hover { background-color: rgba(255, 255, 255, 0.61); }\
    .progress { position: relative; width: 100%; height: 40px }\
    .progress__bar { position: absolute; top: 0; left: 55px; right: 47px; height: 40px; overflow: hidden }\
    .progress__box { position: absolute; top: 0; left: 8px; right: 8px; z-index: 2; height: 40px }\
    .progress__bg, .progress__load, .progress__play { position: absolute; top: 19px; width: 100%; height: 2px; -webkit-transition: width 1s linear; transition: width 1s linear }\
    .progress__bg { width: 0; z-index: 3; background-color: rgba(0, 0, 0, .1) }\
    .progress__load { width: 0; z-index: 4; background-color: rgba(255, 255, 255, .2) }\
    .progress__play { width: 0; z-index: 5; background-color: #31c27c }\
    .progress__start, .progress__end { position: absolute; top: 0; z-index: 1; width: 55px; line-height: 40px; text-align: center }\
    .progress__start { left: 0 }\
    .progress__end { right: 0 }\
    .lyric__text { height: 42px; line-height: 42px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;  color: rgba(0,0,0,.6); text-align: center; }\
    .lyric{ position: relative; padding: 0 0 5px 50px;font-size: 13px }\
    .lyric__play{ position: absolute; left: 0; display: block; width: 43px; height: 43px; border: solid 1px #fff; border-radius: 999px; background: rgba(0,0,0,.1); opacity: .6; }';
    $("head").append("<style>" + htmlCodes + "</style>");


//播放列表
    var global = {};
    global.css = {
        parent: "nk-musics",
        ul: "nk-music-lists",//列表容器
        next: "nk-music-next",
        play: "lyric__play"
    };
    var gedan = {
        path: function () {
            return location.hostname === "localhost" ? function () {
                return (global.debug = !0), "/shaonq.github.io/js/json/"
            }() : function () {
                return (global.debug = !1), "//shaonq.github.io/js/json/"
            }()
        }(),
        url: function (l) {
            return this.path + (l || "mp3") + ".json"
        },
        render: function (d) {
            if (d.data) {
                for (var i = 0, j; i < d.data.length; i++) {
                    j = d.data[i], global.ul.append('<li data-music-name=\"' + j.url + '\" title=\"' + j.user + '\">' + '<img src=' + j.image + ' onerror="this.src=\'//imgcache.qq.com/mediastyle/y/img/cover_mine_300.jpg\';this.onerror=null;"><h5>' + (j.name || "\u6362\u4E00\u9996\u5427 (=・ω・=)") + '</h5></li>')
                }
                global.parent.append('    <div class="progress">\
                    <div class="progress__bar">\
                    <div class="progress__box">\
                    <div class="progress__bg"></div>\
                    <div class="progress__load" style="width:0"></div>\
                    <div class="progress__play" style="width:0"></div>\
                    </div>\
                    </div>\
                    <span class="progress__start">00:00</span>\
                <span class="progress__end ">00:00</span>\
                </div>\
                <div class="lyric">\
                    <i class="lyric__play"></i>\
                    <p class="lyric__text overflow"></p>\
                    </div>');
            }
            return global.parent
        },
        init: function (d) {
            gequ.audio = new Audio(),
                gequ.bind.call(gequ.audio),
                gedan.render(d).each(function () {
                    global.tools.call(this);
                    global.ul.find("li").each(function (i) {
                        gequ.click.call(this, i)
                    })
                })
        }
    };
    var gequ = {
        path: function () {
            return "http://oe9kimiz1.bkt.clouddn.com/"
        }(),
        src: function () {
            gequ.name = this.getAttribute("data-music-name");
            return gequ.path + gequ.name + ".mp3";
        },
        click: function (i) {
            $(this).on("click", function () {
                gequ.play.call(this, i)
            })

        },
        play: function (i) {
            return (gequ.index = i|0) , gequ.audio.src = gequ.src.call(this), gequ.audio.play(), gequ.audio
        },
        li: function (i) {
            return global.ul.find("li").eq(i)
        },
        removeClass: function () {
            return global.ul.find("li").removeClass("this"), this
        },
        time: function (t) {
            var mm = parseInt(t / 60), ss = parseInt(t % 60);
            return (ss < 10 && (ss = "0" + ss)), mm + ":" + ss
        },

        nextPlay: function () {
            (gequ.index < (global.ul.find("li").length - 1)) ? (gequ.index++) : (gequ.index = 0);
            gequ.li(gequ.index).each(function () {
                gequ.play.call(this, gequ.index)
            })
        },
        bind: function () {
            var _this = this, that = $(_this);
            that.on("error", function () {
                var error = ["ERROR", "\u7528\u6237\u7EC8\u6B62", "\u7F51\u7EDC\u9519\u8BEF", "\u89E3\u7801\u9519\u8BEF", "URL\u65E0\u6548"];
                console.log("%c Error %c", "background:red; color:#fff", "", error[this.error.code]);
                gequ.li(gequ.index).addClass("error");
                gequ.nextPlay();
                return !1
            }).on("canplay", function () {
                lyric.get(gedan.path+gequ.name+".lrc")

            }).on("play", function () {
                gequ.removeClass().li(gequ.index).addClass("this")
            }).on("pause", function () {
                global.parent.find("li").removeClass("this")
            }).on("loadedmetadata", function () {
                //  console.log("成功获取资源长度", gequ.time(this.duration));
                global.parent.find(".progress__end").html(gequ.time(this.duration));
            }).on("timeupdate", function () {
                var span = global.parent.find(".progress__play");
                global.parent.find(".progress__start").html(gequ.time(this.currentTime));
                span.width((this.currentTime / this.duration * 100) + "%")
            }).on("ended", gequ.nextPlay).on("progress", function () {//缓冲
                if (this.buffered.length === 1) {//返回已缓冲区域
                    if (this.buffered.start(0) == 0) {//start(index)/第index段区域的开始位置
                        var buffered = this.buffered.end(0);
                        var percentage = buffered / this.duration * 100;
                        var bar = global.parent.find(".progress__load");
                        // console.log("缓冲",percentage);
                        bar.width(percentage + "%")
                    }
                }
            });

        }
    };
    global.tools = function () {
        global.parent.find("."+global.css.play).on("click", function () {
            try {
                gequ.audio.paused ? gequ.audio.play() : gequ.audio.pause()
            } catch (e) {
                gequ.play()
            }
        })
    };
    global.init = function (l) {
        this.parent = $("." + global.css.parent);
        if (!this.parent.length) {
            this.parent = $('<div class=' + global.css.parent + '><i></i><ul class=' + global.css.ul + '></ul></div>'), this.parent.appendTo(document.body), this.ul = this.parent.find("." + global.css.ul);
        }
        if ("function" !== typeof window.Audio) {
            this.parent.append("<li>\u6D4F\u89C8\u5668\u4E0D\u652F\u6301</li>");
            return;
        }
        $.getJSON(gedan.url(l), gedan.init);
    };
    var lyric = {
        get: function (url) {
            $.ajax({
                type: "get",
                url: url,
                dataType: "text",
                success: function(e){
                    lyric.append(lyric.parse(e))
                },
                error:function () {
                    lyric.append(!1)
                }
            })
        },
        parse: function (text) {
            //get each line from the text
            var lines = text.split('\n'),
                //this regex mathes the time [00.12.78]
                pattern = /\[\d{2}:\d{2}.\d{2}\]/g,
                result = [];

            //exclude the description parts or empty parts of the lyric
            while (!pattern.test(lines[0])) {
                lines = lines.slice(1);
            }
            //remove the last empty item
            lines[lines.length - 1].length === 0 && lines.pop();
            //display all content on the page
            lines.forEach(function (v, i, a) {
                var time = v.match(pattern),
                    value = v.replace(pattern, '');
                time.forEach(function (v1, i1, a1) {
                    //convert the [min:sec] to secs format then store into result
                    var t = v1.slice(1, -1).split(':');
                    result.push([parseInt(t[0], 10) * 60 + parseFloat(t[1]) , value]);
                });
            });
            //sort the result by time
            result.sort(function (a, b) {
                return a[0] - b[0];
            });
            return result;
        },
        append: function (lyric) {
            lyric ? function () {
                $(gequ.audio).on("timeupdate", function () {
                    var t = parseFloat(this.currentTime);
                    for (var i = 0, j = lyric.length; i < j; i++) {
                        if (t > lyric[i][0]) {
                            var ii = i + 1, ti = ii > j ? 0 : lyric[ii][0] - lyric[i][0];
                            var html = $("<p>" + lyric[i][1] + "</p>");
                            html.attr({style: "-webkit-animation-duration:" + ti + ";animation-duration:" + ti});
                            global.parent.find(".lyric__text").html(html);
                        }
                    }
                })
            }() : global.parent.find(".lyric__text").html("歌词还在制作中...")
        }
    };


    return global


});
