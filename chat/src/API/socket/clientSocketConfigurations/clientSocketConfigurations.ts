import { io } from "socket.io-client";

export const socket = io(import.meta.env.VITE_SERVER_URL);

// socket.on("create_room", (RoomName: string, RoomPassword: string) => {});
