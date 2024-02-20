//function without arguments
function hello ()
{
    console.log("hello")
    return 10
}
hello()
console.log(hello())  // here 10 willl also printed hello is called by "hello()" 10 is returned to log and 10 will also be printed


//function with arguments
function sum(num1,num2){ 
    console.log(num1+num2)
}
sum(10,20)