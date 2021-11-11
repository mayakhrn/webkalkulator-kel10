let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

const inputNumber = (number) => {
    if(currentNumber === '0') {
        currentNumber = number;
    }else{
        currentNumber += number
    }
}

const calculatorScreen = document.querySelector(".calculator-screen");
const updateScreen = (number) => {
    calculatorScreen.value = number;
}

const numbers = document.querySelectorAll(".numbers");

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    });
});

const operators = document.querySelectorAll(".operator");

const inputOperator = (operator) => {
    if(calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator;
    currentNumber = '';
}

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
        updateScreen(calculationOperator);
    });
});

const calculate = () => {
    let result = '';
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case "×":
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case "÷":
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        default:
            break;      
    }
    currentNumber = result;
    calculationOperator = '';
}

const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(currentNumber);
})

const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = ''
}

const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener('click', () => {
    clearAll();
    updateScreen(currentNumber);
})

const inputDecimal = (dot) => {
    if(currentNumber.includes(".")){
        return
    }
    currentNumber += dot;
}

const decimals = document.querySelector(".decimal");

decimals.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
})

const plusMinus = document.querySelector(".plus-minus");

const inputplusMinus = (plusMinus) => {
    if(currentNumber.includes("-")) {
        prevNumber = currentNumber.replace('-', '');
        currentNumber = prevNumber;
    } else {
        prevNumber = currentNumber;
        currentNumber = "-" + prevNumber;
    }
}

plusMinus.addEventListener('click', (event) => {
    inputplusMinus(event.target.value);
    updateScreen(currentNumber);
})

const deletes = document.querySelector(".delete");

const inputdelete = (deletes) => {
   prevNumber = currentNumber;
   currentNumber = currentNumber.slice(0, -1); 
}

deletes.addEventListener('click', (event) => {
    inputdelete(event.target.value);
    updateScreen(currentNumber);
})

const percentages = document.querySelector(".percentage");

const inputpercent = (percentages) => {
   prevNumber = currentNumber;
   currentNumber = parseFloat(prevNumber) / 100; 
}

percentages.addEventListener('click', (event) => {
    inputpercent(event.target.value);
    updateScreen(currentNumber);
})
