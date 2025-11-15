import React, { useEffect, useState } from "react";
import logo from "../assets/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("role");
    setIsAdmin(role === "admin");
  }, []);

  const handleOnClick = () => {
    navigate("/admin");
    setMenuOpen(false);
  };

  const handleOnLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
    setMenuOpen(false);
  };

  return (
    <nav className="w-full px-6 py-4 sm:px-12 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 shadow-lg rounded-b-2xl relative">
      <div className="flex items-center justify-between">
        <Link to="/course" className="flex items-center gap-3">
          <img
            src={logo}
            alt="SkillNester Logo"
            className="w-28 sm:w-32 md:w-36 object-contain cursor-pointer hover:scale-110 transition-transform duration-300"
          />
          <span className="hidden sm:block text-white text-xl font-bold tracking-wide">
            SkillNester LMS
          </span>
        </Link>

        <div className="hidden sm:flex flex-1 text-center sm:text-left">
          <span className="text-white text-sm sm:text-base font-medium ml-2">
            Learn. Grow. Skill Up. Start your journey today.
          </span>
        </div>

        <div className="sm:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-3xl focus:outline-none"
          >
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>

        <div className="hidden sm:flex gap-3">
          {isAdmin && (
            <button
              onClick={handleOnClick}
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Admin
            </button>
          )}
          <button
            onClick={handleOnLogout}
            className="px-5 py-2 rounded-lg bg-red-500 text-white font-semibold shadow-md hover:shadow-xl hover:scale-105 hover:bg-red-600 transition-all duration-300"
          >
            Log Out
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="sm:hidden mt-4 flex flex-col gap-3">
          {isAdmin && (
            <button
              onClick={handleOnClick}
              className="w-full px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Admin
            </button>
          )}
          <button
            onClick={handleOnLogout}
            className="w-full px-5 py-2 rounded-lg bg-red-500 text-white font-semibold shadow-md hover:shadow-xl hover:scale-105 hover:bg-red-600 transition-all duration-300"
          >
            Log Out
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
