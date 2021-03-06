define(function (require, exports, module) {
    var $ = require('jquery');
    var f = {}, load_one,as = {box: "#mk_search",id: "mk_search"};
    f.each = function (arr, fn) { var i = 0, len = arr.length; for (; i < len; i++) { if (fn(i, arr[i]) === false) { break } } };
    f.UI = (function(){
        if (!$(as.box)[0]&&!load_one) {
            var ul = document.createElement('ul');
            ul.id = as.id;
            document.getElementsByTagName("body")[0].appendChild(ul);
            var css = '#mk_search:before { content: ""; position: absolute; top: -12px; left: 10px; width: 0; height: 0; border: 6px solid ; border-color: transparent transparent #fff; } #mk_search {display:none; transition: .5s;border: 1px solid #f4f4f4;font-family: Microsoft YaHei, Arial, Helvetica, sans-serif, SimSun; position: absolute; top: 37px; left: 0; width: 215px; margin: 11px 0 0 0; padding: 0; background-color: #fff; border-bottom: 2px solid #f6f6f6; font-size: 12px; box-shadow: 0 3px 8px 2px rgba(1, 1, 1, .25); } #mk_search li { border-bottom: 1px dashed #f4f4f4;line-height: 30px; height: 30px; color: #666; overflow: hidden; cursor: pointer; padding: 0 15px; } #mk_search li:hover { color: #666; background-color: #ececec; }';
            $("head").append("<style>"+css+"</style>");
            load_one = true;
            return true;
        }
    }());

    // 数据绑定
    f.box = function (msg, options) {
        var that = $(this), box = $(as.box), str = '', arr = [];
        try { msg = eval('(' + msg + ')') } catch (e) { }
        if (msg.data) {
            box.css({"top": that.offset().top + 30, left: that.offset().left, width: this.clientWidth});
            if (msg.data.length !== 0) {
                f.each(msg.data, function (i, li) {
                    typeof li === "object" ?
                        (str += '<li>' + li[0] + '</li>') :
                        (str += '<li>' + li + '</li>');
                    arr.push(li);
                });
                box.html(str).show();
                box.find("li").each(function (index) {
                    $(this).on("click", function () {
                        that.val($(this).text());
                        typeof options !== "object" ?//id存在，且数据的长度大于1
                            (
                                $(options)[0] && (arr[index].length > 1) && $(options).val(arr[index][1])
                            ) : (
                            f.each(options, function (i, li) {
                                $(li)[0] && $(li).val(arr[index][++i])
                            })
                        );
                        box.hide();
                    })
                });
            } else {
                var help =$("<li style='color: #888'>没有匹配项...</li>");
                box.html(help).show();
                help.on("click",function(){box.fadeOut();that.val('')})
            }
        }
    };
    // 真实入口
    f.init = function (c,arr) {
        var _this = this, name = this.getAttribute("name"), data = {};
        data[name]=this.value;
        return $.ajax({
            type: c.type||"post",
            url: c.url,
            data: data,dataType:"json",
            success: function(msg){
                f.box.call(_this,msg,arr)
            },error:function(e){
                window.console&&console.log("搜索插件错误提示：",e);
            }
        });
    };

    // 参数名称和入口
    var search ;
    search = function(t,options,arr){
        options = options||{};
        arr = arr||{};
        f.init.call(t,options,arr);
    };
    search.v = "1.1";
    module.exports = search;
});


/*
 API:
 $("#in4").on("keyup",function(){
 search(this,{url: "json.json"},["#in44","#in444"])
 });
DATA:
 {
 "status": 0,
 "data": [
 ["aaaaaa",1,"- -"],
 ["bbbbbbbb",2,"T v T"],
 ["cccccc",3,"O.O"]
 ]
 }*/