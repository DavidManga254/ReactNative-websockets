import { useState } from "react";
import { socket } from "../../API/socket/clientSocketConfigurations/clientSocketConfigurations";
import { useNavigate } from "react-router-dom";
interface roomInterface {
  roomName: string;
  roomPassword: string;
}
export function CreareRoomForm() {
  const [roomDetails, setRoomDetails] = useState<roomInterface>({
    roomName: "",
    roomPassword: "",
  });

  const navigate = useNavigate();

  function createRoom(e: any) {
    e.preventDefault();
    console.log("emmitutii");
    socket.emit("create_room", roomDetails);
    socket.on("room_created", (message: string) => {
      alert(message);
    });
  }
  return (
    <div className="w-[25%] ">
      <form
        onSubmit={(e) => createRoom(e)}
        className="bg-white w-full rounded-lg p-3"
      >
        <div>
          <h1 className=" text-center">Create Room</h1>
        </div>
        <div>
          <div className="mb-4">
            <label> Room Name</label> <br />
            <input
              className=" bg-[rgb(208,205,205)] p-1  text-black"
              type="text"
              required
              name="roomName"
              onChange={(e) => {
                setRoomDetails((previous) => {
                  return {
                    ...previous,
                    roomName: e.target.value,
                  };
                });
              }}
            />
          </div>
          <div className="mb-4">
            <label> Room Password</label> <br />
            <input
              className=" bg-[rgb(208,205,205)] p-1  text-black"
              type="text"
              required
              name="roomPassword"
              onChange={(e) => {
                setRoomDetails((previous) => {
                  return {
                    ...previous,
                    roomPassword: e.target.value,
                  };
                });
              }}
            />
          </div>
          <div className="mb-4">
            <button
              className="p-1 rounded-lg bg-blue-600 text-white"
              type="submit"
            >
              Create Room
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
