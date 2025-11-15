import React, { useState } from "react";
import logo from "../assets/Logo.jpg";

const AdminHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/course" },
    { label: "Dashboard", href: "/admin" },
    { label: "Courses", href: "/admin/courses" },
    { label: "Subjects", href: "/admin/subjects" },
    { label: "Notes", href: "/admin/notes" },
  ];

  return (
    <header className="bg-blue-950 text-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src={logo}
            alt="SkillNester Logo"
            className="w-[160px] sm:w-[200px] lg:w-[220px] transition-all duration-300"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-base lg:text-lg font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-blue-300 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-blue-900 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
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
        <nav className="md:hidden bg-blue-900 px-4 pb-4 flex flex-col gap-3 text-base font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-blue-300 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default AdminHeader;
