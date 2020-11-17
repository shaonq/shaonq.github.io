define(function (require) {
    require.async(['jquery', 'base/TweenMax.min','nui','cdn/markdown-it/8.3.1/markdown-it.min'], function ($, M,nk) {
        var path = "file";
        var nav = document.getElementById('m'),warp = document.getElementById('b');
        nk.http(path+".json",function (d) {
            var tpl ="";
            var loop = function (d) {
                tpl+= '<a href="javascript:;" data-path="'+path+'/'+d+'">'+d+'</a>'
            };
            for (var i in d){ loop(d[i])}
            nav.innerHTML = tpl;
        },{type:'get'});
        var md = window.markdownit();
        $(document.body).on("click","[data-path]",function () {
            var path =this.getAttribute("data-path");
            path?nk.http(path,function (d) {
                var c = document.createElement('img');
                c.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEzklEQVRoQ9Va3VHbShQ+Z7cAnApiOrBYvV9cQaACSAdQwTUVxKkgUEFIBZj33RGpANJBGpBO5vOsfNeyLO3KInB3huHB0u737fk/R0z/88Vj4S+KYlqW5T/MPBWR07Z9mfmFiF6YeXVycvI4xtkHESiKYlZV1QURnRHRlIgAagWQSimA3ayyLCfMPBORKTOD4EcRudda32ZZ9mMomUEEiqI4LcvyXyLKiOgef3me43/0gsSqqgLxKyISEVnkeX4XvYF/MImAV5MvRDRn5qVSapll2e/UQ5vP40KqqlpAKkqpz1mWQYpRK5qAc+6SiAD+Tim1GAN4EyHOEJElM39XSl3HnBFFwDn3TUTOtdZnKbcTdYWNh4qimFRVdS8iR1rr8yzLtmypuWcvAYCHriulTmNuZAjotnecc0siulBKzbMse9q3byeBtwJfg63VtovEXgJvDT4gsRCRT1prSGLHYbQSqI1Jaz39m2qzT02stbdEdJTn+XmvDXj/XCilYEDR7mws3W/bxxs2sNwaY2Abm7UjAWvtd2b+ZYxBgHk3y8cKuNfjUCu2CPgIi/D+LlSneXtelSjPc8Sk9doiYK19YOZHYwyiYu+CaA+1Eahsn6+vgXj1fvZSWMeHDQEkZmVZrmJv3+vlMxFdG2NgZMnLJ4MPRHTT1O0ug2bm37WKbwggcIjIJBRPHyLvpxHoPqeSCMD/SgmS3ha+GWOOtyTgnHsWkevUrHIIiaHgg9iAdP0SXnItgVq3jDG9qUWbVFJIHAoe58OYURzBVteAPYBLY0xrJdWnSsEeneo0Bvgm3prA2uvEep99hLokMRZ4rzGoBB+MMR9qAnWUG+RNQkJtJMYEH9iBKKX+I+CLlFFSh5CEUuoJt0VESd6mT22dcyAw30hgTAINm0AGOSp4v//aE70agUBtJj7YbSVhfTfc97tzboVLfxUCoc4jg/S1dHKw6yKxo0IoplODWNsBbQabEif6br5hxMdrCYSBIXaDWPDBgcggB6UdzbPCwLuJA+iYpeRBLZuufXOXwY4lCZ8PLY0xszqVQGNpkyClSiHFz49BwjmHOnl94WE2Cr+KaqezDzPk5pvvHErCWlsw81dkwBsC1tp7dI1j8/IwpA/x80NJBEXNBxRTIYEzZv5S59l9alQX/0PANw0bXb9YD+jVZ5bnORrD2yWlc26TZ/cR8NHwSimF9vjgBq+19kxrvYrdA3VL2ADeyv99P+giz/N5DIG//Uxb2r9TwEAKRLRILRFfm0xdgzf7VTsE9vVfXhtg3/7oV0Hla92vn28tIX3/5eN7UaWuVmcrgaCVB7f6ph26Okjua3XuLeL9OOmJma/eyh6CCL+399TZhaibXT4+3PTp6Zi/x4DfiQMdGSYmkA+xc6tDiQTzuN6uX1QfqDG3wvBtlNq5Ja+alGWJlHseO4+LIhCE/ivMc/0U8SY18euSjLX2AqNbEXnUWqPrFhXdkwj4BA63hFEoJvS3Sqm7oRLx+RT2QbGDwh/j2yTpJhOob9EfDheLpErwiYGIoLv9c99UEe+ICD4xOBURJI/49OCH1hoD8yTgnYEs1Qh99EZbEsBmzHzk93gREXzcEbYsf4oI3DO6CvexqrIP02AJdJGE0RPRrPHMy5g2U+/9B7J4fxyCEsJqAAAAAElFTkSuQmCC';
                c.width=32;
                c.setAttribute('style','position: fixed; right: 20px; top: 20px;cursor: pointer;');
                c.setAttribute('onclick','parentNode.style.display="none"');
                warp.innerHTML = md.render(d);
                warp.appendChild(c);
                warp.style.display='block';
            },{type:'get',dataType:'html'}):nk.alert("error")
        });
    });
});