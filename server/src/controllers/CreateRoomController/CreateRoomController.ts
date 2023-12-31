import { Socket } from "socket.io";

function createRoom(roomName: string, roomPassword: string, socket: Socket) {
  try {
    socket.join(roomName);
    socket.emit("room_created", roomName);
  } catch (err: any) {
    console.log(err);
  }
}

module.exports = createRoom;
