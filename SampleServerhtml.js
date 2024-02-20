var http=require('http')
var  fs=require('fs') //too run  a html file in server
http.createServer(function(req,res){
    fs.readFile('sampleserver.html',function(err,data){
res.writeHead(200,{'Content-Type':'text/html'})
res.write(data)
res.end()
})

}).listen(7000)