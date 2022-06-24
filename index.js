const express = require('express');
const server = express();
const port = process.env.PORT || 3000;

const tours = require('./tours.json')


server.get('/', (req, res) => {
    return res.json(tours);
});

server.listen(port || 3000, () => console.log('listening on port ' + port));