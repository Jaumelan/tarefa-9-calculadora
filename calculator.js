
const sumOperator = document.getElementById("sum");
sumOperator.addEventListener('click', sum);

const substractionOperator = document.getElementById("substraction");
substractionOperator.addEventListener('click', subs);

const multiplicationOperator = document.getElementById("multiplication");
multiplicationOperator.addEventListener('click', mult);

const divisionOperator = document.getElementById("division");
divisionOperator.addEventListener('click', divi)

function sum() {
    let value1 = +document.getElementById("firstOp").value;
    let value2 = +document.querySelector('input[name="segundoOperador"]').value;
    let resultado = value1 + value2;
    document.getElementById("result").innerHTML = resultado;
}

function subs() {
    let value1 = +document.getElementById("firstOp").value;
    let value2 = +document.querySelector('input[name="segundoOperador"]').value;
    let resultado = value1 - value2;
    document.getElementById("result").innerHTML = resultado;
}

function mult() {
    let value1 = +document.getElementById("firstOp").value;
    let value2 = +document.querySelector('input[name="segundoOperador"]').value;
    let resultado = value1 * value2;
    document.getElementById("result").innerHTML = resultado;
}

function divi() {
    let value1 = +document.getElementById("firstOp").value;
    let value2 = +document.querySelector('input[name="segundoOperador"]').value;
    let resultado = value1 / value2;
    document.getElementById("result").innerHTML = resultado;
}