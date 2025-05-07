import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";

export default function Navbar() {
  const { user, logoutUser } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-white text-xl font-bold tracking-wide">
          SecureBank
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {user ? (
            <>
              <span className="text-white text-sm">
                {user.full_name} <span className="opacity-75">({user.role})</span>
              </span>
              <button
                onClick={logoutUser}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white hover:underline">
                Login
              </Link>
              <Link
                to="/register"
                className="bg-white text-blue-600 font-medium px-4 py-1.5 rounded hover:bg-gray-100 transition"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          {user ? (
            <>
              <div className="text-white">
                {user.full_name} <span className="opacity-75">({user.role})</span>
              </div>
              <button
                onClick={logoutUser}
                className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="block text-white hover:underline">
                Login
              </Link>
              <Link
                to="/register"
                className="block bg-white text-blue-600 text-center py-2 rounded hover:bg-gray-100 transition"
              >
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
