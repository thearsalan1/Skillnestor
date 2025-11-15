import React, { useState } from "react";
import sentOtp from "../assets/sentOtp.png";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${backendUrl}/api/auth/forgot-password`, {
        email,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        setOtpSent(true);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  const handleResetSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${backendUrl}/api/auth/reset-password`, {
        email,
        otp,
        newPassword,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        setTimeout(() => {
          toast.info("Login using your new password");
          navigate("/login");
        }, 1200);
        setOtp("");
        setNewPassword("");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-900 flex items-center justify-center px-4 py-10">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
        {/* LEFT: FORM */}
        <div className="w-full md:w-1/2 p-8 sm:p-10 flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-lg">
            SkillNester
          </h1>
          <p className="text-blue-200 mt-2 text-lg sm:text-xl">
            Forgot your password? <br /> Reset it in two easy steps.
          </p>

          {!otpSent && (
            <form className="mt-6 flex flex-col" onSubmit={handleEmailSubmit}>
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
              <button
                type="submit"
                className="w-full p-3 rounded-lg bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-white font-semibold shadow-lg hover:shadow-2xl hover:-translate-y-1 transition"
              >
                Send OTP
              </button>
            </form>
          )}

          {otpSent && (
            <form className="mt-6 flex flex-col" onSubmit={handleResetSubmit}>
              <label className="text-white/80 text-sm sm:text-base mb-1">
                Email
              </label>
              <input
                type="email"
                required
                disabled
                value={email}
                className="w-full p-3 rounded-lg mb-4 bg-white/10 border border-white/20 text-white/70 placeholder-white/50"
              />

              <label className="text-white/80 text-sm sm:text-base mb-1">
                OTP
              </label>
              <input
                type="text"
                required
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                className="w-full p-3 rounded-lg mb-4 bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              />

              <label className="text-white/80 text-sm sm:text-base mb-1">
                New Password
              </label>
              <input
                type="password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
                className="w-full p-3 rounded-lg mb-4 bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              />

              <button
                type="submit"
                className="w-full p-3 rounded-lg bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-white font-semibold shadow-lg hover:shadow-2xl hover:-translate-y-1 transition"
              >
                Reset Password
              </button>
            </form>
          )}

          <div className="flex flex-col gap-2 mt-4">
            <a
              href="/login"
              className="text-sm text-white/80 hover:underline hover:text-cyan-400 transition duration-300"
            >
              Remembered your password?{" "}
              <span className="font-semibold">Sign In</span>
            </a>
          </div>
        </div>

        {/* RIGHT: IMAGE (HIDDEN ON SMALL SCREENS) */}
        <div className="hidden md:block w-1/2 h-64 md:h-auto">
          <img
            src={sentOtp}
            alt="Forgot Password Visual"
            className="w-full h-full object-cover opacity-90"
          />
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
