const express = require('express');
const admin = express.Router();
var MongoClient = require('mongodb').MongoClient;
// 设置对应的连接地址
// 如果你没有test数据库，连接的时候会自动给创建的名为test的数据库
var url = "mongodb://localhost:27017/nuxt";

// 登录接口
admin.get('/login', (req, res) => {
    //  连接数据库
    MongoClient.connect(url, (err, conn)=> {
        if (err) throw err;
        const user = conn.db("nuxt").collection("user");
        user.find().toArray().then((arr) => {
            console.log(arr);
        });
    });
    // req.query.userName 获取前端传递的query参数
    // req.body.参数名称   获取前端传递的body参数
    res.send({
        state: 'success',
        data: req.query.userName
    });
})
// 获取系统用户接口
admin.get('/list', (req, res) => {
    res.send('admin用户列表页');
})

module.exports = admin;



