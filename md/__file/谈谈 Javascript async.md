## 写在前面
``` javascript
/**
 * 声明           本文章由mcwm原创
 * 分类           Javascript
 * 功能           代码相关
 */ 
```

## 关于我理解的async
理解async之前，首先你要明白js的callback,因为数据，加载的原因。
单线程的js无法执行在执行时还未加载的数据，所以这就是在很多时候需要new对象，并初始化的原因，也是为什么推荐大家把js文件
放在body结束标签之前的原因。

callback 具体就是等待数据已经加载之后，然后再去执行的方法。
为什么不用async,因为由于错误，等待，等原因，async难以控制。

## ES6以后的 async
ES6之后，js新增Promise 对象，该对象会返回resolve, reject两个方法，resolve执行正确，reject提交错误。如下
```javascript
var promise = new Promise(function(resolve, reject) {
 if (Math.random() >0.5 /* 操作判断 */){
 resolve('success');
 } else {
 reject('error');
 }
});

promise.then(function(value) {
    // success
}).catch(function(value) {
     // error
});
```


## 理解 async await
无法使用文字解释，这里我写三段函数，方便大家理解。
 
```javascript
// 模拟异步的函数
var getType = function() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
         if (Math.random() >0.5 /* 操作判断 */){
         resolve('success');
         } else {
         resolve('error'); // 返回错误函数就就去catch了 
         // reject('error');
         }
      },Math.random()*2000)
   })  
}
  
//需求： 得到两次getType 的值，并同时显示出来
  
// 第一种 
var logType1 = function() {
  var a = function(callback) {
    getType().then(function(v) {
     callback(v)
    }).catch(function(v) {
         alert('出错了')
    })
  };
  a(function(v1) {
      a(function(v2) {        
           console.log(v1,v2)
      })
  })
}
logType1()  
// 第二种 未验证结果
var logType2 = function* (){
 var v1 = yield getType();
 var v2 = yield getType();
 console.log(v1.toString(),v2.toString())
}
logType2().next()   // 使用起来很烦

// 第二种 最新版 
var logType3 = async function(){
 var v1 = await getType();
 var v2 = await getType();
 console.log(v1.toString(),v2.toString())
}
logType3() // 返回 Promise 对象

```
>  已上代码可在新版google console 里面直接运行