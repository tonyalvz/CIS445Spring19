const express = require('express');
const app = express();

app.get('/', function(request, response) {
    response.writeHead(200);
    response.write('<html><body><p>Please specify an animal in the URL path </p></body></html>')
    response.end();
});