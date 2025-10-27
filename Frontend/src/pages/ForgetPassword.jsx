import React, { useState } from "react";
import sentOtp from "../assets/sentOtp.png";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log("OTP sent to:", email);
    // Trigger OTP send logic here
    setOtpSent(true);
  };

  const handleResetSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("OTP:", otp);
    console.log("New Password:", newPassword);
    // Trigger OTP verification and password reset logic here
    setEmail("");
    setOtp("");
    setNewPassword("");
  };

  return (
    <div className="min-w-screen flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-950 to-white">
      <div className="flex flex-row w-[900px] h-[550px] bg-white/10 backdrop-blur-xl border border-white/30 rounded-xl shadow-lg">
        {/* Left Side: Form */}
        <div className="w-1/2 text-center py-3 px-9">
          <h1 className="font-bold text-gray-900 text-5xl tracking-wider">
            SkillNester
          </h1>
          <p className="text-xl text-gray-700 mt-4 tracking-tight">
            Forgot your password? <br /> Reset it in two easy steps.
          </p>

          {!otpSent ? (
            <form
              className="text-left py-2"
              onSubmit={(e) => handleEmailSubmit(e)}
            >
              <label
                htmlFor="email"
                className="block text-lg text-gray-900 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 rounded-md border border-white/20 outline-none text-gray-100 text-lg bg-blue-900/30 backdrop-blur-md mb-3 placeholder-white/70"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-700 to-blue-500 p-2 w-full rounded-md text-white text-lg cursor-pointer hover:from-blue-600 hover:to-blue-400 transition-all duration-300 shadow-md"
              >
                Send OTP
              </button>
            </form>
          ) : (
            <form
              className="text-left py-2"
              onSubmit={(e) => handleResetSubmit(e)}
            >
              <label
                htmlFor="email"
                className="block text-lg text-gray-900 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 rounded-md border border-white/20 outline-none text-gray-100 text-lg bg-blue-900/30 backdrop-blur-md mb-3 placeholder-white/70"
                placeholder="Re-enter your email"
              />

              <label htmlFor="otp" className="block text-lg text-gray-900 mb-2">
                OTP
              </label>
              <input
                type="text"
                required
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full p-2 rounded-md border border-white/20 outline-none text-gray-100 text-lg bg-blue-900/30 backdrop-blur-md mb-3 placeholder-white/70"
                placeholder="Enter OTP"
              />

              <label
                htmlFor="newPassword"
                className="block text-lg text-gray-900 mb-2"
              >
                New Password
              </label>
              <input
                type="password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full p-2 rounded-md border border-white/20 outline-none text-gray-100 text-lg bg-blue-900/30 backdrop-blur-md mb-3 placeholder-white/70"
                placeholder="Enter new password"
              />

              <button
                type="submit"
                className="bg-gradient-to-r from-blue-700 to-blue-500 p-2 w-full rounded-md text-white text-lg cursor-pointer hover:from-blue-600 hover:to-blue-400 transition-all duration-300 shadow-md"
              >
                Reset Password
              </button>
            </form>
          )}

          <div className="flex flex-col gap-2 mt-4">
            <a
              href="/login"
              className="text-sm text-gray-700 hover:underline hover:text-blue-500 transition duration-300"
            >
              Remembered your password?{" "}
              <span className="font-semibold text-blue-600">Sign In</span>
            </a>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-1/2">
          <img
            src={sentOtp}
            alt="Forgot Password Visual"
            className="object-cover h-full rounded-tr-xl rounded-br-xl opacity-70"
          />
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
