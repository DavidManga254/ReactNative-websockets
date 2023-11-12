const { Server } = require("socket.io");

const io = new Server();

io.on("connection", () => {
  console.log("connected");
});

module.exports = io;
