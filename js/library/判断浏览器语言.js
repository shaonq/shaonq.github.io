!(function () {
    var url="",msg="";
    var lang =  (navigator.language ||navigator.userLanguage|| navigator.browserLanguage).toLowerCase();
    //取得浏览器语言的前两个字母
    lang = lang.substr(0,2);
    // 跳转
    switch (lang){
        case "zh":
            url="http://www.royalahrend.com.cn";
            msg ="检测到您当前所属中文语言环境，需要跳转都中文首页吗?";
            break;
        default :
            url="http://en.royalahrend.com.cn";
            msg ="Detected your current English language environment, need to jump all English home page?";
            break;
    }
    var start = url.indexOf(location.hostname) === -1 && window.confirm(msg) ;
    start && location.replace(url);
}(window));