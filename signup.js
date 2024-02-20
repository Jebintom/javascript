var http=require('http')
var fs=require('fs')
var url=require('url')// inbuilt function to valuate the submitted details

http.createServer(function(req,res){
    var q=url.parse(req.url,true)  // this will seperate the action url with the values that are present in the url when submitted is clicked
if (q.pathname==='/')  // true is passed to get the object form of data so we can call with q.fname etc..b 
{
    fs.readFile('samplesever.html',(err,data)=>{
        res.writeHead(200,{'content-type':'text/html'})
        res.write(data)
        res.end()
    })
}
else if(q.pathname==='/signup') {
    fs.readFile('signup.html',(err,data)=>{

    res.writeHead(200,{'content-type':'text/html'})
    res.write(data)
    res.end()

})
}
else if(q.pathname==='/signupaction') {
    console.log(q.query)
    res.writeHead(200,{'content-type':'text/html'})

    res.write('<h1>'+q.query.fname+'<h1>')
    res.end()
}
else{
    res.writeHead(404,{'content-type':'text/html'})

    res.write('error')
    res.end()
}
}).listen(7000,()=>{console.log("server started")})