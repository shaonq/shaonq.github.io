define(function (require) {
    var $ = require("jquery"), global = {};
    global.config = function (op) { return op = op || {},global.users = op.users || {},this};
    global.config().init = function () {
        require.async("https://cdn.wilddog.com/js/client/current/wilddog.js", function () {
            global.user = global.users.user|| ("user"+Math.ceil(Math.random()*100000000));
            global.img = global.users.img;
            global.__init = function () {
                this.parent = $(".floor-danmu .floor-bd");
                var onec, ref = new Wilddog("https://yanyujiangnan.wilddogio.com/danmu");
                ref.once("value", function (a) {
                    onec = true;
                    global.load(a.val())
                });
                ref.on("child_added", function (a) {
                    onec && global.add(a.val(), "new")
                });
                var __input=global.parent.find("input"),__fn =function () {
                    _ = {time: new Date() / 1, text: this.value, user: global.user};
                    if(this.getAttribute("color"))_.color=this.getAttribute("color");
                    (global.user === "\u52C7\u6562\u7684\u5FC3") && (_.color = "#F47983" );
                    ref.push(_);
                    this.value = "";
                };
                __input.keypress(function (e, _) {
                    if (e.keyCode == 13) __fn.call(this)
                });
                global.parent.find("button").on("click",function () {
                    __input.each( __fn.call(this))
                })
            };
            global.load = function (data) {
                var key;
                for (key in data)this.filter(data[key])
            };
            global.filter = function (data) {
                //1个小时加载一次qvq
                if (new Date(data.time).getHours() === new Date().getHours()) {
                    this.add(data)
                }
            };
            global.add = function (data, curr) {
                $("<span>").text(data.text).appendTo(this.parent).each(function () {
                    curr && (global.user === data.user) && (this.className = (this.className + ' ' + curr));
                    data.color && (this.style.color = data.color);
                    global.animate.call(this)
                })
            };
            global.animate = function () {
                var that = $(this);
                that.css("top", Math.random() * 10 * 34).animate({
                    left: '-500px'
                }, Math.random() * 8000 + 10000, function () {
                    that.remove()
                });
            };
            global.__init();
        });
    };
    return global
});

