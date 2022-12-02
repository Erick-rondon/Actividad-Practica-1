let num=Number(prompt("Ingrese un número"))

if(num == 0)
{
    mensaje = "El número es igual a 0";
}
else if(num > 0)
{
    mensaje = "El número es positivo";
}
else if(num < 0)
{
    mensaje = "El número es negativo";
}

document.write(mensaje)