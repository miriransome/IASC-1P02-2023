function add(){
  var numberone = document.getElementById("num1");
  var numbertwo = document.getElementById("num2");
  var total = Number(numberone.value) + Number(numbertwo.value);
  document.getElementById("output").innerHTML = total;
}
