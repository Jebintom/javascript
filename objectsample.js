var person={name:"jebin",age:22,place:"Thodupuzha",
display:function()
{
    var place="australia"
    console.log(place)   //if we use [this.place ] then thodupuzha will printed
}
}//here person is the class then name is the object and display is the function

person.name="abhi"    // thus we can change the values
for(x in person)    //here x will take the value name and the take age,place(not the values)
{
   console.log(x,":")
   console.log(person[x])    // this will print the values of the peerson 
}
person.dob="4 august"   // to add a new object to the array
person.displayAge=function()
{
var age=100

    console.log(this.age)   // if this.age is called then 22will print and if not use then 100 will print 
}
console.log("\n")
console.log(person.name)  //methods to print the values
console.log(person['age'])
console.log(person.display())
console.log(person)
person.displayAge()