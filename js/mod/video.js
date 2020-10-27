define(function(a) {
    return function () {
        var container =$(this);
        var ui ='        <!-- jp-gui { S -->\
            <div class="jp-gui ">\
                <!--  第一次显示，播放之后不显示 -->\
            <div class="jp-video-play">\
                <button class="jp-video-play-icon" role="button" tabindex="0" >play</button>\
                </div>\
                <!-- 标题 -->\
                <div class="jp-details">\
                <div class="jp-title" aria-label="title"></div>\
                </div>\
                <div class="jp-interface">\
                <div class="jp-controls-holder">\
                <!--播放/暂停-->\
                <a href="javascript:;" class="jp-play" title="播放" tabindex="1">play</a>\
                <a href="javascript:;" class="jp-pause" title="暂停" tabindex="1">pause</a>\
                <span class="separator sep-1"></span>\
                <!-- 播放进度条 -->\
                <div class="jp-progress">\
                <div class="jp-seek-bar">\
                <div class="jp-play-bar"><span></span></div>\
                </div>\
                </div>\
                <!-- 时间通知 -->\
                <div class="jp-current-time"></div>\
                <span class="time-sep">/</span>\
                <div class="jp-duration"></div>\
                <span class="separator sep-2"></span>\
                <!-- 静音/取消静音 -->\
                <a href="javascript:;" class="jp-mute" tabindex="1" title="静音">mute</a>\
                <a href="javascript:;" class="jp-unmute" tabindex="1" title="取消静音">unmute</a>\
                <!-- 音量条 -->\
                <div class="jp-volume-bar">\
                <div class="jp-volume-bar-value"><span class="handle"></span></div>\
                </div>\
                <span class="separator sep-2"></span>\
                <!--full screen toggle-->\
            <a href="javascript:;" class="jp-full-screen" tabindex="1" title="全屏播放">full screen</a>\
            <a href="javascript:;" class="jp-restore-screen" tabindex="1" title="普通模式">restore screen</a>\
            </div>\
            </div>\
            </div>\
            <!-- END } -->';
        container.find("[data-video]").each(function (i) {
            var t =this,that=$(t),parent=that.parent(),title=that.attr("title")||'',video=that.data("video")||{},id="jp_parent_"+i;
            parent.attr("id",id);
            that.after(ui);
             that.jPlayer({
                ready: function () {
                    $(this).jPlayer("setMedia", {
                        title: title,
                        m4v:video.src,
                        poster: video.img
                    });
                },
                cssSelectorAncestor:"#"+id,//父容器
                swfPath: "http://cdn.bootcss.com/jplayer/2.9.2/jplayer/",
                supplied: "m4v",
                size: {
                    width: "570px",
                    height: "340px",
                    cssClass: "jp-video-360p"
                }
            });
           // console.log(video);
            /**
             * 记录播放时间
             **/
            if(window.localStorage&&video.id){
                var videoStorag  = function () {
                    var l = localStorage.data_lib_video_storage||'{}';
                    (typeof l === "string")&&(l = JSON.parse(l));
                    return l;
                };
                that.on($.jPlayer.event.timeupdate,function (ev) {
                    var l = videoStorag(),t =ev.jPlayer.status.currentTime;if(t){
                        l[video.id]=t;
                        localStorage.data_lib_video_storage = JSON.stringify(l);
                    }
                }).on($.jPlayer.event.play,function (ev) {
                    /** 历史时间事件 **/
                    var historyTimeBox = parent.find(".jp-history-time");
                    if(historyTimeBox.length){
                        historyTimeBox.show();
                        var close = historyTimeBox.find(".jp-history-time-close"), clear = setTimeout(function () {
                            historyTimeBox.remove(), close.off("click")
                        }, 5000);
                        historyTimeBox.on("click",function () {
                            historyTimeBox.remove(), close.off("click"),
                            that.jPlayer("play", parseFloat(historyTimeBox.attr("time")));

                        });
                        close.on("click",function () { historyTimeBox.remove(), clearTimeout(clear) ;return false})
                    }
                }).on($.jPlayer.event.ended,function (ev) {
                    var l = videoStorag();
                    l[video.id]=null;
                    localStorage.data_lib_video_storage = JSON.stringify(l);
                });

                /** 加载ui .jp-history-time  5s之后才记录播放时间**/
                var l =videoStorag();if(l[video.id] >5){
                    var time = l[video.id];
                    $('<div class="jp-history-time" time="'+time+'">上次播放时间:'+$.jPlayer.convertTime(time) +'<i class="jp-history-time-close">X</i> </div>').prependTo(parent.find(".jp-gui"));
                }
            }
            /**
             * 美化title提示
             */
        })
    }
});