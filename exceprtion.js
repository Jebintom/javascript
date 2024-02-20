var r=require('readline-sync')
try{
    
    var a=r.question("enter the number")
    if(a==0)
throw "user not found"
}catch(err){
    console.log(err)
}finally{
    console.log("finally")
}