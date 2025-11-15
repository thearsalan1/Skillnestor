import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-blue-900 via-indigo-900 to-purple-900 text-white flex flex-col">
      {/* HERO SECTION */}
      <section className="flex flex-col items-center text-center px-6 pt-20 pb-12 sm:pt-28">
        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight drop-shadow-xl">
          Level Up Your Skills
          <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400 bg-clip-text text-transparent">
            With SkillNester LMS
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-lg sm:text-xl text-blue-200 max-w-xl leading-relaxed">
          The smartest way to learn — structured courses, chapters, and
          resources built to help you grow faster.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link to="/login">
            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-white font-semibold shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all">
              Login
            </button>
          </Link>

          <Link to="/register">
            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 text-white font-semibold shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all">
              Register
            </button>
          </Link>
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 pb-16 max-w-6xl mx-auto w-full">
        {/* Card 1 */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition shadow-lg">
          <h3 className="text-xl font-bold mb-2 text-cyan-300">
            Structured Learning
          </h3>
          <p className="text-sm text-blue-200">
            Courses → Subjects → Chapters. A fully organized learning system.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition shadow-lg">
          <h3 className="text-xl font-bold mb-2 text-pink-300">PDF Modules</h3>
          <p className="text-sm text-blue-200">
            Clean and fast-loading PDFs for every chapter.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition shadow-lg">
          <h3 className="text-xl font-bold mb-2 text-yellow-300">
            Admin Control
          </h3>
          <p className="text-sm text-blue-200">
            Manage courses, subjects, chapters, and users with ease.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
