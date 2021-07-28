const fs = require('fs');
const express = require('express');
const server = express();

server.use(express.json());

server.get('/date', (req, res) =>{
    res.send(new Date().toUTCString());
});


server.get('/text',(req, res) =>{
    fs.readFile('./texto.txt', function(err, data){
        if(err){
            console.log(err);
        }
        res.send(data.toString());
        
    });
});

server.post('/greeting', (req, res) =>{
    res.send({mensaje: `Buenos dias ${req.body.nombre}!`});
});


server.listen(3000, () => {
    console.log('Server on port 3000');
});

