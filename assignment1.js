const express = require('express');
const app = express();

//Gets all players
app.get('/api/players', function(request, response) {
    response.json({player1: 'Tfue', player2: 'Ghost Aydan'});
    response.end();
});

//Gets a single player
app.get('/api/players/:player', function(request, response) {
    const player = request.params.player;
    response.json("Player: " + player);
    response.end();
});

//Updates a player
app.put('/api/players/:player', function(request, response) {
    const player = request.params.player;
    response.json("Player: " + player + " is now being updated.")
    response.end();
});
 
//Creates a player
app.post('/api/players/:player', function(request, response) {
    const player = request.params.player;
    response.json("Player3: " + player + " is now being added.")
    response.end();
});

//Delets a player
app.delete('/api/players/:player', function(request, response) {
   const player = request.params.player;
   response.json("Player " + player + " is now being deleted.")
   response.end();
});

//Gets all items
app.get('/api/items', function(request, response) {
    response.json({item1: 'Weapons', item2: 'Ammuniton'});
    response.end();
});

//Gets a single item
app.get('/api/items/:item', function(request, response) {
    const item = request.params.item;
    response.json("Item: " + item);
    response.end();
});

//Updates an item
app.put('/api/items/:item', function(request, response) {
    const item = request.params.item;
    response.json("Item: " + item + " is now being updated.")
    response.end();
});

//Creates an item
app.post('/api/items/:item', function(request, response) {
    const item = request.params.item;
    response.json("Item " + item + " is now being added.")
    response.end();
});

//Deletes an item
app.delete('/api/items/:item', function(request, response) {
    const item = request.params.item;
    response.json("Item: " + item + " is now being deleted.")
    response.end();
});

//Gets all wins for all players
app.get('/api/wins', function(request, response) {
    response.json({Player1: "Total wins = 3", Player2: "Total wins = 5"});
    response.end();
});

//Gets a single players wins
app.get('/api/wins/:total', function(request, response) {
    const total = request.params.total;
    response.json("Players total wins = " + total);
    response.end();
});

//Gets all losses for all players
app.get('/api/losses', function(request, response) {
    response.json({Player1: "Total losses = 5", Player2: "Total losses = 8"});
    response.end();
});

//Gets a single players losses
app.get('/api/losses/:total', function(request, response) {
    const total = request.params.total;
    response.json("Players total losses = " + total);
    response.end();
});

//Port
app.listen(8080, function() {
    console.log("Listening on port 8080")
});