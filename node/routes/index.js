var express = require('express');
var fs = require("fs");
var router = express.Router();
var db = require('../models/db');
/*upload*/
var multipart = require('connect-multiparty');
router.use(multipart({ uploadDir: './public/uploads/' }));//跨磁盘
var multipartMiddleware = multipart();

/* models */
router.get('/', function(req, res, next) {
    res.render('index', { title: '用户中心',db:{} })
});
router.all("/upload",multipartMiddleware,function (req, res) {
    if(req.files&&req.files.file){
        var data ={};
        data.status =0 ;
        var d =req.files.file;
        var file = "./public",newPath = "/uploads/"+(new Date()/1)+d.name;
        try{
            fs.renameSync(d.path, file+newPath);
            data.status = 1;
            data.url = '/'+newPath;
        }catch(e){
            data.msg = "文件移动失败";
        }
        res.json(data);
    }else {
        res.render('error',{error:404});
    }
});

module.exports = router;