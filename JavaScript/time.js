/**
 * 完成课时
 * @example finishLesson(1);
 * @param {Number} lesson 课程
 */
function finishLesson(lesson) {
	alert("恭喜，你已经完成HBuilder入门课程。你可以用其它开发工具试试写这几十行代码，\
	至少比HBuilder慢5倍！更重要的是，你很难找到这么爽的编码体验。");
}
/*
//没有格式化的时间(这里用的是getYear的函数)
var now=new Date()
	document.write(1900+now.getYear()+"-"+(now.getMonth()+1)+"-"+now.getDate()+" "
	+now.getHours()+":"+now.getMinutes()+":"+now.getSeconds()+"<br />")

//没有格式化的时间(这里用的是getFullYear的函数)
var now=new Date()
   document.write(now.getFullYear()+"-"+(now.getMonth()+1)+"-"+now.getDate()
   +" "+now.getHours()+":"+now.getMinutes()+":"+now.getSeconds()+"<br />")

//第一种格式化:（方法比较难理解）
Date.prototype.format = function(format){ 
var o = { 
"M+" : this.getMonth()+1, //month 
"d+" : this.getDate(), //day 
"h+" : this.getHours(), //hour 
"m+" : this.getMinutes(), //minute 
"s+" : this.getSeconds(), //second 
"q+" : Math.floor((this.getMonth()+3)/3), //quarter 
"S" : this.getMilliseconds() //millisecond 
} 
if(/(y+)/.test(format)) { 
format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
} 

for(var k in o) { 
if(new RegExp("("+ k +")").test(format)) { 
format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length)); 
} 
} 
return format; 
} 
var now = new Date();
var nowstr = now.format("yyyy-MM-dd hh:mm:ss");
document.write(nowstr+"<br />")
*/
//第二种格式化：（方法逻辑简单易懂）
/*
function currentTime() {
	var now = new Date()
	var year = now.getFullYear()
	var month = "" + (now.getMonth() + 1)
	var day = "" + now.getDate()
	var hour = "" + now.getHours()
	var minute = "" + now.getMinutes()
	var second = "" + now.getSeconds()
	if(month.length < 2) month = "0" + month;
	if(day.length < 2) day = "0" + day;
	if(hour.length < 2) hour = "0" + hour;
	if(minute.length < 2) minute = "0" + minute;
	if(second.length < 2) second = "0" + second;
	return [year + "年" + month + "月" + day + "日"] + " " + [hour, minute, second].join(":");
}
document.write(currentTime() + "<br />")
*/
//第三种方式（动态展示时间）：
var t = null;
t = setTimeout(time, 1000); //开始执行
function time() {
	clearTimeout(t); //清除定时器
	dt = new Date();
	var year = dt.getFullYear();
	var month = "" + (dt.getMonth() + 1);
	var day = "" + dt.getDate();
	var hour = "" + dt.getHours();
	var minute = "" + dt.getMinutes();
	var second = "" + dt.getSeconds();
	if(month.length < 2) month = "0" + month;
	if(day.length < 2) day = "0" + day;
	if(hour.length < 2) hour = "0" + hour;
	if(minute.length < 2) minute = "0" + minute;
	if(second.length < 2) second = "0" + second;
	document.getElementById("timeShow").innerHTML = +year + "年" + month + "月" + day + "日" +
		" " + hour + ":" + minute + ":" + second + "";
	t = setTimeout(time,1000); //设定定时器，循环执行             
}