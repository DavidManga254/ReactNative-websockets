import { Socket } from "socket.io";

function leaveRoom(roomName: string, socket: Socket) {
  try {
    socket.leave(roomName);
  } catch (error) {}
}

module.exports = leaveRoom;
