var express = require('express');
var router = express.Router();
var db = require('../models/db');
var fn = require('../models/fn');
var getCookie = function (a) {
    return a.cookies.USER_CONFIG?JSON.parse(a.cookies.USER_CONFIG):{};
};
/**用户中心 */
router.get('/', function (req, res, next) {
    var USER_CONFIG = getCookie(req);
    USER_CONFIG.uid?
        function () {
            db.query('SELECT `email`,`name`,`create_date`,`photo`,`user_type` FROM `db_user` WHERE `uid` = ?', [USER_CONFIG.uid], function (err, data) {
                err ? res.send("数据库连接出错") : function () {
                        data.length ?
                            function () {
                                data[0].create_date = fn.date.format(new Date(data[0].create_date));
                                res.render('user/user', {title: '用户中心', db:data[0]});
                            }()
                            : res.send("没有当前用户")
                    }();
            });
        }()
        :res.redirect('/user/login')
});
/**用户注册 */
router.get('/reg', function (req, res, next) {
    var USER_CONFIG = getCookie(req);
    console.log(USER_CONFIG);
    USER_CONFIG.uid?res.redirect('/user'):res.render('user/reg', {title: '用户注册'})
});
router.post('/reg', function (req, res, next) {
    var email = req.body.email,
        pass = req.body.pass,
        name = req.body.name,
        create_date = +new Date();
    db.query('SELECT `email` FROM `db_user` WHERE `email` = ?', [email], function (err, data) {
        err ? res.json({status: 0, msg: '数据库连接出错'}) : function () {
                data.length ? res.json({
                        status: 0,
                        msg: '邮箱已存在'
                    }) : db.query('INSERT INTO `db_user` (`email`, `pass`, `name`,`create_date`) VALUES (?,?,?,?)', [email, pass, name, create_date], function (err, data) {
                        err ? res.json({status: 0, msg: '数据库连接出错'}) : function () {
                                res.cookie('USER_CONFIG',JSON.stringify( {
                                    uid: data.insertId,
                                    email: email,
                                    name: name
                                }), {expires: new Date(Date.now() + 7 * 24 * 36e5)});
                                res.json({status: 1})
                            }();
                    });
            }();
    });
});
/**用户登陆 */
router.get('/login', function (req, res, next) {
    var USER_CONFIG = getCookie(req);
    USER_CONFIG.uid?res.redirect('/user'):res.render('user/login', {title: '用户登陆'})
});
router.post('/login', function (req, res, next) {
    var email = req.body.email,
        pass = req.body.pass;
    db.query('SELECT * FROM `db_user` WHERE `email` = ? AND `pass` = ?', [email, pass], function (err, data) {
        err ? res.json({status: 0, msg: '数据库连接出错'}) : function () {
                data.length ?
                    (res.cookie('USER_CONFIG', JSON.stringify({
                        uid: data[0].uid,
                        email: email,
                        name: data[0].name
                    }), {expires: new Date(Date.now() + 7 * 24 * 36e5)}), res.json({status: 1}))
                    : res.json({status: 0, msg: "邮箱或者密码错误"})
            }()
    })
});
/**设置接口 */
router.post('/setPhoto', function (req, res, next) {
    var USER_CONFIG = getCookie(req),url = req.body.url;
    if(USER_CONFIG.uid && url){
    db.query('UPDATE `db_user` SET `photo`= ? WHERE (`uid`=?)', [url,USER_CONFIG.uid], function (err, data) {
        err ? res.json({status: 0, msg: '数据库连接出错'}) :  res.json({status: 1, msg: '头像更新成功'})
    })}else {
        res.json({status: 0, msg: '上传的图片路径出错了'})
    }
});
module.exports = router;
