function appendToDisplay(value) {
    const display = document.getElementById("display");
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById("display");
    display.value = "";
}

function calculateResult() {
    try {
        const display = document.getElementById("display");
        const result = eval(display.value);
        display.value = result;
    } catch (error) {
        const display = document.getElementById("display");
        display.value = "Error";
    }
}

function calculatePercentage() {
    const display = document.getElementById("display");
    display.value = parseFloat(display.value) / 100;
}

function backspace() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function toggleSign() {
    const display = document.getElementById("display");
    let currentValue = display.value;

    // Split the current value by operators (+, -, *, /)
    const operators = ['+', '-', '*', '/'];
    let parts = [];
    let currentPart = "";

    for (let i = 0; i < currentValue.length; i++) {
        if (operators.includes(currentValue[i])) {
            parts.push(currentPart);
            parts.push(currentValue[i]);
            currentPart = "";
        } else {
            currentPart += currentValue[i];
        }
    }

    // Add the last part (after the last operator) to the array
    if (currentPart !== "") {
        parts.push(currentPart);
    }

    // Toggle the sign of the last number if it exists
    if (parts.length > 0) {
        const lastIndex = parts.length - 1;
        const lastPart = parts[lastIndex];

        // Check if the last part is a number and toggle its sign
        if (!isNaN(lastPart)) {
            parts[lastIndex] = -parseFloat(lastPart);
            display.value = parts.join("");
        }
    }
}


