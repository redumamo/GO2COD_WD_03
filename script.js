// Select the display element
const display = document.getElementById("display");

// Function to append numbers to the display
function appendNumber(number) {
  // Prevent leading zeroes
  if (display.innerText === "0") {
    display.innerText = number;
  } else {
    display.innerText += number;
  }
}

// Function to append operators to the display
function appendOperator(operator) {
  const lastChar = display.innerText.slice(-1);
  // Prevent multiple consecutive operators
  if ("+-*/".includes(lastChar)) {
    display.innerText = display.innerText.slice(0, -1) + operator;
  } else {
    display.innerText += operator;
  }
}

// Function to clear the entire display
function clearDisplay() {
  display.innerText = "0";
}

// Function to delete the last entered character
function deleteLast() {
  display.innerText = display.innerText.slice(0, -1) || "0";
}

// Function to calculate the result
function calculate() {
  try {
    // Use eval to evaluate the expression (simple for learning purposes)
    const result = eval(display.innerText);
    // Display the result or "Error" if the result is invalid
    display.innerText = result !== undefined ? result : "Error";
  } catch (error) {
    display.innerText = "Error";
  }
}
