let num1=Number(prompt("Ingrese un número"))
let num2=Number(prompt("Ingrese un segundo número"))

if(num1 > 0 && num > 0)
{
    mensaje = "Los números ingresados son positivos";
}
else if(num1 < 0 && num2 < 0)
{
    mensaje = "Ningún número ingresado es positivo";
}
else if(num1 > 0 && num2 < 0)
{
    mensaje = "Algún número ingresado es positivo";
}
else if(num1 < 0 && num2 > 0)
{
    mensaje = "Algún número ingresado es positivo";
}

document.write(mensaje)