define(function() {
    return function () {
        var that = $(this);
        that.each(function () {
            var i = parseInt(this.className.split('-')[1])||0;
            var z = [0,1120,1280,1360,640][i]/80;
            var ani = new Motio(this, {
                fps: 10,
                frames:z
            }),log={};
            that.on("mouseover mouseout",function (e) { log[e.type]() });
            ani.on('frame', function (e) {
                if(this.frame === (this.frames-1)){
                    switch(i){
                        case 1:break;
                        case 2:ani.to(10,true,function () { this.play() });break;
                        case 3:ani.pause();break;
                        case 4:
                            that.on("click",function () {
                                ani.toStart(true,function () {
                                    that.off("mouseover mouseout click").removeAttr("style").addClass("this");
                                })
                            });
                            break;
                    }
                }
            });
            log.mouseover =function () { ani.play() };
            log.mouseout=function () { (i!==3)&&ani.toStart() };
        })
    }
});