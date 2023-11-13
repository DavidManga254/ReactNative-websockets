import { useState, useEffect } from "react";
import { useProviderContext } from "../../hooks/useProviderHook/useProviderHook";
import { useParams } from "react-router-dom";

export function ChatDetailsPage() {
  const socket = useProviderContext();

  const { room } = useParams();

  const [messages, setMessages] = useState<messageDetails[]>([]);

  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    socket.on("message_sent", (data: messageDetails) => {
      setMessages((previous) => {
        return [...previous, data];
      });
    });

    socket.emit("join_room", { roomName: room });

    return (() => {
      socket.emit("leave_room", { roomName: room });
    })();
  }, []);

  function sendMessage(e: any) {
    e.preventDefault();

    const messageData: messageDetails = {
      roomName: room as string,
      sender: `david ${messages.length}`,
      message: message,
      time: Date.now().toString(),
    };

    setMessages((previous) => [...previous, messageData]);

    socket.emit("send_message", messageData);
  }

  return (
    <div>
      <div>
        {messages.length > 0 ? (
          messages.map((message, index) => {
            return (
              <div key={index} className="mb-3">
                {message.sender} : {message.message}
              </div>
            );
          })
        ) : (
          <div>No messages </div>
        )}
      </div>
      <div>
        <form onSubmit={(e) => sendMessage(e)}>
          <input
            onChange={(e) => setMessage(e.target.value)}
            className=" border-2 p-2"
            type="text"
            required
          />
          <button type="submit">submit</button>
        </form>
      </div>
      <p>
        {messages.length} {room}
      </p>
    </div>
  );
}

interface messageDetails {
  roomName: string;
  sender: string;
  message: string;
  time: string;
}
