var result_1;
//加法
function add() {
  var a = getFirstNumber();
  var b = getTwiceNumber();
  var re = Number(a) + Number(b);//Number的作用是使1+0=1，而不是1+0=10；
  sendResult(re);
}

//减法
function subtract() {
  var a = getFirstNumber();
  var b = getTwiceNumber();
  var re = a - b;
  sendResult(re);
}

//乘法
function ride() {
  var a = getFirstNumber();
  var b = getTwiceNumber();
  var re = a * b;
  sendResult(re);
}

//除法
function devide() {
  var a = getFirstNumber();
  var b = getTwiceNumber();
  var re = a / b;
  sendResult(re);
}

//给p标签传值
function sendResult(result_1) {
  var num = document.getElementById("result4")
  num.innerHTML = result_1;
}

//获取第一位数字
function getFirstNumber() {
  var firstNumber = document.getElementById("first").value;
  if (firstNumber==""||isNaN(firstNumber)) 
  {
  	alert("您输入的不是数字，请输入数字！！！")
  }
  return firstNumber;
}

//获取第二位数字
function getTwiceNumber() {
  var secondNumber = document.getElementById("second").value;
  if (secondNumber==""||isNaN(secondNumber)) 
  {
  	alert("您输入的不是数字，请输入数字！！！")
  }
  return secondNumber;
}