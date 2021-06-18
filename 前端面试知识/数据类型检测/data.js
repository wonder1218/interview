/*
(一).数据类型检测：
1,typeof:
	(1),直接在计算机（底层）基于数据类型的值（二进制）进行检测
	(2),typeof null “object”  对象存储在计算机中，都是以000开始的二进制	存储，null也是，所以检测出来的结果是对象。
	(3),typeof 普通对象/数组对象/正则对象/日期对象都是“object”(缺点)不能细分对象和NaN
	console.log(arr.typeof.Array);//true
	console.log(arr.typeof.RegExp);//false
	console.log(arr.typeof.Object);//true
2,instanceof: 检测当前实例是否属于这个类，
	(1),底层机制：只要当前类出现在实例的原型链上，结果都是true；
	(2),由于可以任意的修改原型的指向，所以检测出来的结果是不准确的；（缺点）
	(3),不能检测基本数据类型;
	example:function instance_of(example,classFunc){
		let classFunprototype=classFunc.prototype,
			proto=Object.getPrototypeof(example);
		while(true){
			if(proto===null){
				//Object.prototype.__proto__=>null;
				return false;
			}
			if(proto===classFunprototype){
				//查找过程中存在时:则证明实例是这个类的一个实例;
				return true;
			}
			proto=Object.getPrototype(proto);
		}
	}
	
	//实例.__proto===类.prototype
	let arr=[];
	console.log(instaceof_of(arr,Array));//true
	console.log(instaceof_of(arr,RegExp));//false
	console.log(instaceof_of(arr,Object));//true
3，constructor;
	(1),用起来看似比instanceof还好用一点；
	(2),constructor可以随便改，所以也不准确;
	example:
	let arr=[];
	console.log(arr.constructor.Array);//false
	console.log(arr.constructor.RegExp);//false
	console.log(arr.constructor.Object);//false
	Number.prototype.constructor='AA';//false
	console.log(n.constructor===Number);//true
4,Object.prototype.toString.call([value]);
	(1),标准检测数据类型的方法：Object.prototype.toString不是转换为字符串，是返回当前的实例所属类的信息
	(2),标准检测方法：[object Number/String/Boolen/Null/Undefined/Symbol/Object/Array/RegExp/Date/Function]
	example:
	let obj={
		name:'你好'
	};
	obj.toString();=>"[object object]"
	toString方法执行，this是obj，所以检测的是obj它的所属类信息；
	
*/



//解析jQuery代码：
//检测数据类型代码：
(function() {
    //(1),
    var class2type = {};
    var toString = class2type.toString; //=>Object.prototype.toString.call();
    //(2),
    jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
        function(i, name) {
            class2type["[object " + name + "]"] = name.toLowerCase();
        });
    // console.log(class2type);
    //设定数据类型的映射表
    //split()拆解=>["Boolean", "Number" ,"String", "Function", "Array", "Date", "RegExp" ,"Object" ,"Error" ,"Symbol"].forEach(name=>{
    //class2type[`[object ${name}]`]=name.toLowerCase();
    //});
    //(3)
    function toType(obj) {
        if (obj == null) {
            //传递的值是null或者是undefined，就直接返回对应的字符串
            return obj + "";
        }
        //基本数据类型都用typeof检测
        return typeof obj === "object" || typeof obj === "function" ?
            class2type[toString.call(obj)] || "object" :
            typeof obj;
    }
    window.toType = toType;
})();