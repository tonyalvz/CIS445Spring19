const express = require('express');
const app = express();

const players = [
    {id: 1, name:'CR7'},
    {id: 2, name:'Messi'},
    {id: 3, name:'Pogba'},
];

app.get('/players', (request, response) => {
    response.send(players);
});

app.get('/players/:id', (request, response) => {
    const player = players.find(c => c.id === parseInt(request.params.id));
    if(!player) response.status(404).send('The player with the given ID was not found');
    response.send(player);
});

app.listen(8080, () => console.log('Listening on port 8080...'));
