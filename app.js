/**
 * Created by Danny on 2016/10/24 17:14.
 */
var express = require("express");
var mongoose = require('mongoose');
var router = require("./router/router.js");
//链接数据库
mongoose.connect('mongodb://localhost/xuankexitong');
//创建app
var app = express();
//设置模板引擎
app.set("view engine","ejs");
//路由清单
app.get("/setpw",router.setpw); //设置初始密码
//监听
app.listen(3000);