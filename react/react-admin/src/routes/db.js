// 1. 安装并且导入 mongoose模块  npm install mongoose --save
let mongoose = require('mongoose');

// 2. 连接mongodb 数据库
mongoose.connect('mongodb://localhost:27017/react',{useNewUrlParser:true},function(err){
	if(err){
		console.log(err);
		return;
	}
	console.log('数据库连接成功,haha');
})
module.exports = mongoose;