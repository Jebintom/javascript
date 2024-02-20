var r =require('readline-sync')    // to import the libraries in npm install readline-sync
num1=r.question('enter 2 numbers')   // question and require should be defined
num2=r.question('')
console.log(num1,num2)
if (num2> num1)
{
    console.log("number2 is larger"+ num2)
}
else if(num1===num2)      // need 3 equal signs to check equality this will check the both string types are ewual or not
{
   console.log("both numbers are equal")
}
else{
    console.log("number 1 is larger"+num1)
}
var num3=5
var num4='5'
if(num3==num4)
{
    console.log("the value is equal but it doesnt means there types are equal")
}