let number1 = 1;
let number2 = 2;

const add = function(num1, num2) {
    return num1 + num2;
}

const subtract = function(num1, num2) {
    return num1 - num2;
}

const multiply = function(num1, num2) {
    return num1*num2;
}

const divide = function(num1, num2) {
    return num1/num2;
}

const operate = function(num1, operator, num2) {
    return operator(num1, num2);
}

const addBtn = document.querySelector("addBtn");
addBtn.addEventListener("click", add);

const sbtBtn = document.querySelector("sbtBtn");
sbtBtn.addEventListener("click", subtract);

const mulBtn = document.querySelector("mulBtn");
mulBtn.addEventListener("click", multiply);

const divBtn = document.querySelector("divBtn");
divBtn.addEventListener("click", divide);

const equalBtn = document.querySelector("equalBtn");
equalBtn.addEventListener("click", () => {
    
});


console.log(number1);
