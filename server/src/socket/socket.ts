import { Socket } from "socket.io";

const { Server } = require("socket.io");
const CreateRoom = require("../controllers/CreateRoomController/CreateRoomController");
const JoinRoom = require("../controllers/JoinRoomController/JoinRoomController");
function createSocketServer(httpServer: any): void {
  const io = new Server(httpServer, {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket: Socket) => {
    console.log(`User connected ${socket.id}`);
    interface roomInterface {
      roomName: string;
      roomPassword: string;
    }
    socket.on("create_room", (args: roomInterface) => {
      try {
        CreateRoom(args.roomName, args.roomPassword, socket);
      } catch (error) {}
    });

    socket.on("join_room", (args: roomInterface) => {
      try {
        JoinRoom(args.roomName, socket);
      } catch (error) {}
    });
  });
}

module.exports = createSocketServer;
