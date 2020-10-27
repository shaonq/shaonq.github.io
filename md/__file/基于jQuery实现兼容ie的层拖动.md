## 基于jQuery实现兼容ie的层拖动

这里已经封装成了一个方法，代码贴在最后面，是nui.util.drop的原型方法。

## drop的实现原理？

* 这里先介绍用到的三个事件
    *  `onmousedown`某个鼠标按键被按下
    *  `onmousemove`鼠标被移动
    *  `onmouseup`某个鼠标按键被松开
 
* 实现原理
    *  监听`document`上的`鼠标按下`和`松开`
    *  监听`document`上的`鼠标按下`过程中`div`的`鼠标移动`
    *  当`document`上的`鼠标松开`，过程停止

* 注意点
    * 拖拽层不可超过父容器`window`

* 具体讲解详细注释
```javascript
var drop = function(box, move) { // 容器[$对象,下亦同] 拖动条[可以是'#id',或者'.className']
    var doc = $(document),    // document[$]
    win = $(window),   // window[$] 
    a = {}; //  存储变量
    $(move,box).on("mousedown",function(t) {
        t.preventDefault(),
        a.start = !0,   // 状态 鼠标被按下
        /**
         *  event.clientX 鼠标指针向对于document的水平坐标
         *  box.css("left") //取值box的style.left
         *  a.offset[0] 得到box X轴的偏移量
         *  ... Y轴亦同
         */
        a.offset = [t.clientX - parseFloat(box.css("left")), t.clientY - parseFloat(box.css("top"))]
    }),
    doc.on("mousemove",function(t) {
        //如果状态为true 则移动元素
        if (a.start) {
            var e = t.clientX - a.offset[0],// 还原X轴
            n = t.clientY - a.offset[1],
            o = "fixed" === box.css("position"); //box定位影响要不要计算window的滚动条高度
            t.preventDefault(),
            a.stX = o ? 0 : win.scrollLeft(),  //X轴滚动条的长度,及移动的最小值
            a.stY = o ? 0 : win.scrollTop();
            var r = win.width() - box.outerWidth() + a.stX, //X轴右侧的最大值，及移动的最大值
            c = win.height() - box.outerHeight() + a.stY;
            e < a.stX && (e = a.stX),   //比最小还小就取最小值
            e > r && (e = r),           //比最大还大就取最大值
            n < a.stY && (n = a.stY),  
            n > c && (n = c),
            box.css({left: e,top: n})   //赋值[$]
        }
    }).on("mouseup",function() {
         //清除状态
        a.start && (a.start = null)
    })
};
```