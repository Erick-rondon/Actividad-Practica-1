let num1=Number(prompt("Ingrese un primer número"))
let num2=Number(promot("Ingrese un segundo número"))
let num3=Number(prompt("Ingrese un tercer número"))

if(num1 > num2 && num1 > num3)
{
    document.write("El ", num1, " es el mayor de todos");
}
else if(num2 > num1 && num2 > num3)
{
    document.write("El ", num2, " es el mayor de todos");
}
else if(num3 > num1 && num3 > num2)
{
    document.write("El ", num3, " es el mayor de todos");
}