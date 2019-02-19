const Joi = require('joi');         //Joi is used for validation
const express = require('express');
const app = express();

app.use(express.json());

const players = [
    {id: 1, name:'Tfue'},
    {id: 2, name:'Ghost Aydan'},
    {id: 3, name:'Nick Mercs'},
];

const items = [
    {id: 1, name:'Weapon'},
    {id: 2, name:'Healables'},
    {id: 3, name:'Ammunition'},
];

const wins = [
    { id: 1, totalwins: '10'},
    { id: 2, totalwins: '5'},
    { id: 3, totalwins: '4'},
];

const losses = [
    { id: 1, totallosses: '2'},
    { id: 2, totallosses: '3'},
    { id: 3, totallosses: '1'},
];

//Gets all players
app.get('/players', function (request, response) {
    response.send(players);  //outputs all the players
});

//Gets a single player
app.get('/players/:id', function (request, response) {
    const player = players.find(c => c.id === parseInt(request.params.id)); //boolean comparison to see if the player is in the players array
    if(!player) return response.status(404).send('The player with the given ID was not found'); // error message if id is not found
    response.send(player);  //outputs player
});

//Creates a player 
app.post('/players', function (request, response) {
    const {error} = validatePlayer(request.body); 
    if(error) return response.status(400).send(error.details[0].message);
    
    const player = {
        id: players.length + 1,     //adds one to the id so if id is at 4 then the next id will be 5
        name: request.body.name,
    };
    
    players.push(player);
    response.send(player);
});

//Updates a player
app.put('/players/:id', function (request, response) {
    const player = players.find(c => c.id === parseInt(request.params.id));
    if(!player) return response.status(404).send('The player with the given ID was not found'); //the "return" exits the handler if the player is not found
    
    const {error} = validatePlayer(request.body); //same as result.error, this process is called object destructuring 
    if(error) return response.status(400).send(error.details[0].message);
    
    player.name = request.body.name;
    response.send(player);
});

app.delete('/players/:id', function (request,response) {
    const player = players.find(c => c.id === parseInt(request.params.id));
    if(!player) return response.status(404).send('The player with the given ID was not found');
    
    const index = players.indexOf(player);
    players.splice(index, 1);               //removes one player, if you want to remove multiple then change the constant
    
    response.send(player);
});

//Funtion to validate a player
function validatePlayer(player) {
    const schema = {                                //schema defines the shape of the objects      
        name: Joi.string().min(3).required()        //name must be at least 3 characters long
    };
    
    return Joi.validate(player, schema);
}


//Gets all items
app.get('/items', function (request, response) {
    response.send(items);                      //outputs all the items
});

//Gets a single item
app.get('/items/:id', function (request, response) {
    const item = items.find(c => c.id === parseInt(request.params.id));
    if(!item) return response.status(404).send('The item with the given ID was not found'); 
    response.send(item);  //outputs item
});

//Creates an item
app.post('/items', function (request, response) {
    const {error} = validateItem(request.body); 
    if(error) return response.status(400).send(error.details[0].message);
    
    const item = {
        id: items.length + 1,     //adds one to the id so if id is at 4 then the next id will be 5
        name: request.body.name,
    };
    
    items.push(item);
    response.send(item);
});

//Updates an item
app.put('/items/:id', function (request, response) {
    const item = items.find(c => c.id === parseInt(request.params.id));
    if(!item) return response.status(404).send('The item with the given ID was not found'); //the "return" exits the handler if the item is not found
    
    const {error} = validateItem(request.body); //same as result.error, this process if called object destructuring 
    if(error) return response.status(400).send(error.details[0].message);
    
    item.name = request.body.name;
    response.send(item);
});

app.delete('/items/:id', function (request,response) {
    const item = items.find(c => c.id === parseInt(request.params.id));
    if(!item) return response.status(404).send('The player with the given ID was not found');
    
    const index = players.indexOf(item);
    items.splice(index, 1);               //removes one item, if you want to remove multiple then change the constant
    
    response.send(item);
});

//Funtion to validate an item
function validateItem(item) {
    const schema = {                                //schema defines the shape of the objects      
        name: Joi.string().min(3).required()        //name must be at least 3 characters long
    };
    
    return Joi.validate(item, schema);
}

//Gets total wins for all players
app.get('/wins', function (request, response) {
    response.send(wins);  //outputs all the players total wins
});

//Gets a single players wins
app.get('/wins/:id', function (request, response) {
    const total = wins.find(c => c.id === parseInt(request.params.id)); //boolean comparison to see if the wins are in the wins array
    if(!total) return response.status(404).send('The player with the given ID was not found'); // error message if id is not found
    response.send(total);  //outputs player
});

//Gets total losses for all players
app.get('/losses', function (request,response) {
    response.send(losses);
});

//Gets a single players losses
app.get('/losses/:id', function (request, response) {
    const total = losses.find(c => c.id === parseInt(request.params.id));
    if(!total) return response.status(404).send('The player with the give ID was not found');
    response.send(total);
});

//Port
app.listen(8080, function() {
    console.log('Listening on port 8080...')
});
