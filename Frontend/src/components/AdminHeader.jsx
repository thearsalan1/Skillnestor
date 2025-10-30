import React, { useState } from "react";
import logo from "../assets/Logo.jpg";

const AdminHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-950 text-white">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src={logo}
            alt="SkillNester Logo"
            className="w-[150px] sm:w-[180px] lg:w-[200px]"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-base lg:text-lg pr-4">
          <a href="/course" className="hover:text-blue-300 transition">
            Home
          </a>
          <a href="/admin/courses" className="hover:text-blue-300 transition">
            Courses
          </a>
          <a href="/admin/subjects" className="hover:text-blue-300 transition">
            Subjects
          </a>
          <a href="/admin/notes" className="hover:text-blue-300 transition">
            Notes
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
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
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden px-4 pb-4 flex flex-col gap-3 text-base bg-blue-900">
          <a href="/course" className="hover:text-blue-300 transition">
            Home
          </a>
          <a href="/admin/courses" className="hover:text-blue-300 transition">
            Courses
          </a>
          <a href="/admin/subjects" className="hover:text-blue-300 transition">
            Subjects
          </a>
          <a href="/admin/notes" className="hover:text-blue-300 transition">
            Notes
          </a>
        </nav>
      )}
    </header>
  );
};

export default AdminHeader;
