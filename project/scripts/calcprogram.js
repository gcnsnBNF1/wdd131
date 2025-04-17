
window.onload = function() {
    
    const calculators = {
        basic: [
            { label: "C", id: "clear", class: "topper" },
            { label: "%", id: "percent", class: "topper" },
            { label: "+/-", id: "toggle-sign", class: "topper" },
            { label: "÷", id: "divide", class: "operation" },
            { label: "7", id: "seven", class: "" },
            { label: "8", id: "eight", class: "" },
            { label: "9", id: "nine", class: "" },
            { label: "×", id: "multiply", class: "operation" },
            { label: "4", id: "four", class: "" },
            { label: "5", id: "five", class: "" },
            { label: "6", id: "six", class: "" },
            { label: "-", id: "subtract", class: "operation" },
            { label: "1", id: "one", class: "" },
            { label: "2", id: "two", class: "" },
            { label: "3", id: "three", class: "" },
            { label: "+", id: "add", class: "operation" },
            { label: "0", id: "zero", class: "wide" },
            { label: ".", id: "decimal", class: "" },
            { label: "=", id: "equals", class: "operation" }
        ],
    };

    const resultDisplay = document.getElementById("displayResult");
    const container = document.querySelector(".basic");
    const type = container.className;

    if (type in calculators)
    {
        makeCalculator(type, calculators[type]);
    }
    else
    {
        console.error(`Unknown calculator type: ${type}`);
    }

    let currentInput = "0";

    function updateDisplay(value) {
        resultDisplay.textContent = value;
    }

    function clearInput() {
        currentInput = "0";
        updateDisplay(currentInput);
    }

    function buttonClick(buttonLabel) {
        if (buttonLabel === "C") {
            clearInput();
        }
        else if (buttonLabel === "=") {
            currentInput = evaluateExpression(
                currentInput.replace("×", "*").replace("÷", "/")
            );
            updateDisplay(currentInput);
        }
        else if (buttonLabel === "+/-") {
            currentInput = (parseFloat(currentInput) * -1).toString();
            updateDisplay(currentInput);
        }
        else if (buttonLabel === "%") {
            currentInput = (parseFloat(currentInput) / 100).toString();
            updateDisplay(currentInput);
        }
        else {
            if (currentInput === "0" && buttonLabel !== ".") {
                currentInput = buttonLabel;
            }
            else {
                currentInput += buttonLabel;
            }
            updateDisplay(currentInput);
        }
    }

    function makeCalculator(type, buttons) {
        const container = document.querySelector(`.${type}`);
        container.innerHTML = "";

        buttons.forEach((button) => {
            const btn = document.createElement("button");
            btn.innerHTML = button.label;
            btn.id = button.id;
            btn.type = "button";
            if (button.class)
            {
                btn.classList.add(button.class);
            }

             // Create a span for the button label
            const span = document.createElement("span");
            span.textContent = button.label; // Set the text for the span
            btn.appendChild(span); // Add the span inside the button

            container.appendChild(btn); // Add the button to the container

            container.appendChild(btn);

            btn.addEventListener("click", () => {
                buttonClick(button.label);
            });
        });
    }

    function evaluateExpression(expression) {
        try {
            // Safely replace math symbols
            expression = expression.replace(/×/g, '*').replace(/÷/g, '/');
    
            // Use eval for simplicity but ideally implement a safer parser
            const result = eval(expression);
            return result % 1 !== 0 ? result.toFixed(5) : result; // Round to 5 decimals if not an integer
        } 
        catch (error) {
            return "Error";
        }
    }
};

