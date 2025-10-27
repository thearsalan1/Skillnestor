import React, { useState } from "react";
import registerImage from "../assets/registerImage.png";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnClick = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    setName("");
    setEmail("");
    setPassword("");
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
            Welcome mate👋!! <br /> Enter your details to register
          </p>

          <form className="text-left py-2" onSubmit={(e) => handleOnClick(e)}>
            <label htmlFor="name" className="block text-lg text-gray-900 mb-2">
              Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="w-full p-2 rounded-md border border-white/20 outline-none text-gray-100 text-lg bg-blue-900/30 backdrop-blur-md mb-3 placeholder-white/70"
              placeholder="Enter your name"
            />

            <label htmlFor="email" className="block text-lg text-gray-900 mb-2">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="w-full p-2 rounded-md border border-white/20 outline-none text-gray-100 text-lg bg-blue-900/30 backdrop-blur-md mb-3 placeholder-white/70"
              placeholder="Enter your email"
            />

            <label
              htmlFor="password"
              className="block text-lg text-gray-900 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="w-full p-2 rounded-md border border-white/20 outline-none text-gray-100 text-lg bg-blue-900/30 backdrop-blur-md mb-3 placeholder-white/70"
              placeholder="Enter your password"
            />

            <div className="flex flex-col gap-2 mt-2">
              <a
                href="/login"
                className="text-sm text-gray-700 hover:underline hover:text-blue-500 transition duration-300  mb-4"
              >
                Already have an account?{" "}
                <span className="font-semibold text-blue-600">Sign In</span>
              </a>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-700 to-blue-500 p-2 w-full rounded-md text-white text-lg cursor-pointer hover:from-blue-600 hover:to-blue-400 transition-all duration-300 shadow-md"
            >
              Continue
            </button>
          </form>
        </div>

        {/* Right Side: Image */}
        <div className="w-1/2">
          <img
            src={registerImage}
            alt="Register Visual"
            className="object-cover h-full rounded-tr-xl rounded-br-xl opacity-70"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
