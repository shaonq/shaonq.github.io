define(function (require) {
    require.async(['jquery', 'base/TweenMax.min','nui'], function ($, M,nui) {
        var $body = $('body');
        $body.on('mousemove', function (event) {
            var x = event.pageX - $body.width() / 2 > 0 ? "20px" : "-20px";
            var y = event.pageY - $body.height() / 2 > 0 ? "20px" : "-20px";
            M.to(document.body, .5, {"backgroundPosition": x + " " + y});
        });
        (function () {
            window.nk =nui;
           // $(".__mail_postal").html(nk.tpl('{{# var m =d.mm.toString(), h =d.HH.toString() ,s =d.ss.toString();}} <i>{{h.split("")[0]}}</i><i>{{h.split("")[1]}}</i><i>{{m.split("")[0]}}</i><i>{{m.split("")[1]}}</i><i>{{s.split("")[0]}}</i><i>{{s.split("")[1]}}</i>',nk.date.countDown("2016-12-02 00:00:00")));
            $(".__mail_postal").html(nui.tpl('{{# var m =d[1].toString(), h =d[0].toString() ,s =d[2].toString();}} <i>{{h.split("")[0]}}</i><i>{{h.split("")[1]}}</i><i>{{m.split("")[0]}}</i><i>{{m.split("")[1]}}</i><i>{{s.split("")[0]}}</i><i>{{s.split("")[1]}}</i>',nui.util.date.now("yyyy-MM-dd HH:mm:ss").split(" ")[1].split(":")));
/*            M.staggerTo(".__mail_postal i", 1, {rotation:360,onComplete:function (e) {
                this.kill();
            }}, 0.505);*/
            setTimeout(arguments.callee,500)
        }());
        (function () {
          var m =   $(".__mail_button"),pad = $(".__mail_notepad"),vision =require("mod/vision");
           // M.set(".__mail_button",{rotation:-35});
           // M.to(".__mail_button",1,{rotation:35,repeat:-1, ease:Linear.ease,yoyo:!0},0.5);
          m.on("click",function () {
/*              var t =nk.date.countDown("2016-12-02 00:00:00");
             if(t&&(t.H ===0)&&(t.d ===0)&&(t.m===0)&&(t.s ===0)){
                 pad.each(function () {
                     var text ='<p>遇见你，是不是已经花光了我的所有好运。\n</p>\n<p class="right"> 一一生日快乐。</p>\n';
                     vision.util.addText(this,text,function () {
                         (function(){function f(){var a=document.createElement("div"),b=document.createElement("img");b.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAtBAMAAADSCB8nAAAAD1BMVEX3AyEAAAD7xMX5dn74OEjhlwytAAAABXRSTlNtAAUfQB6EOKgAAADBSURBVCjPZc7bDcMgDAVQS2GA2FmgQAdIgQGshP1nqkuCHLv8WBxdPwDNy2W1Qu1wsvH5svKG5SmU0m6Ecq1gJLfORqgBgBEBK5kvCSJzrxNiFY2oaEQnS8QJsRGNqBB7yeClWdEmvSeDl90L/Qt72YwsPwEjK2A2cqyuK0Qvi4jdXtBJiF4OHMIqHy9LHJJVCjoJ8ZbH3CHUIPQR63FKqKUyhLPgJanWFKn1WuItlBIiCSecQlKEI04Z5f6rSEzlC2LQKVMi/t/CAAAAAElFTkSuQmCC";a.style.top=0+Math.floor(10*Math.random())-40+"px";a.style.left=0+Math.floor(Math.random()*((c.clientWidth||500)-0))+"px";a.style.webkitAnimationName=.5>Math.random()?"drop":"drop,rotate";b.width=5+Math.floor(18*Math.random())+7;var d=6+2*Math.random()+"s",e=0+5*Math.random()+"s";a.style.webkitAnimationDuration=d+","+d;a.style.webkitAnimationDelay=e+", "+e;a.appendChild(b);return a}var c=document.getElementById("J_mask");(function(){c.innerHTML="";for(var a=0;35>a;a++)c.appendChild(f())})()})();
                     })
                 });
             }else {

             }*/
              alert("日期已经过了哦~");
          }).remove();
        }())

    });

    if(typeof Audio === "function"){
        var m =  require("mod/music"); //http://5sing.kugou.com/fc/13935978.html
        m.init();
    };

});