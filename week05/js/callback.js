function calculate(a, b, callback) {
    callback(a + b);
}

function displayResult(result) {
    const callback = document.getElementById("callback");
    callback.innerHTML = `The result is: ${result}`;
}

calculate(2, 3, displayResult);