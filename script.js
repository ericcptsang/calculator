function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1*num2;
}

function divide(num1, num2) {
    return num1/num2;
}

function calculate(num1, operator, num2) {
    let ans = '0';
    switch (operator) {
        case '+':
            ans = add(num1,num2);
            break;
        case '-':
            ans = subtract(num1,num2);
            break;
        case '*':
            ans = multiply(num1,num2);
            break;
        case '/':
            if (b === 0) {
                ans = 'srsly?'
                break;
            }
            ans = divide(num1,num2);
            break;
    }
    return ans;
}

function addDigit(digit, value) {
    if(value === '0' || (value === '0' && digit === '0')){
        return digit;
    } else if (value.length === 8) {
        return value;
    } else {
        return value + digit;
    }
}

function updateDisplay (value) {
    const displayNumber = document.querySelector('#display-number');
    displayNumber.textContent = value;
}

let displayValue = '0';
let oldValue = 0;
let newValue = 0;
let operator = '';
let isOperating = false;

//display digits
const zero = document.querySelector('#zero');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');

//add digits
zero.addEventListener('click', () => {
    displayValue = addDigit('0', displayValue);
    updateDisplay(displayValue);
});
one.addEventListener('click', () => {
    displayValue = addDigit('1', displayValue);
    updateDisplay(displayValue);
});
two.addEventListener('click', () => {
    displayValue = addDigit('2', displayValue);
    updateDisplay(displayValue);
});
three.addEventListener('click', () => {
    displayValue = addDigit('3', displayValue);
    updateDisplay(displayValue);
});
four.addEventListener('click', () => {
    displayValue = addDigit('4', displayValue);
    updateDisplay(displayValue);
});
five.addEventListener('click', () => {
    displayValue = addDigit('5', displayValue);
    updateDisplay(displayValue);
});
six.addEventListener('click', () => {
    displayValue = addDigit('6', displayValue);
    updateDisplay(displayValue);
});
seven.addEventListener('click', () => {
    displayValue = addDigit('7', displayValue);
    updateDisplay(displayValue);
});
eight.addEventListener('click', () => {
    displayValue = addDigit('8', displayValue);
    updateDisplay(displayValue);
});
nine.addEventListener('click', () => {
    displayValue = addDigit('9', displayValue);
    updateDisplay(displayValue);
});

//clear value
const clearBtn = document.querySelector('#clearBtn');
clearBtn.addEventListener('click', () => {
    let displayValue = '0';
    let oldValue = 0;
    let newValue = 0;
    let operator = '';
    let isOperating = false;
    updateDisplay(displayValue);
});

//negative value
const negativeBtn = document.querySelector('#negativeBtn');
negativeBtn.addEventListener('click', () => {
    if(displayValue === '0') {
        return;
    } else if (displayValue.charAt(0) === '-') {
        displayValue = displayValue.slice(1);
    } else {
        displayValue = '-' + displayValue;
    };
    updateDisplay(displayValue);
});

//floating value
const float = document.querySelector('#float');
float.addEventListener('click', () => {
    if(!displayValue.includes('.')) {
        displayValue += '.';
        updateDisplay(displayValue);
    }
});

//operators
const checkOperation = (doingOperation) => {
    if(doingOperation) {
        newValue = parseFloat(displayValue);
        oldValue = calculate(oldValue, operator, newValue);
    } else {
        oldValue = parseFloat(displayValue);
    }
}

const startOperation = (operation) => {
    checkOperation(isOperating);
    operator = operation;
    isOperating = true;

    displayValue = '0';
    updateDisplay(displayValue);
}


const addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', () => {
    startOperation('+');
});

const sbtBtn = document.querySelector('#sbtBtn');
sbtBtn.addEventListener('click', () => {
    startOperation('-');
});

const mulBtn = document.querySelector('#mulBtn');
mulBtn.addEventListener('click', () => {
    startOperation('*');
});

const divBtn = document.querySelector('#divBtn');
divBtn.addEventListener('click', () => {
    startOperation('/');
});

const equalBtn = document.querySelector('#equalBtn');
equalBtn.addEventListener('click', () => {
    newValue = parseFloat(displayValue);
    displayValue = calculate(oldValue, operator, newValue);
    displayValue = displayValue.toString().length > 8 ? displayValue.toFixed(8) : displayValue;
    updateDisplay(displayValue);

    oldValue = 0;
    newValue = 0;
    isOperating = false;
});


//backspace
const backBtn = document.querySelector('#backBtn');
backBtn.addEventListener('click', () => {
    if (displayValue.toString().length === 1) {
        displayValue = '0';
        updateDisplay(displayValue);
    }
    if (displayValue.length > 1) {
        displayValue = displayValue.slice(0, displayValue.length - 1);
        updateDisplay(displayValue);
    }
});
