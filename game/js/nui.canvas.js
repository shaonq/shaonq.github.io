;!function () {
    if (!window.requestAnimationFrame) {
        var lastTime = 0;
        var vendors = ['ms', 'moz', 'webkit', 'o'];
        for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
            window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame']
                || window[vendors[x] + 'CancelRequestAnimationFrame'];
        }
        window.requestAnimationFrame = function (callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function () {
                    callback(currTime + timeToCall);
                },
                timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        };
}()
;!function () {
    window.nui = window.nui || {};
    var global = nui.canvas = function (option) {
        option = option || {};
        var canvas = this.canvas = option.el ? document.querySelector(option.el) : document.createElement("canvas");
        this.color = option.color || "transparent";
        if (!("getContext" in canvas)) throw new Error("不支持canvas的浏览器");
        var context = this.context = canvas.getContext('2d');
        var width = this.width = +option.width || window.innerWidth;
        var height = this.height = +option.height || window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        context.clearRect(0, 0, width, height);
        return this
    };
    global.prototype.randomInt = function (min, max) {
        return min + Math.random() * (max - min);
    };
    global.prototype.clamp = function (value, min, max) {
        return Math.min(Math.max(value, Math.min(min, max)), Math.max(min, max));
    };
    global.prototype.getImageData = function (option, callback) {
        var context = this.context;
        var that = this;
        var img = new Image();
        img.src = option.src;
        img.onload = function () {
            var canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            var context = canvas.getContext("2d");
            context.drawImage(img, 0, 0, img.width, img.height);
            var imageData = context.getImageData(0, 0, img.width, img.height);

            function getPixels() {
                var pixels = [];
                var data = imageData.data;
                var width = imageData.width;
                var height = imageData.height;

                for (var x = 0; x < width; x++) {
                    for (var y = 0; y < height; y++) {
                        var pos = ( y * width + x) * 4;
                        pixels.push({
                            y: y,
                            x: x,
                            fillStyle: 'rgba(' + data[pos] + ',' + (data[pos + 1]) + ',' + (data[pos + 2]) + ',' + (data[pos + 3]) + ')'
                        })
                    }
                }
                return pixels
            }

            callback && callback.call({canvas: canvas, context: context}, getPixels(), canvas)

        };
        img.onerror = function () {
            throw new Error("不支持的操作")
        }
        return this
    };
    global.prototype.strokeCross = function (option) {
        option = option || {};
        var context = this.context;
        context.beginPath();
        context.save();
        context.translate(option.x || 0, option.y || 0);
        context.moveTo(0, 0);
        context.lineTo(0, option.width);
        context.moveTo(-option.width / 2, option.width / 2);
        context.lineTo(option.width / 2, option.width / 2);
        context.restore();
        context.closePath();
        context.strokeStyle = option.strokeStyle || this.color;
        context.stroke();
    };
    global.prototype.strokeTriangle = function (option) {
        option = option || {};
        var context = this.context;
        context.save();
        context.translate(0, -option.height / 2);
        context.beginPath();
        context.moveTo(option.x, option.y);
        context.lineTo(option.x + option.width / 2, option.y + option.height);
        context.lineTo(option.x - option.width / 2, option.y + option.height);
        context.restore();
        context.closePath();
        context.strokeStyle = option.strokeStyle;
        context.stroke();

    };
    global.prototype.fillTriangle = function (option) {
        option = option || {};
        var context = this.context;
        context.save();
        context.translate(0, -option.height / 2);
        context.beginPath();
        context.moveTo(option.x, option.y);
        context.lineTo(option.x + option.width / 2, option.y + option.height);
        context.lineTo(option.x - option.width / 2, option.y + option.height);
        context.restore();
        context.closePath();
        context.fillStyle = option.fillStyle;
        context.fill();

    };
    global.prototype.fillArc = function (option) {
        option = option || {};
        angle = option.angle || [];
        var context = this.context;
        context.beginPath();
        context.fillStyle = option.fillStyle || this.color;
        //中心(x,y,r) 起始角 结束角
        context.arc(option.x | 0, option.y | 0, option.r || 50, angle[0] || 0, angle[1] || 2 * Math.PI);
        context.closePath();
        context.fill();
        return this
    };
    global.prototype.strokeArc = function (option) {
        option = option || {};
        angle = option.angle || [];
        var context = this.context;
        context.beginPath();
        context.strokeStyle = option.strokeStyle || this.color;
        context.arc(option.x | 0, option.y | 0, option.r || 50, angle[0] || 0, angle[1] || 2 * Math.PI);
        context.closePath();
        context.stroke();
        return this
    };
    global.prototype.fillRect = function (option) {
        option = option || {};
        angle = option.angle || [];
        var context = this.context;
        context.beginPath();
        context.fillStyle = option.fillStyle || this.color;
        context.fillRect(option.x || 0, option.y || 0, option.width || 100, option.height || 100);
        context.closePath();
        context.fill();
        return this
    };
    global.prototype.strokeRect = function (option) {
        option = option || {};
        var context = this.context;
        context.beginPath();
        context.strokeStyle = option.strokeStyle || this.color;
        context.strokeRect(option.x || 0, option.y || 0, option.width || 100, option.height || 100);
        context.closePath();
        context.stroke();
        return this
    };
    global.prototype.clear = function () {
        this.context.clearRect(0, 0, this.width, this.height);
    };
    global.prototype.animate = {
        Circle: function () {

        }
    };
    global.prototype.setDraw = function () {
        var canvas = this.canvas,
            ctx = this.context,
            width = this.width,
            height = this.height;
        window.attachEvent('resize',function () {
            alert(1)
        });
        function Star() {
            this.size = 2 * Math.random();      //大小
            this.speed = .07 * Math.random();   //速度
            this.x = Math.random() * width;      //x
            this.y = Math.random() * height     //y
        }
        Star.prototype.reset = function () {
            this.size = 2 * Math.random();
            this.speed = .05 * Math.random();
            this.x = width;
            this.y = Math.random() * height
        };
        Star.prototype.update = function () {
            // 当星星到达最左边的时候，重置属性
            this.x -= this.speed;
            if (this.x < 0) {
                this.reset()
            } else {
                var c = "rgba(255, 255, 255, 0.5)";
                ctx.fillStyle = c;
                ctx.strokeStyle = c;
                ctx.fillRect(this.x, this.y, this.size, this.size)
            }
        };
        function Line() {
            this.reset()                        // 重置
        }
        Line.prototype.reset = function () {
            this.x = Math.random() * width;     //随机
            this.y = 0;                         // 0
            this.len = 80 * Math.random() + 10; // 长度
            this.speed = 8 * Math.random() + 4; // 速度
            this.size = Math.random() + .1;     // 大小
            this.waitTime = (new Date).getTime() + 3e3 * Math.random() + 500;
            this.active = !1
        };
        Line.prototype.update = function () {
            if (this.active) {
                if (this.x -= this.speed, this.y += this.speed, this.x < 0 || this.y >= height) {
                    this.reset()
                } else {
                    ctx.lineWidth = this.size;
                    ctx.beginPath();
                    ctx.moveTo(this.x, this.y);
                    ctx.lineTo(this.x + this.len, this.y - this.len);
                    ctx.stroke()
                }
            } else {
                this.waitTime < (new Date).getTime() && (this.active = !0)
            }

        };
        return {
            Star: new Star(),
            Line: new Line(),
        }
    };
    typeof define === "function" && define(function (require) {
        return global
    })
}();