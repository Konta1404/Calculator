/**
 * Created by Veselin on 6/9/2017.
 */
function myFunction(id) {
    document.calc.result.value += id;
}

function otherFunction() {
    document.calc.result.value = 1 / document.calc.result.value;
}

// Clears calculator input screen
function clearScreen() {
    document.calc.result.value = "";
}

function pow() {
    document.calc.result.value = document.calc.result.value*document.calc.result.value;
}

function sqrt() {
    document.calc.result.value = Math.sqrt(document.calc.result.value);
}

// Calculates input values
function calculate() {
    try {
        var input = eval(document.calc.result.value);
        document.calc.result.value = input;
    } catch(err){
        document.calc.result.value = "Error";
    }
}