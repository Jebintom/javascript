var http=require('http')
http.createServer(server).listen(7000)
function server(req,res)
{
    res.writeHead(200, {'Content-Type': 'text/plain'});

  res.write('Jebin tom')
  res.end()  //to give msg to the browser that the message is end
}