var display = document.querySelector(".output");
var value = "";

document.querySelector("#Numbtn1").addEventListener("click",function(){
  value += "1";
  display.innerHTML = value;
});
document.querySelector("#Numbtn2").addEventListener("click",function(){
  value += "2";
  display.innerHTML = value;
});
document.querySelector("#Numbtn3").addEventListener("click",function(){
  value += "3";
  display.innerHTML = value;
});
document.querySelector("#Numbtn4").addEventListener("click",function(){
  value += "4";
  display.innerHTML = value;
});
document.querySelector("#Numbtn5").addEventListener("click",function(){
  value += "5";
  display.innerHTML = value;
});
document.querySelector("#Numbtn6").addEventListener("click",function(){
  value += "6";
  display.innerHTML = value;
});
document.querySelector("#Numbtn7").addEventListener("click",function(){
  value += "7";
  display.innerHTML = value;
});
document.querySelector("#Numbtn8").addEventListener("click",function(){
  value += "8";
  display.innerHTML = value;
});
document.querySelector("#Numbtn9").addEventListener("click",function(){
  value += "9";
  display.innerHTML = value;
});
document.querySelector("#plus-btn").addEventListener("click",function(){
  value += "+";
  display.innerHTML = value;
});
document.querySelector("#equal-btn").addEventListener("click",function(){
  var num = Math.round(eval(value)*10000000)/10000000;
  value = num.toString();
  display.innerHTML = value;
});
document.querySelector("#Numbtn0").addEventListener("click",function(){
  value += "0";
  display.innerHTML = value;
});
document.querySelector("#minus-btn").addEventListener("click",function(){
  value += "-";
  display.innerHTML = value;
});
document.querySelector("#decimal-btn").addEventListener("click",function(){
  value += ".";
  display.innerHTML = value;
});
document.querySelector("#multiply-btn").addEventListener("click",function(){
  value += "*";
  display.innerHTML = value;
});
document.querySelector("#divide-btn").addEventListener("click",function(){
  value += "/";
  display.innerHTML = value;
});
document.querySelector("#delete-btn").addEventListener("click",function(){
  if(value.length === 1){
    value = "";
    display.innerHTML = "";
  }else{
    var arr = value.split("");
    var popped =arr.pop();
    value = arr.join("");
    display.innerHTML = value;
  }

});
