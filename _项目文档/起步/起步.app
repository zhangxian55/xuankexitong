var MongoClient = require('mongodb').MongoClient;

//选择数据库
var url = 'mongodb://localhost:27017/xuankexitong';

//链接数据库
MongoClient.connect(url, function(err, db) {
	if(err){
		console.log("链接数据库失败");
		return;
	}

	console.log("链接数据库成功");

	db.collection("courses").updateMany({},{$set : {"xuesheng" : []}},function(err){
		console.log("更改成功");
	});

});