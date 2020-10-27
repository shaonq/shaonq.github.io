/**
 * Created by wangmi on 2017/3/23.
 */
var fn = {
    date: {
        /* 格式化日期 */
        n2s: function (a) {
            return 10 > a ? "0" + (a | 0) : a
        },
        format: function (a, b) {
            var c;
            typeof a === "number" && (a = new Date(a));
            c = a.getFullYear();
            var d = this.n2s(a.getMonth() + 1), f = this.n2s(a.getDate()), e = this.n2s(a.getHours()), k = this.n2s(a.getMinutes()), g = this.n2s(a.getSeconds());
            switch (b) {
                case "yyyy-MM-dd HH:mm:ss":
                    c = c + "-" + d + "-" + f + " " + e + ":" + k + ":" + g;
                    break;
                case "yyyy-MM":
                    c = c + "-" + d;
                    break;
                case "yyyy":
                    break;
                default:
                    c = c + "-" + d + "-" + f
            }
            return c
        }, toDate: function (a) {// 转日期类型
            var b, c, d, f, e, g;
            if (19 == a.length)return b = a.substring(0, 4), c = a.substring(5, 7), d = a.substring(8, 10), f = a.substring(11, 13), e = a.substring(14, 16), g = a.substring(17, 19), new Date(b, c - 1, d, f, e, g);
            if (10 == a.length)return b = a.substring(0, 4), c = a.substring(5, 7), d = a.substring(8, 10), new Date(b, c - 1, d);
            if (7 == a.length)return b = a.substring(0, 4), c = a.substring(5, 7), new Date(b, c - 1);
            if (4 == a.length)return b = a.substring(0, 4), new Date(b)
        }, countDown: function (a) {// 倒计时 yyyy-MM-dd HH:mm:ss
            var b = (this.toDate(a) - this.toDate(this.now("yyyy-MM-dd HH:mm:ss"))) / 1E3, c, d;
            0 < b ? (a = Math.floor(b / 86400), c = Math.floor(b / 3600) - 24 * a, d = Math.floor(b / 60) - 60 * c - 1440 * a, b = Math.floor(b % 60)) : a = c = d = b = 0;
            return {dd: this.n2s(a), d: a, HH: this.n2s(c), H: c, mm: this.n2s(d), m: d, ss: this.n2s(b), s: b}
        }, now: function (a, b) {
            typeof a === "string" && (b = a);
            var c = Date, d;
            a | 0 ? (d = parseInt(a), d = 864E5 > d ? +new Date + 864E5 * d : d) : d = +new Date;
            c = new c(d);
            return b ? this.format(c, b) : this.format(c)
        }, history: function (a, b) {
            "string" === typeof a && (a = this.toDate(a));
            var c = (new Date).getTime() - a;
            return 2592E6 < c ? this.format(a, b) : 864E5 <= c ? (c / 1E3 / 60 / 60 / 24 | 0) + "\u5929\u524d" : 36E5 <= c ? (c / 1E3 / 60 / 60 | 0) + "\u5c0f\u65f6\u524d" : 3E5 <= c ? (c / 1E3 / 60 | 0) + "\u5206\u949f\u524d" : "\u521a\u521a"
        }
    }
};
module.exports =fn;