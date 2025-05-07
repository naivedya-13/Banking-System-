import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-blue-50 py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 leading-tight mb-6">
              Banking Made <span className="text-blue-600">Simple</span> and <span className="text-blue-600">Secure</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-prose mx-auto md:mx-0">
              Experience seamless digital banking with industry-leading security.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <button
                className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-lg font-medium shadow"
                onClick={() => navigate("/register")}
              >
                Get Started
              </button>
              <button
                className="bg-gray-100 hover:bg-gray-200 transition text-gray-800 px-6 py-3 rounded-lg font-medium shadow"
                onClick={() => navigate("/login")}
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://cdn.dribbble.com/userupload/7052512/file/original-bb59c71da9dda2473550c4ec0b780a1a.png?crop=0x0-3201x2401&format=webp&resize=600x450&vertical=center"
              alt="Banking illustration"
              className="rounded-xl shadow-lg w-full"
            />
            <p className="text-sm text-gray-600 mt-3 text-center md:text-left">
              🔒 Bank Grade Security
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-gray-800">Why Choose SecureBank</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "24/7 Online Banking", desc: "Access your account anytime, anywhere." },
              { title: "Secure Transactions", desc: "Advanced encryption to protect your money." },
              { title: "Mobile App", desc: "Manage on the go with our mobile app." },
              { title: "Personal Support", desc: "Talk to a banker whenever needed." },
            ].map((f, i) => (
              <div
                key={i}
                className="border p-6 rounded-xl shadow hover:shadow-md transition transform hover:-translate-y-1 bg-gray-50"
              >
                <h3 className="font-semibold text-lg text-blue-600 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-blue-50 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { title: "Personal Banking", desc: "Checking, savings, and credit tools." },
            { title: "Business Solutions", desc: "Finance services for your growing business." },
            { title: "Wealth Management", desc: "Expert guidance to help grow and protect wealth." },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{s.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{s.desc}</p>
              <a href="#" className="text-blue-600 text-sm font-medium hover:underline">Learn More →</a>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white text-center px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            ["2M+", "Active Users"],
            ["99.9%", "Service Uptime"],
            ["24/7", "Support"],
            ["128-bit", "Encryption"],
          ].map(([stat, label], i) => (
            <div key={i}>
              <p className="text-3xl font-bold text-blue-600">{stat}</p>
              <p className="text-sm text-gray-600">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Banking with Us?</h2>
        <p className="mb-6">Open an account in minutes</p>
        <button
          onClick={() => navigate("/register")}
          className="bg-white text-blue-600 hover:text-blue-700 px-8 py-3 rounded-lg font-semibold shadow transition"
        >
          Open Free Account
        </button>
        <p className="mt-2 text-sm">No hidden fees. No minimum balances.</p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-6 text-center text-sm">
        © 2025 SecureBank. All rights reserved.
      </footer>
    </div>
  );
}
