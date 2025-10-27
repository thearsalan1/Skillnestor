import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-w-screen min-h-screen bg-gradient-to-br from-blue-950 to-white">
      <div className="min-h-screen flex flex-col items-center justify-evenly px-4 sm:px-6">
        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-blue-900 heading-shine text-center mt-10">
          Welcome to SkillNester LMS
        </h1>

        {/* Subheading + Buttons */}
        <div className="flex flex-col justify-center items-center text-center mt-6">
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 mb-4">
            Learn. Grow. Skill Up. Your journey starts here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            {/* Login Button */}
            <Link to="/login">
              <div className="relative inline-flex items-center justify-center gap-4 group">
                <div className="absolute inset-0 duration-1000 opacity-60 transition-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
                <div
                  role="button"
                  className="group relative inline-flex items-center justify-center text-sm sm:text-base rounded-xl bg-gray-900 px-6 py-2 sm:px-8 sm:py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
                  title="Login"
                >
                  Login
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 10 10"
                    height="10"
                    width="10"
                    fill="none"
                    className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
                  >
                    <path
                      d="M0 5h7"
                      className="transition opacity-0 group-hover:opacity-100"
                    />
                    <path
                      d="M1 1l4 4-4 4"
                      className="transition group-hover:translate-x-[3px]"
                    />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Register Button */}
            <Link to="/register">
              <div className="relative inline-flex items-center justify-center gap-4 group">
                <div className="absolute inset-0 duration-1000 opacity-60 transition-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
                <div
                  role="button"
                  className="group relative inline-flex items-center justify-center text-sm sm:text-base rounded-xl bg-gray-900 px-6 py-2 sm:px-8 sm:py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
                  title="Register"
                >
                  Register
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 10 10"
                    height="10"
                    width="10"
                    fill="none"
                    className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
                  >
                    <path
                      d="M0 5h7"
                      className="transition opacity-0 group-hover:opacity-100"
                    />
                    <path
                      d="M1 1l4 4-4 4"
                      className="transition group-hover:translate-x-[3px]"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Description */}
      <main className="flex flex-col justify-center items-center max-w-[90%] mx-auto px-4 sm:px-6 text-center">
        <p className="mb-5">
          <span className="text-2xl sm:text-3xl font-semibold">
            Welcome to SkillNester LMS —{" "}
          </span>
          <span className="text-xl sm:text-2xl font-medium">
            your personalized learning platform.
          </span>
        </p>

        <p className="text-base sm:text-lg text-gray-700 mb-5 leading-relaxed">
          Dive into a curated library of courses, each thoughtfully organized
          into subjects and chapters that guide your progress step by step.
          Whether you're exploring foundational topics or mastering advanced
          concepts, SkillNester makes navigation effortless and engaging. With a
          clean interface, PDF-powered modules, and a focus on clarity, every
          part of your journey feels structured and rewarding.
        </p>

        <p className="text-lg sm:text-xl font-semibold mb-5">
          SkillNester isn’t just where you learn — it’s where your growth
          unfolds, one chapter at a time.
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
