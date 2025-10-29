import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isAdmin, setIsAdmin] = useState(true);
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/admin");
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center w-full sm:w-[90%] mx-auto p-4 sm:p-5 bg-white/10 backdrop-blur-xl border border-white/30 rounded-b-xl shadow-xl gap-4 sm:gap-0">
      {/* Logo */}
      <div className="flex justify-center sm:justify-start w-full sm:w-auto">
        <img src={logo} alt="Logo" className="w-28 sm:w-40 object-contain" />
      </div>

      {/* Admin Button */}
      {isAdmin && (
        <button
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-900 transition-colors text-sm sm:text-base"
          onClick={handleOnClick}
        >
          Admin
        </button>
      )}

      {/* Tagline */}
      <div className="text-center sm:text-right text-black text-base sm:text-xl font-medium w-full sm:w-auto">
        Master the skills that matter—your journey starts here.
      </div>
    </div>
  );
};

export default Navbar;
