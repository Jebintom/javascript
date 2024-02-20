const express=require('express')       // importing express moduless to a constant
const app =express()                   //an object is created
app.get('/',function(req,res){
res.sendFile('signup.html')          // in express we cannot give the filename wwe need to define the path for that we load path module
})         
app.get('/about',(req,res)=>{
    res.send('about')
})                           //to get the object from the server we use get function
app.listen(3000,()=>{
console.log('server started')
console.log(__dirname)      
console.log(__filename)                 // will print the directory it has been on
           
})                                     // port is set this will generate a cannot get command in browser which means exoress created  