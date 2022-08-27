function add(a,b) {
    let result = a + b;

    if (result - Math.floor(result) !== 0) {
        return Math.round(result * 100) / 100 ;
    } else {
        return result;
    }
}

function subtract(a,b) {
    let result = a - b;

    if (result - Math.floor(result) !== 0) {
        return Math.round(result * 100) / 100 ;
    } else {
        return result;
    }
}

function multiply(a,b) {
    let result = a * b;

    if (result - Math.floor(result) !== 0) {
        return Math.round(result * 100) / 100 ;
    } else {
        return result;
    }
}

function divide(a,b) {
    if (b === 0) {
        return "Oh no!";
    }
    //make it so it rounds to 2 decimal places
    let result = a / b;

    if (result - Math.floor(result) !== 0) {
        return Math.round(result * 100) / 100 ;
    } else {
        return result;
    }
}


function operate(a, operation, b) {
    a = Number(a);
    b = Number(b);

    switch (operation) {
        case "+":
            return add(a,b).toString();
            break;
        case "-":
            return subtract(a,b).toString();
            break;
        case "*":
            return multiply(a,b).toString();
            break;
        case "/":
            return divide(a,b).toString();
            break;
    }
}


const display = document.querySelector('.display');

const nums = document.querySelectorAll('.num');
const opers = document.querySelectorAll('.oper');

const del = document.querySelector('.del');
const clear = document.querySelector('.clear');
const equals = document.querySelector('.equal');

var currExpression = '';
var numPlaceholder = '';
var currOper = '';
var pressedEqual = false;
var checkOperator = false;

nums.forEach (num => {
    num.addEventListener('click', function() {
        if (pressedEqual) {
            for(let i = 0; i < opers.length; i++) {
                if (opers[i].style.backgroundColor === '#7c9951') {
                    checkOperator = true;
                }       
            }
            
            if (!checkOperator) {
                currExpression = '';
                numPlaceholder = '';
            }
            pressedEqual = false;
            checkOperator = false;
        }

        opers.forEach (oper => oper.style.backgroundColor = '#b0e65f');

        if (currExpression === '') {
            display.textContent = '';
        }
        display.textContent += num.textContent;
        currExpression = display.textContent;
    })
});


opers.forEach (oper => {
    oper.addEventListener('click', function() {

        oper.style.backgroundColor = '#7c9951';

        if (numPlaceholder != '') {
            if (currExpression != '') {
                numPlaceholder = operate(numPlaceholder, currOper, currExpression);
                display.textContent = numPlaceholder;
            }
        } else {
            numPlaceholder = currExpression;
        }

        currExpression = '';
        currOper = oper.textContent;
        pressedEqual = false;
    })
});


equals.addEventListener('click', function() {
    numPlaceholder = operate(numPlaceholder, currOper, currExpression);
    display.textContent = numPlaceholder;

    currExpression = '';
    pressedEqual = true;
});


del.addEventListener('click', function() {
    display.textContent = currExpression.slice(0, -1);
    currExpression = display.textContent;
});

clear.addEventListener('click', function() {
    opers.forEach (oper => oper.style.backgroundColor = '#b0e65f');
    display.textContent = '';
    currExpression = display.textContent;
    numPlaceholder = '';
    pressedEqual = false;
});