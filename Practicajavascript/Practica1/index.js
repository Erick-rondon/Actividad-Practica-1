let num1=Number(prompt("Ingrese un primer numero"));
let num2=Number(prompt("Ingrese un segundo numero"));

let suma = num1 + num2;
let resta = num1 - num2;
let mult = num1 * num2;
let div = num1 / num2;

document.getElementById('resultado-suma').innerHTML = suma;
document.getElementById('resultado-resta').innerHTML = resta;
document.getElementById('resultado-multiplicacion').innerHTML = mult;
document.getElementById('resultado-division').innerHTML = div;