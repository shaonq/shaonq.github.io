## 基于Tween生成动画

Tween.js 是动画的运动曲线，其他语言类似

### Tween算法

> Tween.js 是一种动画的算法，比如"Linear","easeIn" ... 等，关于 Tween.js ,github网站上有专业的算法，有兴趣的可以去查阅！

### 这里`Linear`：线性匀速运动效果为例

```javascript
window.nui = window.nui||{};
nui.animate = function (from, to,callback,easing,duration) {
  /**
   * form       初始值     int
   * to         结束值     int
   * duration   运动时间   int
   * easing     动画类型   string
   * callback   回调函数   function
   */
  easing = function (t, b, c, d) { /** Tween Linear 动画计算公式  */
    return c * t / d + b;
  };
   var start = 0;
   var timer = Math.ceil(duration / 17); // 1000/17 ≈ 60 FPS
   var fn = easing; // 还可以走其他 Tween 算法，但是这里没申明
   var step = function() {
       // 当前的运动位置
       var value = fn(start, from, to - from, timer);
        start++;
        // 时间递增
        if (start <= timer) {
            callback(value);
            requestAnimationFrame(step); //类似 setInterval(step,17)
        } else {
            // 动画结束，返回第二个参数...
            callback(to, true);
        }
    };
    // 开始执行动画
    step();
};
```

###  利用Tween,生成无依赖的锚点返回顶部平滑动画
```javascript
// document.body.scrollTop body当前滚动条的位置
// 0 滚动条回到顶部位置
 nui.animate(document.body.scrollTop, 0, function (value) {
    document.body.scrollTop = value;
 }, 'Linear', 600)
```