var http=require('http')
var fs=require('fs')
http.createServer(function(req,res)
{
    if(req.url==='/')
    {
      fs.readFile('samplesever.html',function(err,data){
        res.writeHead(200,{'content-type':'text/html'})
         res.write(data)
         res.end()
      })
    }
    else if(req.url==='/login')
    {
      res.write('log in')
      res.end()
    }
    else{
        res.write('error')
        res.end()
    }
}).listen(7000,function(){
    console.log("server started")
})
