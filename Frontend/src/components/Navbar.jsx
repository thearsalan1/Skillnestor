import React from "react";
import logo from "../assets/logo.jpg";
const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center w-[90%] p-5 bg-white/10 backdrop-blur-xl border rounded-b-xl border-white/30  shadow-xl">
      <img src={logo} className="w-50" />
      <div className="text-black text-xl">
        Master the skills that matter—your journey starts here.
      </div>
    </div>
  );
};

export default Navbar;
