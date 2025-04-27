const { setupWSConnection } = require('y-websocket/bin/utils.js');
import * as http from 'http';
import WebSocket from 'ws';

const port = process.env.PORT || 1234; // usa el puerto de Railway

const server = http.createServer((_, res) => {
  res.writeHead(200);
  res.end('Servidor WebSocket corriendo');
});

const wss = new WebSocket.Server({ server });

wss.on('connection', setupWSConnection);

server.listen(port, () => {
  console.log(`Servidor WebSocket escuchando en el puerto ${port}`);
});
