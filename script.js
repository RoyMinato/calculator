function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    if (b === 0) {
        return "Can't divide by zero!";
    }

    return a / b;
}


function operate(a, operation, b) {
    a = Number(a);
    b = Number(b);

    switch (operation) {
        case "+":
            return add(a,b);
            break;
        case "-":
            return subtract(a,b);
            break;
        case "*":
            return multiply(a,b);
            break;
        case "/":
            return divide(a,b);
            break;
    }
}


const display = document.querySelector('.display');

const nums = document.querySelectorAll('.num');
const opers = document.querySelectorAll('.oper');

const del = document.querySelector('.del');
const clear = document.querySelector('.clear');

var currExpression;
var numPlaceholder = '';
var currOper;

nums.forEach (num => {
    num.addEventListener('click', function() {
        if (display.textContent === '0') {
            display.textContent = '';
            display.textContent += num.textContent;
            currExpression = display.textContent;
        } else {
            display.textContent += num.textContent;
            currExpression = display.textContent;
        }
        currOper.style.backgroundColor = '#b0e65f';
    })
});

opers.forEach (oper => {
    oper.addEventListener('click', function() {

    })
});

del.addEventListener('click', function() {
    display.textContent = expression.slice(0, -1);
    currExpression = display.textContent;
});

clear.addEventListener('click', function() {
    display.textContent = '0';
    currExpression = display.textContent;
    numPlaceholder = '';
});