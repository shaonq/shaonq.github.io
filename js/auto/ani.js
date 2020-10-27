define(function(require) {
    require.async(['jquery','cdn/motio/2.2.2/jquery.motio.min'], function ($) {
        $("[data-ani]").each(function () {
            var op =this.getAttribute("data-ani"),conf={fps: 10, frames: 10},that =$(this);
            try {
                var _  = JSON.parse(op);
                _.fps && (conf.fps = _.fps);
                _.frames && (conf.frames = _.frames)
            }catch (e){}
            var ani = new Motio(this, conf);
            that.next("label").on("click",function () {
               // ani.play().pause()toStart().to().toEnd(10,true,fn)
                var t =this;
                t.innerHTML="正放";
                that.removeClass("this");
                ani.toEnd(function () {
                    setTimeout(function () {
                        t.innerHTML="回放";
                        ani.toStart(function () {
                            this.pause();
                            that.addClass("this");
                            t.innerHTML="播放";
                        })
                    },1000)
                })
            });
        });


    });
    require.async(['jquery','cdn/masonry/4.1.1/masonry.pkgd.min'],function ($) {
        $(".floor-ani").each(function () {
           window.Masonry && new Masonry( this, {
                itemSelector: '.col'
                //,columnWidth: 200
            });
        })
    });

    require.async(['jquery','base/TweenMax.min'],function ($,M) {
        /*! docs: http://greensock.com/docs/#/HTML5/GSAP/TweenMax/TweenMax/
         *  delay 延时
         *  ease 曲线 Power2.easeInOut
         *  repeat  重复 -1无限;重复计算时在运行之后
         *  repeatdelay 重复的等待时间
         *  yoyo 反向
         *  paused 暂停
         *  onComplete 所有动画执行完毕
         *  onStart 不同上
         *  opacity:0.5, rotation:45 
         */
        M.to(".floor-ani", .5,{}
           // {boxShadow:"0px 0px 600px rgba(0,0,0,.3)" }
            //{ rotation:36000,ease:'Linear.ease', onComplete :function () { console.log("完毕") } , onStart:function () { console.log("开始") } , onUpdate:function () { console.log(".") } }
           );
    })
});