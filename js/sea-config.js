seajs.config({
    paths: {
        'cdn': 'https://cdn.bootcss.com/',
        'js':( location.hostname === "localhost"?"":" ")+'//shaonq.github.io/js/'
    },
    alias: {
        'jquery': 'base/jquery.min.js',
        'nui': 'base/nui/0.2.0/nui.js',
        'global': 'mod/global.js'
    }
}).use("global");