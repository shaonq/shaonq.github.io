;!function () {
    var pre =$("pre");
    pre.length && nui.loadJs('//cdn.bootcss.com/prettify/r298/prettify.min.js', function () {   //代码高亮 是多大
        pre.each(function () {
            if (this.className.indexOf("js-pre") !== -1) {
                try {
                    new Function(this.innerHTML)();
                } catch (e) {
                    nui.log(e.message,"error")
                }
            }
        });
        pre.addClass("prettyprint linenums") && prettyPrint();


        $('.js-source').on("click", function () {
            var box = $(this).parents('.nui-box');
            var hd = box.find('.nui-box-hd');
            var bd = box.find('.nui-box-bd').clone();

            bd.find('pre').html('...').removeAttr('class').removeAttr('style');
            nui.open({
                content: '<pre class="prettyprint linenums">' + nui.util.escape(bd.html()) + '</pre>',
                title: hd.text(),
                full: true,
                width: ['60%', '60%'],
                success: function (that, index) {
                    prettyPrint();
                }
            })
        })
    });
    var loadChatModel = 'models/chat.js';
    nui.config.debug=true;
    nui.loadJs(nui.get.path+loadChatModel,function () {
        nui[loadChatModel]($(".g-head__form"))
    })
}();