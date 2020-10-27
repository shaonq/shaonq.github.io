## 写在前面
``` javascript
/**
 * 声明           本文章由mcwm原创
 * 分类           html5
 * 功能           网页优化
 * 备注           图片优化
 */ 
```

## 什么是Base64
> Base64是网络上最常见的用于传输8Bit字节代码的编码方式之一，大家可以查看RFC2045～RFC2049，上面有MIME的详细规范。Base64编码可用于在HTTP环境下传递较长的标识信息。例如，在Java Persistence系统Hibernate中，就采用了Base64来将一个较长的唯一标识符（一般为128-bit的UUID）编码为一个字符串，用作HTTP表单和HTTP GET URL中的参数。在其他应用程序中，也常常需要把二进制数据编码为适合放在URL（包括隐藏表单域）中的形式。此时，采用Base64编码具有不可读性，即所编码的数据不会被人用肉眼所直接看到。  一一 百度百科

## 什么是Base64图片
就是利用`Base64可`以传输图片的特性，将图片直接保存为`Base64`数据流来显示。这样的做法可以方便那些无素材的操作，但是同时需要注意的是，`Base64`会比原图要大，虽然往往压缩后的`Base64`素材会比原图小，但是还是不建议在较大的图片上使`Base64`。

## 简介Base64图片格式
`Base64`图片格式,由两部分组成,其中以`,`分割。


| 属性 | 注释  |
| :------------| :-----|
|data:,|文本数据|
|data:text/plain,|文本数据|
|data:text/html,|HTML代码|
|data:text/html;base64,|base64编码的HTML代码|
|data:text/css,|CSS代码|
|data:text/css;base64,|base64编码的CSS代码|
|data:text/javascript,|Javascript代码|
|data:text/javascript;base64,|base64编码的Javascript代码|
|data:image/gif;base64,|base64编码的gif图片数据|
|data:image/png;base64,|base64编码的png图片数据|
|data:image/jpeg;base64,|base64编码的jpeg图片数据|
|data:image/x-icon;base64,|base64编码的icon图片数据|



## 举个栗子
`html`中`1x1(px)`的图片占位符。
```html
    <!-- 原生 -->
    <img src="images/pixel.png">
    <!-- Base64 -->
    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">
```
>`data:image/gif;base64,`一张gif格式的图片,`R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==`图片的`Base64`的值