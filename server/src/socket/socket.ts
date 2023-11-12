const { Server } = require("socket.io");

function createSocketServer(httpServer: any): void {
  const io = new Server(httpServer, {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket: any) => {
    console.log(`User connected ${socket.id}`);

    // We can write our socket event listeners in here...
    socket.on("create_room", (args1: string, args2: string) => {
      console.log(args1, args2);
    });
  });
}

module.exports = createSocketServer;
