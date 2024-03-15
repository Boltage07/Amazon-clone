const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Serve static files (e.g., HTML, CSS, client-side JS)
app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('User connected');

  // Handle incoming messages
  socket.on('chat message', (message) => {
    io.emit('chat message', message);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
