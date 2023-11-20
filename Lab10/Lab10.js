function add(){
  var n1 = document.getElementById("Num1");
  var n2 = document.getElementById("Num2");
  var add = Number(n1.value) + Number(n2.value);
  document.getElementById("result").innerHTML = add;
}

function subtract(){
  var n1 = document.getElementById("Num1");
  var n2 = document.getElementById("Num2");
  var subtract = Number(n1.value) - Number(n2.value);
  document.getElementById("result").innerHTML = subtract;
}

function multiply(){
  var n1 = document.getElementById("Num1");
  var n2 = document.getElementById("Num2");
  var multiply = Number(n1.value) * Number(n2.value);
  document.getElementById("result").innerHTML = multiply;
}

function divide(){
  var n1 = document.getElementById("Num1");
  var n2 = document.getElementById("Num2");
  var divide = Number(n1.value) / Number(n2.value);
  document.getElementById("result").innerHTML = divide;
}
