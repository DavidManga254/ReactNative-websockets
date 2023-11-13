import { Socket } from "socket.io";

function joinRoom(roomName: string, socket: Socket): void {
  try {
    socket.join(roomName);
    console.log(`room joined is ${roomName}`);
    socket.emit("room_joined", "room joined");
  } catch (error) {
    console.log(error);
  }
}

module.exports = joinRoom;
