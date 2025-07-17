   let display = document.getElementById('display');
    let currentInput = '';
    let operator = '';
    let previousInput = '';

    function appendNumber(number) {
      currentInput += number;
      display.value = currentInput;
    }

    function setOperator(op) {
      if (currentInput === '') return;
      if (previousInput !== '') {
        calculateResult();
      }
      operator = op;
      previousInput = currentInput;
      currentInput = '';
    }

    function clearDisplay() {
      currentInput = '';
      previousInput = '';
      operator = '';
      display.value = '';
    }

    function calculateResult() {
      if (currentInput === '' || previousInput === '') return;
      let result;
      let num1 = parseFloat(previousInput);
      let num2 = parseFloat(currentInput);

      switch (operator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          if (num2 === 0) {
            alert("Cannot divide by zero");
            clearDisplay();
            return;
          }
          result = num1 / num2;
          break;
        default:
          return;
      }

      display.value = result;
      currentInput = result.toString();
      previousInput = '';
      operator = '';
    }
  
