import { useEffect, useState } from "react";
import loginImg from "../assets/loginImage.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const handleOnClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${backendUrl}/api/auth/login`, {
        email,
        password,
      });
      const token = res.data.token;
      const role = res.data.user.role;

      localStorage.setItem("token", token);
      localStorage.setItem("role", role);

      toast.success("Login successful! 🎉");
      navigate("/course");
    } catch (err) {
      const message =
        err.response?.data?.message || err.message || "Unknown error";
      toast.error(`Login failed: ${message}`);
    }
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
            Welcome 👋! Enter your details to login
          </p>

          <form className="mt-6 flex flex-col" onSubmit={handleOnClick}>
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
              <a href="/register" className="hover:text-cyan-400 transition">
                Don't have an account?{" "}
                <span className="font-semibold">Register</span>
              </a>
              <a
                href="/forgot-password"
                className="hover:text-cyan-400 transition"
              >
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full p-3 rounded-lg bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-white font-semibold shadow-lg hover:shadow-2xl hover:-translate-y-1 transition"
            >
              {loading ? "Logging in..." : "Continue"}
            </button>
          </form>
        </div>

        {/* RIGHT: IMAGE (HIDDEN ON SMALL SCREENS) */}
        <div className="hidden md:block w-1/2 h-64 md:h-auto">
          <img
            src={loginImg}
            alt="Login Visual"
            className="w-full h-full object-cover opacity-90"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
