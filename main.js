var display = document.getElementById("display");
var btn_clear = document.getElementById("btn-clear");
var btn_equals = document.getElementById("btn-equals");
var btn_numbers = document.querySelectorAll(".btn-number");
var btn_operators = document.querySelectorAll(".btn-operator");
var operator = "";
var showCalculator = false;

btn_clear.addEventListener("click", function() {
    display.textContent = "0";
});

btn_operators.forEach(function(btn) {
    btn.addEventListener("click", function() {
        operator = btn.textContent;
        display.textContent += " " + operator + " ";
    });
});

btn_numbers.forEach(function(btn) {
    btn.addEventListener("click", function() {
        if (display.textContent === "0") {
            display.textContent = btn.textContent;
        } else {
            display.textContent += btn.textContent;
        }
        console.log(display.textContent);
    });
});

btn_equals.addEventListener("click", function() {
    let expression = display.textContent.replace(/÷/g, "/").replace(/×/g, "*");
    let result = eval(expression);
    display.textContent = result;
});
