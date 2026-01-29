import { useEffect, useState } from "react";
import { io } from "socket.io-client";

import { io } from "socket.io-client";

const socket = io("https://unityhub-wycf.onrender.com");

export default function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Listen for messages from server
    socket.on("receiveMessage", (data) => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: data }
      ]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, []);

  const sendMessage = () => {
    if (!message.trim()) return;

    // Show your message
    setMessages((prev) => [
      ...prev,
      { sender: "you", text: message }
    ]);

    // Send to backend
    socket.emit("sendMessage", message);

    setMessage("");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl">
        <h2 className="text-xl font-bold mb-4">Community Chat</h2>

        <div className="border p-3 h-64 overflow-y-auto mb-4 rounded">
          {messages.length === 0 && (
            <p className="text-gray-400">No messages yet</p>
          )}

          {messages.map((msg, index) => (
            <p key={index} className="mb-2">
              <strong>
                {msg.sender === "you" ? "You" : "UnityHub Bot"}:
              </strong>{" "}
              {msg.text}
            </p>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            className="flex-1 border rounded px-3 py-2"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
