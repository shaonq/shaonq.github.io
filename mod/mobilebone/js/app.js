(function () {
    var J_loading = $("#J_loading");
    Mobilebone.onpagefirstinto = function(t) {
        var page =$(t);

        /** slick */

        var J_slick = page.find("#J_slick");
        J_slick.length && $.getScript("https://cdn.bootcss.com/slick-carousel/1.6.0/slick.min.js", function () {
            J_slick.slick({ arrows: false,dots:true});
        });

        /** iScroll */

        var J_iScroll =page.find("#J_iScroll");
        J_iScroll.length&&$.getScript("https://cdn.bootcss.com/iScroll/5.2.0/iscroll-lite.min.js",function () {
            J_iScroll.each(function () {
                var Scroll = new IScroll( this,{/* tap: true*/ });
            });
        });

        /** J_loading */
        J_loading.length&&J_loading.each(function () {
            var t =this;
            $.getScript("https://cdn.bootcss.com/move.js/0.5.0/move.min.js",function () {
                    move(t).set('opacity', 0).delay('1s').end(function () {
                        J_loading.remove()

                });
            })

        })
    };
    Mobilebone.callback = function(t,out) {
       // if(out){ var page = $(out); }
        var footer =$(".footer"),nav = footer.find("a");
        nav.removeClass("this");
        nav.each(function () {
            if (this.getAttribute("href") == location.hash.replace("#&", "")) {
                this.classList.add("this");
            }
        });
    };
    
   /* $.getScript("https://cdn.bootcss.com/Vague.js/0.0.6/Vague.min.js",function () {
        var vague = $("body").Vague({intensity:1}); // css3 blur
        vague.blur();
    })*/
}());