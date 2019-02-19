const express = require('express');
const app = express();

app.get('/api/players', function(request, response) {
    response.json({player1: 'Tfue', player2: 'Ghost Aydan'});
    response.end();
});

app.get('/api/:player', function(request, response) {
    const player = request.params.player;
    response.json("Player1 is " + player);
    response.end();
});

app.post('/api/players/:player', function(request, response) {
    const player = request.params.player;
    response.json("Player3 is " + player + " . Player is now being added.")
    response.end();
});

app.delete('/api/players/:player', function(request, response) {
   const player = request.params.player;
   response.json("Player " + player + " is now being deleted.")
   response.end();
});

app.listen(8080, function() {
    console.log("Listening on port 8080")
});