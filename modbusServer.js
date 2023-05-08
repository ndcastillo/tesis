const mosca = require('mosca');
const settings = {
  port: 1883, 
};

const server = new mosca.Server(settings);
server.on('ready', () => {
  console.log(`Servidor MQTT con puerto ${settings.port}`);
});

server.on('clientConnected', (client) => {
  console.log('Cliente conectado:', client.id);
});

server.on('published', (packet, client) => {
  console.log('Publicado:', packet.topic, packet.payload.toString());
});

server.on('clientDisconnected', (client) => {
  console.log('Cliente desconectado:', client.id);
});
