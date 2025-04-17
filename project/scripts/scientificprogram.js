const display = document.getElementById('displayResult');
let currentInput = '';
let isRadians = true; // Toggle for radians/degrees

function updateDisplay(value) {
    display.textContent = value;
}

function factorial(n) {
    if (n < 0) return NaN;
    return n <= 1 ? 1 : n * factorial(n - 1);
}

function parseExpression(expression) {
    return expression.replace(/×/g, '*')
                     .replace(/÷/g, '/')
                     .replace(/EE/g, 'e+'); // Handle scientific notation (EE as 10^)
}

document.querySelectorAll('.scientific button').forEach(button => {
    button.addEventListener('click', () => {
        const id = button.id;

        try {
            switch (id) {
                case 'clear':
                    currentInput = '';
                    updateDisplay('0');
                    break;
                case 'equals':
                    currentInput = parseExpression(currentInput);
                    const result = eval(currentInput);
                    updateDisplay(result);
                    currentInput = result.toString();
                    break;
                case 'toggle-sign':
                    currentInput = (-parseFloat(currentInput)).toString();
                    updateDisplay(currentInput);
                    break;
                case 'percent':
                    currentInput = (parseFloat(currentInput) / 100).toString();
                    updateDisplay(currentInput);
                    break;
                case 'absoluteValue':
                    currentInput = Math.abs(parseFloat(currentInput)).toString();
                    updateDisplay(currentInput);
                    break;
                case 'eulersNumber':
                    currentInput += Math.E.toString();
                    updateDisplay(currentInput);
                    break;
                case 'pi':
                    currentInput += Math.PI.toString();
                    updateDisplay(currentInput);
                    break;
                case 'naturalLog': // ln(x)
                    currentInput = Math.log(parseFloat(currentInput)).toString();
                    updateDisplay(currentInput);
                    break;
                case 'logOfTen': // log10(x)
                    currentInput = Math.log10(parseFloat(currentInput)).toString();
                    updateDisplay(currentInput);
                    break;
                case 'logOfY': // log base Y
                    const [base, number] = currentInput.split(','); // Input format: base,number
                    currentInput = (Math.log(parseFloat(number)) / Math.log(parseFloat(base))).toString();
                    updateDisplay(currentInput);
                    break;
                case 'ePowerOfX': // e^x
                    currentInput = Math.exp(parseFloat(currentInput)).toString();
                    updateDisplay(currentInput);
                    break;
                case 'tenPowerOfX': // 10^x
                    currentInput = Math.pow(10, parseFloat(currentInput)).toString();
                    updateDisplay(currentInput);
                    break;
                case 'yPowerOfX': // x^y
                    currentInput += '**'; // Using ** for exponentiation in JavaScript
                    updateDisplay(currentInput);
                    break;
                case 'twoPowerOfX': // 2^x
                    currentInput = Math.pow(2, parseFloat(currentInput)).toString();
                    updateDisplay(currentInput);
                    break;
                case 'sqrtOfX': // √x
                    currentInput = Math.sqrt(parseFloat(currentInput)).toString();
                    updateDisplay(currentInput);
                    break;
                case 'cbrtOfX': // ∛x
                    currentInput = Math.cbrt(parseFloat(currentInput)).toString();
                    updateDisplay(currentInput);
                    break;
                case 'yrtOfX': // nth root of x (format: root,number)
                    const [root, num] = currentInput.split(','); // Input format: root,number
                    currentInput = Math.pow(parseFloat(num), 1 / parseFloat(root)).toString();
                    updateDisplay(currentInput);
                    break;
                case 'xFactorial': // x!
                    currentInput = factorial(parseInt(currentInput)).toString();
                    updateDisplay(currentInput);
                    break;
                case 'sine':
                    currentInput = isRadians
                        ? Math.sin(parseFloat(currentInput)).toString()
                        : Math.sin((parseFloat(currentInput) * Math.PI) / 180).toString();
                    updateDisplay(currentInput);
                    break;
                case 'cosine':
                    currentInput = isRadians
                        ? Math.cos(parseFloat(currentInput)).toString()
                        : Math.cos((parseFloat(currentInput) * Math.PI) / 180).toString();
                    updateDisplay(currentInput);
                    break;
                case 'tangent':
                    currentInput = isRadians
                        ? Math.tan(parseFloat(currentInput)).toString()
                        : Math.tan((parseFloat(currentInput) * Math.PI) / 180).toString();
                    updateDisplay(currentInput);
                    break;
                case 'cotangent':
                    currentInput = isRadians
                        ? (1 / Math.tan(parseFloat(currentInput))).toString()
                        : (1 / Math.tan((parseFloat(currentInput) * Math.PI) / 180)).toString();
                    updateDisplay(currentInput);
                    break;
                case 'secant':
                    currentInput = isRadians
                        ? (1 / Math.cos(parseFloat(currentInput))).toString()
                        : (1 / Math.cos((parseFloat(currentInput) * Math.PI) / 180)).toString();
                    updateDisplay(currentInput);
                    break;
                case 'cosecant':
                    currentInput = isRadians
                        ? (1 / Math.sin(parseFloat(currentInput))).toString()
                        : (1 / Math.sin((parseFloat(currentInput) * Math.PI) / 180)).toString();
                    updateDisplay(currentInput);
                    break;
                case 'radians':
                    isRadians = true;
                    updateDisplay('Radians mode');
                    break;
                case 'degrees':
                    isRadians = false;
                    updateDisplay('Degrees mode');
                    break;
                case 'oneXth': // 1/x
                    currentInput = (1 / parseFloat(currentInput)).toString();
                    updateDisplay(currentInput);
                    break;
                default:
                    // Append numbers and operators to the input
                    currentInput += button.textContent;
                    updateDisplay(currentInput);
            }
        } catch (error) {
            updateDisplay('Error');
        }
    });
});