const express=require('express') 
const path=require('path')      // importing express moduless to a constant
const app =express()                   //an object is created

app.use(function(req,res,next)
{
    console.log('start')                   // hello will be printed after the request is send
    next()                                     //if we didnt use this the execution stops here it doesnt goes to signup formss so next() is called
})

app.get('/signupaction',function(req,res,neext){
                                                          //path.join is used to join the path of the file
res.sendFile(path.join(__dirname,'signup.html'))          // in express we cannot give the filename wwe need to define the path for that we load path module
console.log('middle')
next()

}) 
app.use(function(req,res){
    console.log('end')
    
})
app.post('/signupaction',(req,res)=>{   // since we are using post we need to change the signup.html as get to post 
    res.send('account created')
})     

app.get('/about',(req,res)=>{
    res.send('about')
})                           //to get the object from the server we use get function
app.listen(3000,()=>{
console.log('server started')
console.log(__dirname)      
console.log(__filename)                 // will print the directory it has been on
           
})                                     // port is set this will generate a cannot get command in browser which means exoress created  