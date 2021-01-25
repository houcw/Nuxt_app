const express = require('express');
var MongoClient = require('mongodb').MongoClient;
const goods = express.Router();
var url = "mongodb://localhost:27017/nuxt";
goods.get('/goodslist',(req,res)=>{
    //  连接数据库
    MongoClient.connect(url, (err, conn)=> {
        if (err) throw err;
        const user = conn.db("nuxt").collection("goods");
        user.find().toArray().then((arr) => {
            console.log(arr);
            res.send(arr);
        });
    });
    
})


module.exports = goods