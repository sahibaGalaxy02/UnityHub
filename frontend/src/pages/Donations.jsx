export default function Donations() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">Make a Donation</h2>

        <p className="mb-4 text-gray-600">
          Your support helps communities and people in need ❤️
        </p>

        <input
          type="number"
          placeholder="Enter amount"
          className="border w-full p-2 mb-4 rounded"
        />

        <button className="bg-green-600 text-white w-full p-2 rounded">
          Donate Now
        </button>
      </div>
    </div>
  );
}
