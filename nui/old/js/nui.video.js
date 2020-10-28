/**
 * Created by wangmi on 2017/4/12.
 */

nui.video = function (options, callback) {
    options = options || {};
    var one,ie8 = nui.is.ie && nui.is.ie < 9  ;
    nui.get.className.video =  nui.get.className.open+'-video';
    var conf = {
            path: options.path || '//cdn.bootcss.com/video.js/5.19.1/',
            css: 'video-js.min.css',
            js: 'video.min.js',
            className: 'nui_video',
            swf: 'video-js.swf',
            ie8: 'ie8/videojs-ie8.min.js',
            elem: options.elem,
            img: options.img || 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==',
            skin: options.skin || 'vjs-default-skin',
            width: options.width || 640,
            height: (typeof options.height === "object" && options.height[1]) || 360,
            title: options.title || false,
            sources: options.sources,
            loop: options.loop,
            controls: options.controls || "controls",
            autoplay: options.autoplay,
        },
        videoId = nui.get.genId(conf.className);
    conf.sources = typeof conf.sources === "object" ? conf.sources : [{
        src: conf.sources,
        type: 'video/mp4'
    }];
    var ie8sources ='';
    for ( var i in conf.sources){
        conf.sources[i].type ==='video/mp4' && (ie8sources = "<source src='"+conf.sources[i].src+"' type='video/mp4'>")
    }
    try {
        var videoInit = function () {
            if(!one){
                videojs.addLanguage("zh-CN", {
                    "Play": "播放",
                    "Pause": "暂停",
                    "Current Time": "当前时间",
                    "Duration Time": "时长",
                    "Remaining Time": "剩余时间",
                    "Stream Type": "媒体流类型",
                    "LIVE": "直播",
                    "Loaded": "加载完毕",
                    "Progress": "进度",
                    "Fullscreen": "全屏",
                    "Non-Fullscreen": "退出全屏",
                    "Mute": "静音",
                    "Unmute": "取消静音",
                    "Playback Rate": "播放码率",
                    "Subtitles": "字幕",
                    "subtitles off": "字幕关闭",
                    "Captions": "内嵌字幕",
                    "captions off": "内嵌字幕关闭",
                    "Chapters": "节目段落",
                    "You aborted the media playback": "视频播放被终止",
                    "A network error caused the media download to fail part-way.": "网络错误导致视频下载中途失败。",
                    "The media could not be loaded, either because the server or network failed or because the format is not supported.": "视频因格式不支持或者服务器或网络的问题无法加载。",
                    "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.": "由于视频文件损坏或是该视频使用了你的浏览器不支持的功能，播放终止。",
                    "No compatible source was found for this media.": "无法找到此视频兼容的源。",
                    "The media is encrypted and we do not have the keys to decrypt it.": "视频已加密，无法解密。"
                });
                one = !0
            }
            var html ='<div style="width: ' + conf.width + 'px;height: ' + conf.height + 'px"><video id="'+videoId+'" class="video-js vjs-big-play-centered '+conf.skin+'">'+ie8sources+'</video></div>',
                success = function () {
                    var v = videojs(document.getElementById(videoId), {
                        techOrder: ["html5", "flash"],
                        flash: {swf: conf.path + conf.swf},
                        poster: conf.img,
                        aspectRatio: "16:9",
                        width: conf.width,
                        height: conf.height,
                        sources: conf.sources,
                        controls:conf.controls,
                        loop:conf.loop,
                        preload:'auto',
                    }, function () {
                        callback && callback(v);
                    })
                };
            conf.elem?function(){
               var that =  document.querySelector(conf.elem);
               that.innerHTML = '<div class="'+nui.get.className.video+'">'+html+'</div>';
                success()
            }():nui.open({
                content:html,
                skin:nui.get.className.video,
                fixed: true,
                title: conf.title,
                success:success
            });
        };
        var _ = function () {
            typeof videojs === "function" ? videoInit() : function () {
                nui.loadJs(conf.path + conf.js, videoInit);
                nui.loadCss(conf.path + conf.css);
            }()
        };
        ie8 && document.createElement("video");
        ie8?nui.loadJs(conf.path + conf.ie8, _):_();

    } catch (e) {
        nui.log(e,'nui.video Error')
    }
};