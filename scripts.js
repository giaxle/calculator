const container = document.querySelector('.container');
const calculator = container.querySelector('.calculator');
const keys = calculator.querySelector('.calculator-keys');

const history = document.getElementById('history-value');
const output = document.getElementById('output-value');

calculator.dataset.firstValue = '';
calculator.dataset.operator = '';
calculator.dataset.secondValue = '';


// calculate function
const calculate = (n1, operator, n2) => {
    let result = '';
    if (operator === 'add') {
        // add(result, n1, n2);
        result = parseFloat(n1) + parseFloat(n2);
    } else if (operator === 'subtract') {
        result = parseFloat(n1) - parseFloat(n2);
    } else if (operator === 'multiply') {
        result = parseFloat(n1) * parseFloat(n2);
    } else if (operator === 'divide') {
        if (n1 === '0' || n2 === '0') {
            result = 'It\'s not very effective';
        } else {
            result = parseFloat(n1) / parseFloat(n2);
        }
    }
    return result;
}

// adding event listener to each button and display code 
keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action;
    
    const keyContent = key.textContent;
    const displayHistory = history.textContent;
    const displayOutput = output.textContent;
    
    // Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'))

    const previousKeyType = calculator.dataset.previousKeyType;

    if (!action) {
        // this is for the history queue
        if (displayHistory === '') {
            history.textContent = keyContent;
        } else {
            history.textContent = displayHistory + keyContent;
        }

        // display for output and immediate number value
        if (displayOutput === '' || previousKeyType === 'operator') {
            calculator.dataset.previousKeyType = '';
            output.textContent = keyContent;
        } else {
            output.textContent = displayOutput + keyContent;
        }   
        console.log(key.value)
    }

    // checks for operator
    if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
    ) {
        if (calculator.dataset.firstValue !== '') {
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayOutput
            output.textContent = calculate(firstValue, operator, secondValue);
            calculator.dataset.firstValue = output.textContent;
            console.log('It worked!');
        } else {
            history.textContent = displayHistory + keyContent;
        // key.classList.add('is-depressed');
        calculator.dataset.previousKeyType = 'operator';
        calculator.dataset.firstValue = displayOutput;
        calculator.dataset.operator = action;
        // console.log(action);
        }

    }

    if (action === 'clear') {
        calculator.dataset.firstValue = '';
        calculator.dataset.operator = '';
        calculator.dataset.secondValue = '';
        output.textContent = '';
        history.textContent = '';
        console.log(action);
    }

    if (action === 'equal') {
        const firstValue = calculator.dataset.firstValue;
        const operator = calculator.dataset.operator;
        const secondValue = displayOutput
        output.textContent = calculate(firstValue, operator, secondValue);
    }
    }
    
})

const add = (result, n1, n2) => {
    if (n1 !== '' && n2 !== '') {
        result = n1 + n2;
        firstValue = result;
        return result, firstValue;
    } else {
        result = n1 + n2;
        return result;
    }
}

function checkOperand(action) {
    if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
    ) {
        const firstValue = displayOutput;
        const operator = action;
    }
}