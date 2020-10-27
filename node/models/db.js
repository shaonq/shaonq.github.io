/**
 * 数据库模块
 */
var CONFIG = require("./CONFIG");

var options = {
    'host': CONFIG.DB.HOST,
    'port': CONFIG.DB.PORT,
    'user':  CONFIG.DB.USER,
    'database': CONFIG.DB.TABLE,
    'password': CONFIG.DB.PASS,
    'charset': CONFIG.DB.CHARSET,
    'supportBigNumbers': true,
    'bigNumberStrings': true
};

var mysql = require('mysql');
var pool = mysql.createPool(options);

/**
 * 释放数据库连接
 */
exports.release = function(connection) {
    connection.end(function(error) {
        console.log('Connection closed');
    });
};
/**
 * 执行查询
 */
exports.query = function(sql,args,callback) {
    pool.getConnection(function(error, connection) {
        if(error) {
            console.log('DB-获取数据库连接异常！');
            throw error;
        }
        // 查询参数
        var query;
        // 执行查询
        if(typeof args === "function") {
            callback = args;
            query = connection.query(sql, function(err, results) {
                callback&&callback(err,results);
            });
            console.log(query.sql);
        } else {
            query = connection.query(sql, args, function(err, results) {

                // 处理结果
                callback&&callback(err,results);
            });
            console.log(query.sql);
        }
        // 返回连接池
        connection.release(function(error) {
            if(error) {
                console.log('DB-关闭数据库连接异常！');
                throw error;
            }
        });
    });
};