var Student = require("../models/Student.js");
var _ = require("underscore");
var crypto = require("crypto");

//设置初始密码
exports.setpw = function(req,res){
    //要去给所有的学生设置一个初始密码，并且把初始密码显示在屏幕上，供老师们打印。并且把初始密码加密之后存储到数据库中。
    //密码可以用的字符
    var chars = ["A","B","C","D","E","F","G","H","J","L","M","N","P","Q","R","S","T","U","V","W","X","Y","Z",0,1,2,3,4,5,6,7,8,9];


    Student.find({},function(err,students){
        //console.log(results);
        var count = 0;

        _.each(students,function(student){
            //生成一个随机密码：
            var mima = _.sample(chars, 6).join("");
            //数据库中，不能直接存放明文密码，必须加密存储
            //创建加密哈希
            var hash = crypto.createHash("sha256");
            student.mima = hash.update(mima).digest("hex");
            student.yuanwenmima = mima;
            //要持久
            student.save(function(){
                count++;
                if (count == students.length) {
                    //所有人都有密码了，呈递模板
                    res.render("pw", {
                        "students": students
                    });
                    return;
                }
            });
        });
    });
}