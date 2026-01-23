export default function Chat() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col h-[70vh]">
      <h2 className="text-2xl font-bold mb-4">Chat</h2>

      <div className="flex-1 border rounded-lg p-4 overflow-y-auto mb-4">
        <p className="text-gray-600">No messages yet</p>
      </div>

      <div className="flex gap-2">
        <input
          className="flex-1 border rounded-lg p-3"
          placeholder="Type a message..."
        />
        <button className="bg-blue-600 text-white px-6 rounded-lg">
          Send
        </button>
      </div>
    </div>
  );
}
