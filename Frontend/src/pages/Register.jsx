import React, { useEffect, useState } from "react";
import registerImage from "../assets/registerImage.png";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const backend = import.meta.env.VITE_BACKEND_URL;

  const handleOnClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${backend}/api/auth/register`, {
        name,
        email,
        password,
      });
      toast.success("Registration successful 🎉");

      const token = res.data.token;
      const role = res.data.user.role;
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);

      setTimeout(() => navigate("/course"), 1000);
    } catch (err) {
      const message =
        err.response?.data?.message || err.message || "Unknown error";
      toast.error(`Registration failed: ${message}`);
    }
    setName("");
    setEmail("");
    setPassword("");
    setLoading(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigate("/course");
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-900 flex items-center justify-center px-4 py-10">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
        {/* LEFT: FORM */}
        <div className="w-full md:w-1/2 p-8 sm:p-10 flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-lg">
            SkillNester
          </h1>
          <p className="text-blue-200 mt-2 text-lg sm:text-xl">
            Welcome 👋! Enter your details to register
          </p>

          <form className="mt-6 flex flex-col" onSubmit={handleOnClick}>
            <label className="text-white/80 text-sm sm:text-base mb-1">
              Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg mb-4 bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />

            <label className="text-white/80 text-sm sm:text-base mb-1">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg mb-4 bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />

            <label className="text-white/80 text-sm sm:text-base mb-1">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full p-3 rounded-lg mb-4 bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />

            <div className="flex flex-col sm:flex-row sm:justify-between gap-2 mb-6 text-sm text-white/80">
              <a href="/login" className="hover:text-cyan-400 transition">
                Already have an account?{" "}
                <span className="font-semibold">Sign In</span>
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full p-3 rounded-lg bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-white font-semibold shadow-lg hover:shadow-2xl hover:-translate-y-1 transition"
            >
              {loading ? "Registering..." : "Continue"}
            </button>
          </form>
        </div>

        {/* RIGHT: IMAGE (HIDDEN ON SMALL SCREENS) */}
        <div className="hidden md:block w-1/2 h-64 md:h-auto">
          <img
            src={registerImage}
            alt="Register Visual"
            className="w-full h-full object-cover opacity-90"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
