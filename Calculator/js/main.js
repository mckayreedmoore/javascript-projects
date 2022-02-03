    //here we are initializing the object of calculator. This will be used to hold the data before we perform 
        // caclulation. It includes the value on the display, two operands and an operator
const calculator = {
    displayValue: "0", 
    firstOperand: null, 
    waitSecondOperand: false, 
    operator: null,
};

    //this modifies values each time a button is clicked    
function inputDigit(digit) {
    const {displayValue, waitSecondOperand } = calculator;
    if (waitSecondOperand === true)  {
        calculator.displayValue = digit; 
        calculator.waitSecondOperand = false;
    } else {    //This overwrites the display if the input is "0". If not, it adds to it
        calculator.displayValue = displayValue === "0" ? digit : displayValue + digit;
    }
}
    //This handles decimal points
function inputDecimal(dot) {
    //this ensures if you click the decimal button twice it won't break the program
    if (calculator.waitSecondOperand === true) return;
    if (!calculator.displayValue.includes(dot)) {
        // if the value doesn't contain a decimal point, we want to add it
        calculator.displayValue += dot;
    }
}

    //this function handles the operators
function handleOperator (nextOperator) {
    const {firstOperand,  displayValue, operator } = calculator
        //when operator keys are pressed, we convert the current number
            // displayed on screen to a number and store result in calculator_
    const valueOfInput = parseFloat(displayValue);
    if (operator && calculator.waitSecondOperand) {
            // checks if operator already exists then and if waitSecondOperator is true
                // if so, it updates the operator and exits function
        calculator.operator = nextOperator;
        return;
    }
    if (firstOperand == null) {
        calculator.firstOperand = valueOfInput;
    } else if (operator) { // checks if an opertor has already been iput
        const valueNow = firstOperand || 0;

            //if the operator exists, it is looked up
        let result = performCalculation[operator](valueNow, valueOfInput);
            //this gives us a fixed amount of decimals
        result = Number(result).toFixed(9)
            //this removes trailing zeros
        result = (result * 1).toString()
        calculator.displayValue = parseFloat(result);
        calculator.firstOperand = parseFloat(result);

    }
    calculator.waitSecondOperand = true;
    calculator.operator = nextOperator;
}

const performCalculation = {
    "/": (firstOperand, secondOperand) => firstOperand / secondOperand, 
    "*": (firstOperand, secondOperand) => firstOperand * secondOperand,
    "+": (firstOperand, secondOperand) => firstOperand + secondOperand,
    "-": (firstOperand, secondOperand) => firstOperand - secondOperand,
    "=": (firstOperand, secondOperand) => secondOperand
};

function calculatorReset () {
    calculator.displayValue = "0";
    calculator.firstOperand = null;
    calculator.waitSecondOperand = false;
    calculator.operator = null;
}

    //This updates screen with the contents of displayValue
function updateDisplay() {
    const display = document.querySelector(".calculator-screen");
    display.value = calculator.displayValue;
}

updateDisplay();

    //this section monitors button clicks
const keys = document.querySelector(".calculator-keys");
keys.addEventListener("click", (event) => {
        //the target variable is an object that represents the variable clicked
    const { target } = event;
        //if the click occurs over something that is not a button, the function exits
    if (!target.matches("button")){
        return;
    }

    if (target.classList.contains("operator")) {
        handleOperator(target.value);
        updateDisplay();
        return;
    }
    if (target.classList.contains("decimal")) {
        inputDecimal(target.value);
        updateDisplay();
        return;
    }
        //causes the AC button to clear screen
    if (target.classList.contains("all-clear")){
        calculatorReset();
        updateDisplay();
        return;
    }
    inputDigit(target.value);
    updateDisplay();
})


