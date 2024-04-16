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

const operate = function(num1, operator, num2){
    return operator(num1, num2);
}

let a = 3;
let b = 1;
console.log(operate(a, add, b));
console.log(subtract(6,3));
console.log(multiply(1,3));
console.log(divide(9,3));