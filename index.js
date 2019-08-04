const config = require('./config/config.json');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const ioServer = require('./io-server')(io);

const {port} = config.server;
server.listen(port, () =>{
    console.log(`servidor activo en http://localhos:${port}`);
});