const Joi = require('joi');         //Joi is used for validation
const express = require('express');
const app = express();

var router = express.Router();


const players = [
    {id: 1, name:'CR7'},
    {id: 2, name:'Messi'},
    {id: 3, name:'Pogba'},
];

const items = [
    {id: 1, name:'Weapon'},
    {id: 2, name:'Healables'},
    {id: 3, name:'Ammunition'},
];

//Gets all players
app.get('/players', (request, response) => {
    response.send(players);  //outputs all the players
});

//Gets a single player
app.get('/players/:id', (request, response) => {
    const player = players.find(c => c.id === parseInt(request.params.id));
    if(!player) return response.status(404).send('The player with the given ID was not found'); // error message if id is not found
    response.send(player);  //outputs player
});

//Creates a player 
app.post('/players', (request, response) => {
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
app.put('/players/:id', (request, response) => {
    const player = players.find(c => c.id === parseInt(request.params.id));
    if(!player) return response.status(404).send('The player with the given ID was not found'); //the "return" exits the handler if the player is not found
    
    const {error} = validatePlayer(request.body); //same as result.error, this process if called object destructuring 
    if(error) return response.status(400).send(error.details[0].message);
    
    player.name = request.body.name;
    response.send(player);
});

app.delete('/players/:id', (request,response) => {
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
app.get('/items', (request, response) => {
    response.send(items);                      //outputs all the items
});

//Gets a single item
app.get('/items/:id', (request, response) => {
    const item = items.find(c => c.id === parseInt(request.params.id));
    if(!item) return response.status(404).send('The item with the given ID was not found'); 
    response.send(item);  //outputs item
});

//Creates an item
app.post('/items', (request, response) => {
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
app.put('/items/:id', (request, response) => {
    const item = items.find(c => c.id === parseInt(request.params.id));
    if(!item) return response.status(404).send('The item with the given ID was not found'); //the "return" exits the handler if the player is not found
    
    const {error} = validateItem(request.body); //same as result.error, this process if called object destructuring 
    if(error) return response.status(400).send(error.details[0].message);
    
    item.name = request.body.name;
    response.send(item);
});

app.delete('/items/:id', (request,response) => {
    const item = items.find(c => c.id === parseInt(request.params.id));
    if(!item) return response.status(404).send('The player with the given ID was not found');
    
    const index = players.indexOf(item);
    items.splice(index, 1);               //removes one player, if you want to remove multiple then change the constant
    
    response.send(item);
});

//Funtion to validate an item
function validateItem(item) {
    const schema = {                                //schema defines the shape of the objects      
        name: Joi.string().min(3).required()        //name must be at least 3 characters long
    };
    
    return Joi.validate(item, schema);
}

app.listen(8080, () => console.log('Listening on port 8080...'));
