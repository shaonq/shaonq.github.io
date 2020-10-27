define(function(require) {
    var $ =require("jquery"), nui = require("nui");
    var global ={};
    var t =
        '{{# for(var i = 0, len =  d.length; i < len; i++){ }}\
           <li style="border-color:{{ d[i].c }}"><div>\
               <h4 rgb={{ d[i].r }}>{{ d[i].h }}<em>{{d[i].r[0]}}</em><em>{{d[i].r[1]}}</em><em>{{d[i].r[2]}}</em></h4> \
               <span>{{ d[i].s }}</span>\
               <cite style="background-color:rgba({{ d[i].r }},.4);color:#333;">{{ d[i].c }}</cite>\
               <i></i>\
           </div></li>\
        {{# } }}';
    var d=[
         {c:"#FFB3A7",h:"粉红",s:"即浅红色。别称：妃色杨妃色湘妃色妃红色。"}
         ,{c:"#ED5736",h:"粉红",s:"妃红色：古同“绯”，粉红色。杨妃色 湘妃色 粉红皆同义。"}
         ,{c:"#F00056",h:"品红",s:"品红：比大红浅的红色。"}
         ,{c:"#F47983",h:"桃红",s:"桃红，桃花的颜色，比粉红略鲜润的颜色。"}
         ,{c:"#DB5A6B",h:"海棠红",s:"海棠红，淡紫红色、较桃红色深一些，是非常妩媚娇艳的颜色。"}
         ,{c:"#F20C00",h:"石榴红",s:"石榴红：石榴花的颜色，高色度和纯度的红色。"}
         ,{c:"#C93756",h:"樱桃色",s:"樱桃色：鲜红色。"}
         ,{c:"#F05654",h:"银红",s:"银红：银朱和粉红色颜料配成的颜色。多用来形容有光泽的各种红色，尤指有光泽浅红。"}
         ,{c:"#FF2121",h:"大红",s:"大红：正红色，三原色中的红，传统的中国红，又称绛色。"}
         ,{c:"#8C4356",h:"绛紫",s:"绛紫：紫中略带红的颜色。"}
         ,{c:"#C83C23",h:"绯红",s:"绯红：艳丽的深红。"}
         ,{c:"#C83C23",h:"胭脂",s:"古时女子装扮用的胭脂的颜色"}
         ,{c:"#FF4C00",h:"朱红",s:"朱砂的颜色，比大红活泼，也称铅朱朱色丹色"}
         ,{c:"#FF4E20",h:"丹",s:"丹砂的鲜艳红色"}
         ,{c:"#F35336",h:"彤",s:"赤色"}
         ,{c:"#CB3A56",h:"茜色",s:"茜草染的色彩，呈深红色。"}
         ,{c:"#FF2D51",h:"火红",s:"火焰的红色，赤色。"}
         ,{c:"#C91F37",h:"赫赤",s:"深红，火红。泛指赤色、火红色。"}
         ,{c:"#EF7A82",h:"嫣红",s:"鲜艳的红色。"}
         ,{c:"#FF0097",h:"洋红",s:"色橘红。。"}
         ,{c:"#FF3300",h:"炎",s:"引申为红色"}
         ,{c:"#C3272B",h:"赤",s:"本义火的颜色，即红色。"}
         ,{c:"#A98175",h:"绾",s:"浅绛色"}
         ,{c:"#C32136",h:"枣红",s:"即深红"}
         ,{c:"#B36D61",h:"檀",s:"浅红色，浅绛色。"}
         ,{c:"#BE002F",h:"殷红",s:"发黑的红色。"}
         ,{c:"#DC3023",h:"酡红",s:"饮酒后脸上泛现的红色，泛指脸红。"}
         ,{c:"#F9906F",h:"酡颜",s:"饮酒脸红的样子。亦泛指脸红色。"}
         ,{c:"#FFF143",h:"鹅黄",s:"小呆鹅的黄色。"}
         ,{c:"#FAFF72",h:"鸭黄",s:"小呆鸭的黄色。"}
         ,{c:"#EAFF56",h:"樱草色",s:"淡黄色。"}
         ,{c:"#FFA631",h:"杏黄",s:"成熟杏子的黄色。"}
         ,{c:"#FF8C31",h:"杏红",s:"成熟杏子偏红色的一种颜色。"}
         ,{c:"#FF8936",h:"橘黄",s:"柑橘的黄色。"}
         ,{c:"#FFA400",h:"橙黄",s:"大橙子的黄色。 。"}
         ,{c:"#FF7500",h:"橘红",s:"柑橘皮所呈现的红色。 。"}
         ,{c:"#FFC773",h:"姜黄",s:"黄姜的颜色。 。"}
         ,{c:"#F0C239",h:"缃色",s:"浅黄色。 。"}
         ,{c:"#FA8C35",h:"橙色",s:"界于红色和黄色之间的混合色。 。"}
         ,{c:"#B35C44",h:"茶色",s:"一种比栗色稍红的棕橙色至浅棕色。 。"}
         ,{c:"#A88462",h:"驼色",s:"骆驼皮毛的颜色。 。"}
         ,{c:"#C89B40",h:"昏黄",s:"形容天色、灯光等呈幽暗的黄色。 。"}
         ,{c:"#60281E",h:"栗色",s:"栗壳的颜色。即紫黑色。"}
         ,{c:"#B25D25",h:"棕色",s:"棕毛的颜色。"}
         ,{c:"#827100",h:"棕绿",s:"绿中泛棕色的一种颜色。"}
         ,{c:"#7C4B00",h:"棕黑",s:"深​​棕色。"}
         ,{c:"#955539",h:"棕红",s:"红色、赤红色。古人用以饰面。"}
         ,{c:"#CA6924",h:"琥珀",s:"琥珀色。"}
         ,{c:"#6E511E",h:"褐色",s:"褐色。"}
         ,{c:"#D3B17D",h:"枯黄",s:"干枯焦黄。"}
         ,{c:"#E29C45",h:"黄栌",s:"一种落叶灌木，可做染料。"}
         ,{c:"#896C39",h:"秋色",s:"比一般橄榄棕色稍暗,且稍稍绿些。"}
         ,{c:"#D9B611",h:"秋香色",s:"浅橄榄色浅黄绿色。"}
         ,{c:"#BDDD22",h:"嫩绿",s:"刚长出的嫩叶的浅绿色。"}
         ,{c:"#C9DD22",h:"柳黄",s:"像柳树芽那样的浅黄色。"}
         ,{c:"#AFDD22",h:"柳绿",s:"柳叶的青绿色。"}
         ,{c:"#789262",h:"竹青",s:"竹子的绿色。"}
         ,{c:"#A3D900",h:"葱黄",s:"黄绿色。"}
         ,{c:"#9ED900",h:"葱绿",s:"，草木青翠的样子。"}
         ,{c:"#0EB83A",h:"葱青",s:"，淡淡的青绿色。"}
         ,{c:"#0AA344",h:"青葱",s:"，翠绿色,形容植物浓绿。"}
         ,{c:"#00BC12",h:"油绿",s:"，光润而浓绿的颜色。"}
         ,{c:"#0C8918",h:"绿沉",s:"，深绿。"}
         ,{c:"#1BD1A5",h:"碧色",s:"，青白色,浅蓝色。。"}
         ,{c:"#2ADD9C",h:"碧绿",s:"，鲜艳的青绿色。"}
         ,{c:"#48C0A3",h:"青碧",s:"，鲜艳的青蓝色。"}
         ,{c:"#3DE1AD",h:"翡翠色",s:"，翡翠宝石的颜色。"}
         ,{c:"#40DE5A",h:"草绿",s:"，绿而略黄的颜色。。"}
         ,{c:"#00E09E",h:"青色",s:"，一类带绿的蓝色,中等深浅,高度饱和。。"}
         ,{c:"#00E079",h:"青翠",s:"，鲜绿。。"}
         ,{c:"#C0EBD7",h:"青白",s:"，白而发青,尤指脸没有血色。。"}
         ,{c:"#E0EEE8",h:"鸭卵青",s:"淡青灰色，极淡的青绿色。"}
         ,{c:"#BBCDC5",h:"蟹壳青",s:"深灰绿色。"}
         ,{c:"#424C50",h:"鸦青",s:"即黑而带有紫绿光的颜色。。"}
         ,{c:"#00E500",h:"绿色",s:"在光谱中介于蓝与黄之间的那种颜色。。"}
         ,{c:"#9ED048",h:"豆绿",s:"绿豆"}
         ,{c:"#96CE54",h:"豆青",s:"青豆"}
         ,{c:"#7BCFA6",h:"石青",s:"青石"}
         ,{c:"#7BCFA5",h:"玉色",s:"玉的颜色"}
         ,{c:"#7FECAD",h:"缥",s:"绿色而微白"}
         ,{c:"#A4E2C6",h:"绿",s:"艾草的颜色"}
         ,{c:"#21A675",h:"松柏绿",s:"经冬松柏叶的深绿"}
         ,{c:"#057748",h:"松花绿",s:"。偏黑的深绿色,墨绿。"}
         ,{c:"#BCE672",h:"松花色",s:"松树花粉的颜色"}
         ,{c:"#44CEF6",h:"蓝",s:"CMY三原色的一"}
         ,{c:"#177CB0",h:"靛青",s:"蓼蓝叶泡水调和与石灰沉淀所得的蓝色染料"}
         ,{c:"#065279",h:"靛蓝",s:"由植物(例如靛蓝或菘蓝属植物)得到的蓝色染料"}
         ,{c:"#3EEDE7",h:"碧蓝",s:"青蓝色"}
         ,{c:"#70F3FF",h:"蔚蓝",s:"天空的颜色之一"}
         ,{c:"#4B5CC4",h:"宝蓝",s:"鲜艳明亮的蓝色"}
         ,{c:"#A1AFC9",h:"蓝灰色",s:"一种近于灰略带蓝的深灰色"}
         ,{c:"#2E4E7E",h:"藏青",s:"蓝而近黑"}
         ,{c:"#3B2E7E",h:"藏蓝",s:"蓝里略透红色"}
         ,{c:"#4A4266",h:"黛",s:"古代女子用以画眉"}
         ,{c:"#426666",h:"黛绿",s:"墨绿"}
         ,{c:"#425066",h:"黛蓝",s:"深蓝色"}
         ,{c:"#574266",h:"黛紫",s:"深紫色"}
         ,{c:"#8D4BBB",h:"紫色",s:"蓝和红组成的颜色"}
         ,{c:"#815463",h:"紫酱",s:"浑浊的紫色"}
         ,{c:"#815476",h:"酱紫",s:"紫中略带红的颜色"}
         ,{c:"#4C221B",h:"紫檀",s:"檀木的颜色"}
         ,{c:"#003371",h:"绀青",s:"纯度较低的深紫色"}
         ,{c:"#56004F",h:"紫棠",s:"黑红色"}
         ,{c:"#801DAE",h:"青莲",s:"偏蓝的紫色"}
         ,{c:"#4C8DAE",h:"群青",s:"深蓝色"}
         ,{c:"#B0A4E3",h:"雪青",s:"浅蓝紫色"}
         ,{c:"#CCA4E3",h:"丁香色",s:"紫丁香的颜色"}
         ,{c:"#EDD1D8",h:"藕色",s:"莲藕的颜色"}
         ,{c:"#E4C6D0",h:"藕荷色",s:"莲藕的颜色"}
         ,{c:"#75878A",h:"苍色",s:"各种颜色掺入黑色后的颜色"}
         ,{c:"#519A73",h:"苍黄",s:"苍黄"}
         ,{c:"#7397AB",h:"苍黑",s:"苍黑"}
         ,{c:"#D1D9E0",h:"苍白",s:"苍白"}
         ,{c:"#88ADA6",h:"水色",s:"水色"}
         ,{c:"#F3D3E7",h:"水红",s:"水红"}
         ,{c:"#D4F2E7",h:"水绿",s:"水绿"}
         ,{c:"#D2F0F4",h:"水蓝",s:"水蓝"}
         ,{c:"#D3E0F3",h:"淡青",s:"淡青"}
         ,{c:"#30DFF3",h:"湖蓝",s:"湖蓝"}
         ,{c:"#25F8CB",h:"湖绿",s:"湖绿"}
         ,{c:"#FFFFFF",h:"精白",s:"纯白色"}
         ,{c:"#FFFBF0",h:"像牙白",s:"乳白色"}
         ,{c:"#F0FCFF",h:"雪白",s:"如雪般洁白"}
         ,{c:"#D6ECF0",h:"月白",s:"淡蓝色"}
         ,{c:"#F2ECDE",h:"缟",s:"白"}
         ,{c:"#E0F0E9",h:"素",s:"白"}
         ,{c:"#F3F9F1",h:"荼白",s:"白"}
         ,{c:"#E9F1F6",h:"霜色",s:"白霜"}
         ,{c:"#C2CCD0",h:"花白",s:"白色和黑色混杂的白"}
         ,{c:"#FCEFE8",h:"鱼肚白",s:"似鱼腹部的颜色"}
         ,{c:"#E3F9FD",h:"莹白",s:"晶莹洁白"}
         ,{c:"#808080",h:"灰色",s:"黑色和白色混"}
         ,{c:"#EEDEB0",h:"牙色",s:"与像牙相似的淡黄色"}
         ,{c:"#F0F0F4",h:"铅白",s:"铅粉在古时用以搽脸的化妆品"}
         ,{c:"#622A1D",h:"玄色",s:"赤黑色，"}
         ,{c:"#3D3B4F",h:"玄青",s:"青黑色，"}
         ,{c:"#725E82",h:"乌色",s:"暗而呈黑的颜色，"}
         ,{c:"#392F41",h:"乌黑",s:"古时女子头发的颜色"}
         ,{c:"#161823",h:"漆黑",s:"月黑风高的黑"}
         ,{c:"#50616D",h:"墨色",s:"水墨"}
         ,{c:"#758A99",h:"墨灰",s:"水墨"}
         ,{c:"#000000",h:"黑色",s:"黑色"}
         ,{c:"#493131",h:"缁色",s:"帛黑色"}
         ,{c:"#312520",h:"煤黑",s:"煤黑色"}
         ,{c:"#5D513C",h:"黧",s:"黑中带黄的颜色"}
         ,{c:"#75664D",h:"黎",s:"黑中带黄似黎草色"}
         ,{c:"#6B6882",h:"黝",s:"本义为淡黑色或微青黑色。"}
         ,{c:"#665757",h:"黝黑",s:"黑色。"}
         ,{c:"#41555D",h:"黯",s:"黑色。"}
         ,{c:"#F2BE45",h:"赤金",s:"足金的颜色。"}
         ,{c:"#EACD76",h:"金色",s:"平均为深黄色带光泽的颜色。"}
         ,{c:"#E9E7EF",h:"银白",s:"带银光的白色。"}
         ,{c:"#549688",h:"铜绿",s:"带铜色的绿色。"}
         ,{c:"#A78E44",h:"乌金",s:"带黑色的金色。"}
         ,{c:"#BACAC6",h:"老银",s:"金属氧化后的色彩。"}
        ];
    String.prototype.colorRgb = function(){ var sColor = this.toLowerCase(), reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/; if (sColor && reg.test(sColor)){ if (sColor.length === 4){ var sColorNew = "#"; for (var i = 1; i < 4; i+=1){ sColorNew += sColor.slice(i,i+1).concat(sColor.slice(i,i+1)); } sColor = sColorNew; } var sColorChange = []; for (var i = 1; i<7; i+=2){ sColorChange.push(parseInt("0x"+sColor.slice(i,i+2))); } return sColorChange.join(","); } else { return sColor; } };
    for(var x in d)d[x].r=d[x].c.colorRgb().split(",");
    var colors = $("#colors"),log = { };
     (function () {
          log.w =  colors.width();
          log._w = (colors.width()/5)-10;
          nui.tpl(t,d,function (h) {
               colors.html(h).find("li").each(function (i) {
                    var that =$(this),color=that.data("color");
                    log.col = Math.floor(log.w / log._w);
                    log.cx = i % log.col;
                    log.cy = Math.floor(i / log.col);
                    var left = (log._w+(log.cx===5?0:12))*log.cx;
                    that.css({position: "absolute", left:left , top: 40*log.cy,width:log._w});
                    this.setAttribute("data-left",left+"px");
                    colors.height(40+40*log.cy)
               });
          });
        var _fn =arguments.callee; $(window).on("resize",function () { if (log.w !== colors.width())_fn() })
     }());

    $("#colors_ani").on("change",function () {
        if(this.checked){
            colors.addClass("ani").find("li").each(function (i) {
                var index = (i)%(log.col),n={};
                n.translateZ = (Math.floor(Math.random()*150)+20)*log.col,//随机半径 20-150
                n.rotateY = (Math.floor(Math.random()*30)-60)+(360/log.col*index),//旋转半径 +-30deg
                n.rotateX = (Math.floor(Math.random()*90)-180), //+-90deg
                n.translateX = (Math.floor(Math.random()*50)-100), //+-50px
                log.row =  Math.floor(i/log.col),//行的索引
                this.style.left='50%',
                this.style.transform =' rotateY('+ n.rotateY+'deg)   translateZ('+n.translateZ+'px) rotateX('+ n.rotateX+'deg) translateX('+n.translateX+'px) ';
            })
        }else {
            colors.removeClass("ani"), colors.find("li").each(function () {
                this.style.left=this.getAttribute("data-left") ;
                this.style.transform = 'rotate(0)'
            })
        }
    });

    nui.form({form: ".floor-color"});
    require.async(["jquery","cdn/peity/3.2.0/jquery.peity.min"],function ($,_) {
         colors.find("li").find("em").each(function (i) {
              var that = $(this),parent=that.parent(),r = parent.attr("rgb"),text =parseInt(that.text()),index=i%3;
              that.text(0 + '/' + 255)
              that.peity("donut",{
                   fill:["rgba("+r+",.9)","#eee"],
                   "innerRadius": 17, "radius": 20
              }).attr("title",text).css("margin-top",50*index+"px").next().css({"margin-top":50*index+"px"});
              //hover
              var c = 0, cl, requestAnimationFrame = function (fn) {//降级
                   window.requestAnimationFrame ? window.requestAnimationFrame(fn) : setTimeout(fn, 1000 / 10)
              };
              parent.parent().hover(function () {
                   var fn = function () {
                        requestAnimationFrame(function () {
                             that.attr("title",c).text(c + '/' + 255).change();
                             (c < text) && fn();
                             c++;
                             (c > text)&&(c =0);
                        })
                   };
                   !cl&&setTimeout(fn,100)
              },function () {
                   cl = !0
              })
         })
    });

    return global
});
