export default function Donations() {
  return (
    <div className="min-h-screen flex items-start justify-center pt-24 bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg space-y-6">
        <h2 className="text-2xl font-bold text-center">Make a Donation</h2>

        <input
          type="number"
          placeholder="Enter amount"
          className="w-full border rounded-lg p-3"
        />

        <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold">
          Donate
        </button>
      </div>
    </div>
  );
}
