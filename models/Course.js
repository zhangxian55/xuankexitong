var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//定义Course的schema
var courseSchema = new Schema({
    "bianhao" : Number,
    "jianjie" : String,
    "jiaoshi" : String,
    "mingcheng" : String,
    "renshu" : Number,
    "riqi" : Number,
    "xianzhi" : [Number],
    "xuesheng" : [Number]
});

//生成模型
var Course = mongoose.model("courses",courseSchema);
//向外暴露
module.exports = Course;