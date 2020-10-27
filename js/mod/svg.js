define(function() {
    //http://www.bootcdn.cn/bonsai/
    return function () {

        if (SVG.supported) {
            (function () {
                var draw = SVG('drawing').size(320, 300);
                var image = draw.image('http://shaonq.github.io/images/base/anim-app.png').y(150);
                var symbol = draw.symbol();
                symbol.rect(80, 80).attr({fill: '#fff'});
                var rect = draw.use(symbol).move(0, 150).addClass("aaaa");
                image.maskWith(rect);
                var i = 0;
                (function () {
                    i -= 80;
                    (i <= -1280) && (i = -800);
                    image.move(i, 150);
                    setTimeout(arguments.callee, 1000 / 10); //10 FPS
                }());

                draw.text("这是一段svg格式的排版！");
                var text = draw.text(function (add) {
                    add.tspan('你 ').newLine(),
                        add.tspan('注意').fill('#f06'),
                        add.tspan('到了吗.'),
                        add.tspan('这里的内容.').newLine().dx(20),
                        add.tspan('字体很奇怪').newLine(),
                        add.tspan('QVQ，每个字符都要手写~').newLine(),
                        add.tspan('10fps的动画- -').dx(20)
                }).move(0, 30);
                text.font({
                    family: 'Microsoft JhengHei'
                });
                text.build(true); // 文字追加模式
                var tspan = text.tspan('追加一行文字 ').fill('#00ff97').newLine();
                text.build(false); // 关闭
                tspan.animate('2s').fill('#f06');
                //按照路径排列
                text.path('M 30 30 C 300 100 300 0 400 100 ');
            }());
            var u = new Audio("http://music.huoxing.com/upload/20121215/1355575227640_8200.mp3");
            var svg2 = SVG('svg2').viewbox(0, 0, 300, 100).attr({preserveAspectRatio: "xMinYMin meet"});
            var group = svg2.group();

            group.circle(48).attr({cx: 50, cy: 50}).attr({fill: '#f4f4f4','fill-opacity': .1, stroke: '#eee', 'stroke-width': 2});
            var circle = group.circle(48).attr({cx: 50, cy: 50}).attr({
                'fill-opacity': 0,
                stroke: '#f06',
                'stroke-width': 2,
                'stroke-dasharray': 314,
                'stroke-dashoffset': 314
            }).rotate(-90);
            var typeText = group.text("播放").move(0, 0).font({size: 12, family: 'Microsoft Jhenghei'}).move(4,5);
            u.addEventListener("timeupdate", function () {
                circle.attr({"stroke-dashoffset": (314 - this.currentTime / this.duration * 314)})
            });
            group.on("click", function () {
                if (group.hasClass("play")) {
                    group.removeClass("play"), u.pause(), typeText.text("播放")
                } else {
                    group.addClass("play"), u.play(), typeText.text("暂停")
                }
            });
            var g2 = group.group().move(35,35);
            var image = g2.image('images/svg-mask.jpg');
            image.clipWith(typeText).width(35).height(22)

        }
    }
});