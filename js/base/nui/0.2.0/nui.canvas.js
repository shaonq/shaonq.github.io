(function () {
    window.requestAnimationFrame = window.requestAnimationFrame || function (fn) {
            setTimeout(fn, 17);
        };
    window.nui = window.nui || {};
    var global = nui.canvas = function (option) {
        option = option || {};
        var canvas = this.canvas = option.el ? document.querySelector(option.el) : document.createElement("canvas");
        this.color = option.color || "#000";
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
                // console.log(data.length / 4 === width * height);
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
    typeof define === "function" && define(function (require) {
        return global
    })
}(window));