const { Server } = require("socket.io");

function createSocketServer(httpServer: any): void {
  const io = new Server(httpServer, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket: any) => {
    console.log(`User connected ${socket.id}`);

    // We can write our socket event listeners in here...
  });
}

module.exports = createSocketServer;
