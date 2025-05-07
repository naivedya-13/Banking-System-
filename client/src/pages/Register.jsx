import { useState } from "react";
import { register } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "", full_name: "", role: "customer" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      await register(form);
      setSuccess("Registration successful! Please login.");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      {error && <div className="text-red-500 mb-2">{error}</div>}
      {success && <div className="text-green-500 mb-2">{success}</div>}
      <form onSubmit={handleSubmit} className="space-y-3">
        <input name="username" placeholder="Username" className="w-full border p-2" value={form.username} onChange={handleChange} required />
        <input name="email" placeholder="Email" className="w-full border p-2" value={form.email} onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" className="w-full border p-2" value={form.password} onChange={handleChange} required />
        <input name="full_name" placeholder="Full Name" className="w-full border p-2" value={form.full_name} onChange={handleChange} required />
        <select name="role" className="w-full border p-2" value={form.role} onChange={handleChange}>
          <option value="customer">Customer</option>
          <option value="banker">Banker</option>
        </select>
        <button className="w-full bg-blue-600 text-white py-2 rounded">Register</button>
      </form>
    </div>
  );
}
