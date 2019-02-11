const express = require('express');
const app=express();

app.get('/', function(request, response) {
    response.writeHead(200);
    response.write('<html><body><p>Please specify an animal in the URL path</p></body></html>')
    response.end();
});

app.get('/cat', function(request, response){
    response.write("<html><body><p>Hello, cat is running.</p>" +
                    "<p> I see you are calling: cat</p>");
    response.write("<p>Cat is really tired </p></body></html>");
    response.end();
});

app.get('/dog', function(request, response){
    response.write("<html><body><p>Hello, dog is running.</p>" +
                    "<p> I see you are calling: dog</p>");
    response.write("<p>Dog is really tired </p></body></html>");
    response.end();
});

app.get('/:animal', function(request, response){
    const animal= request.params.animal;
    response.write("<html><body><p>Hello, " + animal + " is running.</p>" +
                    "<p> I see you are calling: " + animal + "</p>");
    response.write("<p>" + animal + " is really tired </p></body></html>");
    response.end();
});

app.delete('/:animal', function(request, response){
    const animal= request.params.animal;
    response.write("<html><body><p>Hello, you have terminatd the  " + animal + "</p>");
    response.write("</p></body></html>");
    response.end();
});

app.listen(8080, function() {
    console.log('exprees is now running on port 8080 ...');
});


/*
http.createServer(function(request,response){
    let animal = 'not sure';
    if(request.url == '/dog/' || request.url == '/dog') animal = 'dog';
    if(request.url == '/cat/' || request.url == '/cat') animal = 'dog';
    response.writeHead(200);
    response.write("<html><body><p>Hello," + animal + " is running.</p>" +
                    "<p> I see you are calling: " + request.url + "</p>");
    response.write("<p>" + animal + " is really tired </p></body></html>");
    response.end();
}).listen(8080);

console.log('Listening on port 8080...');
*/