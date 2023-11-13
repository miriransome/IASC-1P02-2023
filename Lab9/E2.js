var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var currentAge = prompt("What is your age?");
document.getElementById("age").innerHTML = currentYear - currentAge;
