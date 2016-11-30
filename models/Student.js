var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//定义Student的schema
var studentSchema = new Schema({
    "xuehao" : Number,
    "xingming" : String,
    "xuanke" : [Number],
    "xingbie" : String,
    "nianji" : Number,
    "mima" : String
});

//生成模型
var Student = mongoose.model("students",studentSchema);
//向外暴露
module.exports = Student;