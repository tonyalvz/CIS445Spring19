const http = require('http');

http.createServer(function(request,response){
    //console.log(request);
    response.writeHead(200);
    response.write("<html><body><p>Hello, dog is running.</p><body></html>");
    setTimeout(function() {
        response.write("<p>Dog is really tired</p></body></html>")
        response.end();
    }, 5000);
}).listen(8080);

console.log('Listening on port 8080...');