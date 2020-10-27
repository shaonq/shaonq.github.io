!function () {
    //tree
    $(".tree").find("li").on("click",function () {
        $(this).addClass("this").siblings().removeClass("this");
    });
    //窗口scroll
    !function(){
        var main = $('.layout-main');
        var scroll = function(){
            var stop = $(window).scrollTop();
            if(stop > 61){
                if(!main.hasClass('layout-fix')){
                    main.addClass('layout-fix');
                }
            } else {
                if(main.hasClass('layout-fix')){
                    main.removeClass('layout-fix');
                }
            }
            stop = null;
            return arguments.callee;
        }();
        $(window).on('scroll', scroll);
    }();
}();
