function calculate(a, b, callback) {
    callback(a + b);
}

function displayresult(result) {
    console.log('the result is: ' + result);
}

calculate(2, 3, displayresult)