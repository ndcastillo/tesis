const WebSocket = require("ws");

const socket = new WebSocket("ws://localhost:8080");

socket.on("open", () => {
  console.log("Connected to WebSocket server");

  // Enviar un mensaje JSON al servidor
  const clientMessage = {
    timestamp: Date.now(),
    data: "Hello, server!",
  };
  socket.send(JSON.stringify(clientMessage));
});

socket.on("message", (message) => {
  const serverMessage = JSON.parse(message);
  console.log(
    `Received message from server at ${serverMessage.timestamp}: ${serverMessage.data}`
  );
});

socket.on("close", () => {
  console.log("Disconnected from WebSocket server");
});
