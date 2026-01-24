import { Link } from "react-router-dom";
import landingHero from "../assets/landing-hero.png";

export default function Landing() {
  return (
    <div>
      {/* HERO SECTION WITH BACKGROUND IMAGE */}
      <section
        className="relative min-h-screen bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `url(${landingHero})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center text-white">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            <span className="inline-block bg-blue-600/20 text-blue-300 px-4 py-1 rounded-full text-sm font-medium">
              Together, We Make Impact
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Build a <span className="text-blue-400">Stronger Community</span>
              <br /> Through Technology
            </h1>

            <p className="text-gray-200 text-lg max-w-xl">
              UnityHub connects people who need help with those who can provide it —
              enabling donations, real-time chat, and community-driven support in one
              powerful platform.
            </p>

            <div className="flex gap-4">
              <Link
                to="/register"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition"
              >
                Get Started
              </Link>

              <Link
                to="/login"
                className="bg-white/20 backdrop-blur hover:bg-white/30 px-6 py-3 rounded-xl font-semibold transition"
              >
                Login
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-6">
              <div>
                <h3 className="text-2xl font-bold">10K+</h3>
                <p className="text-gray-300 text-sm">People Helped</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">500+</h3>
                <p className="text-gray-300 text-sm">Active Volunteers</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">₹1M+</h3>
                <p className="text-gray-300 text-sm">Donations Raised</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE CARD */}
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20"></div>

            <div className="relative bg-white/95 text-black shadow-2xl rounded-3xl p-8">
              <h3 className="font-bold text-xl mb-4">Live Help Requests</h3>
              <div className="space-y-3">
                <div className="p-3 bg-gray-100 rounded-lg">
                  Need groceries for family of 4
                </div>
                <div className="p-3 bg-gray-100 rounded-lg">
                  Blood donation required (O+)
                </div>
                <div className="p-3 bg-gray-100 rounded-lg">
                  Looking for school books
                </div>
              </div>

              <Link
                to="/help"
                className="block mt-4 w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
              >
                View Requests
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Why Choose <span className="text-blue-600">UnityHub?</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl shadow hover:shadow-xl transition">
              <div className="text-blue-600 text-4xl mb-4">🤝</div>
              <h3 className="font-bold text-xl mb-2">Community Driven</h3>
              <p className="text-gray-600">
                Empower people to help each other through verified requests and
                trusted volunteers.
              </p>
            </div>

            <div className="p-8 rounded-2xl shadow hover:shadow-xl transition">
              <div className="text-blue-600 text-4xl mb-4">💬</div>
              <h3 className="font-bold text-xl mb-2">Real-Time Chat</h3>
              <p className="text-gray-600">
                Communicate instantly between donors, volunteers, and those in
                need.
              </p>
            </div>

            <div className="p-8 rounded-2xl shadow hover:shadow-xl transition">
              <div className="text-blue-600 text-4xl mb-4">💳</div>
              <h3 className="font-bold text-xl mb-2">Secure Donations</h3>
              <p className="text-gray-600">
                Make transparent and safe donations directly to verified
                community causes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Make a Difference?
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Join thousands of volunteers and donors building a better future — one
          act of kindness at a time.
        </p>

        <Link
          to="/register"
          className="bg-white text-blue-700 px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-gray-100 transition"
        >
          Join UnityHub Today
        </Link>
      </section>
    </div>
  );
}
