var r=require('readline-sync')
console.log(" 1- for addition \n 2-for substraction\n 3- for multiplication \n 4-for division")
var operator=r.question("enter the operation you want to perform");
console.log(operator)
var num1=r.question ("enter first number")
var num2=r.question ("enter second number")
var sum;
switch(parseInt(operator))
{
    case 1:  sum=num1 + num2
             console.log(sum)
    break;
    case 2:  sum=num1 - num2
             console.log(sum)
    break;
    case 3:  sum=num1 * num2
             console.log(sum)
    break;
    case 4:  sum=num1 / num2
             console.log(sum)
    break;
    default: console.log("wrong")
}


