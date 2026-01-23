import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-10">
        <h1 className="text-3xl font-bold">
          Welcome back, <span className="text-blue-600">{user.name}</span> 👋
        </h1>
        <p className="text-gray-600 mt-1">
          Role: <span className="font-semibold capitalize">{user.role}</span>
        </p>
      </div>

      {/* STATS CARDS */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-gray-500 text-sm">Help Requests</h3>
          <p className="text-3xl font-bold mt-2">12</p>
          <p className="text-blue-600 text-sm mt-2">Active cases</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-gray-500 text-sm">Donations Made</h3>
          <p className="text-3xl font-bold mt-2">₹2,500</p>
          <p className="text-green-600 text-sm mt-2">This month</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-gray-500 text-sm">Messages</h3>
          <p className="text-3xl font-bold mt-2">5</p>
          <p className="text-purple-600 text-sm mt-2">Unread</p>
        </div>
      </div>

      {/* QUICK ACTIONS */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow">
          <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
          <div className="flex flex-col gap-4">
            <Link
              to="/help"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-center font-semibold transition"
            >
              View Help Requests
            </Link>

            <Link
              to="/donations"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl text-center font-semibold transition"
            >
              Make a Donation
            </Link>

            <Link
              to="/chat"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl text-center font-semibold transition"
            >
              Open Chat
            </Link>
          </div>
        </div>

        {/* ACTIVITY */}
        <div className="bg-white p-8 rounded-2xl shadow">
          <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
          <ul className="space-y-3 text-gray-600">
            <li>✅ Donated ₹500 to Medical Help Fund</li>
            <li>💬 Chatted with Volunteer Rahul</li>
            <li>🆘 Viewed Help Request: Groceries for Family</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
