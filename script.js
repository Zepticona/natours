'use strict';

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');
const output = document.querySelector('.display input');

output.value = 0;

const data = {
    num1: '',
    num2: '',
    operator: '',
    result: ''
}
const handleClickOnNumber = function(e) {
    // Clearing existing calculations before begning new one
    if(data.result) {
        clear();
    }

    // if num1 and an operator exists
    if(data.num1 && data.operator) {
        // read num2
        const secondNumber = e.target.innerText;
        data.num2 = data.num2 + secondNumber;
        output.value = data.num1 + data.operator + data.num2;
    }// if num2 and an operator does not exist
     else {
         // read num1
        const firstNumber = e.target.innerText;
        data.num1 = data.num1 + firstNumber;
        output.value = output.value = data.num1 + data.operator + data.num2;;
    }

}

const handleClickOnOperator = function(e) {
    if(data.result) {
        data.num1 = data.result;
        data.num2 = '';
        data.result = '';
    }
    
    data.operator = e.target.innerText;
    output.value = data.num1 + data.operator + data.num2;    

}

const performOperation = function() {
    if(!data.num1 &&  !data.operator && !data.num2) return;

    if(data.operator === '+') {
        data.result = parseInt(data.num1) + parseInt(data.num2);
        output.value = data.result;
    }
    if(data.operator === '-') {
        data.result = parseInt(data.num1) - parseInt(data.num2);
        output.value = data.result;
    }
    if(data.operator === '*') {
        data.result = parseInt(data.num1) * parseInt(data.num2);
        output.value = data.result;
    }
    if(data.operator === '/') {
        if(data.num2 === '0') return;
        data.result = parseInt(data.num1) / parseInt(data.num2);
        output.value = data.result;
    }
}

const clear = function() {
    data.num1 = '';
    data.num2 = '';
    data.operator = '';
    data.result = '';
    output.value = 0;
}

numbers.forEach( num => {
    num.addEventListener('click', handleClickOnNumber);
})

operators.forEach( operator => {
    operator.addEventListener('click', handleClickOnOperator);
})

equal.addEventListener('click', performOperation);
