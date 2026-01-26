import { useState } from "react";

export default function HelpRequests() {
  const [request, setRequest] = useState("");

  const submitRequest = () => {
    if (!request.trim()) return;
    alert("Help request submitted: " + request);
    setRequest("");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Request Help</h2>

        <textarea
          className="border w-full p-2 mb-4 rounded"
          rows="4"
          placeholder="Describe what help you need..."
          value={request}
          onChange={(e) => setRequest(e.target.value)}
        />

        <button
          onClick={submitRequest}
          className="bg-purple-600 text-white w-full p-2 rounded"
        >
          Submit Request
        </button>
      </div>
    </div>
  );
}
