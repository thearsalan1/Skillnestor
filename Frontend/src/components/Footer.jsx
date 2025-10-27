import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-950 text-white py-8 ">
      <div className="max-w-[90%] mx-auto text-center px-4 sm:px-6">
        {/* Divider */}
        <hr className="border-gray-800 mb-6" />

        {/* Centered Message */}
        <div className="mb-6">
          <h2 className="text-base sm:text-lg font-semibold mb-2">
            SkillNester LMS
          </h2>
          <p className="text-sm sm:text-base opacity-80 leading-relaxed">
            Learn with clarity. Grow with structure. Every course, subject, and
            chapter is crafted to guide your journey.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-4 mt-4">
          {/* GitHub */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center w-16"
          >
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387..." />
              </svg>
            </div>
            <span className="text-xs mt-1">GitHub</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/thearsalan1/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center w-16"
          >
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387..." />
              </svg>
            </div>
            <span className="text-xs mt-1">LinkedIn</span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/___a_r_s_a_l_a_n_/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center w-16"
          >
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387..." />
              </svg>
            </div>
            <span className="text-xs mt-1">Instagram</span>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs opacity-50 mt-6">
          © {new Date().getFullYear()} SkillNester LMS. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
