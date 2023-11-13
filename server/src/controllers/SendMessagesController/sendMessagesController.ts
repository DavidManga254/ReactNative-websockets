import { Socket } from "socket.io";

interface messageDetails {
  roomName: string;
  sender: string;
  message: string;
  time: string;
}
function sendMessage(socket: Socket, data: messageDetails): void {
  try {
    socket.to(data.roomName).emit("message_sent", data);
  } catch (error) {}
}

module.exports = sendMessage;
