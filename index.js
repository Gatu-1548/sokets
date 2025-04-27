import { WebSocketServer } from 'y-websocket'

// Railway te asigna el puerto en la variable de entorno PORT
const port = process.env.PORT || 1234

// Crear el servidor WebSocket
const server = new WebSocketServer({ port })

console.log(`Servidor WebSocket de Yjs corriendo en puerto ${port}`)