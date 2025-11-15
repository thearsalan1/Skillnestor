import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-w-screen min-h-screen bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-900 flex flex-col items-center justify-center px-4">
      <h1 className="text-[120px] sm:text-[150px] lg:text-[180px] font-extrabold text-white drop-shadow-2xl text-center heading-shine">
        404
      </h1>

      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-6 sm:p-10 mt-6 max-w-xl text-center animate-fade-in-up">
        <p className="text-2xl sm:text-3xl font-semibold text-white mb-3">
          Page Not Found
        </p>
        <p className="text-white/80 text-base sm:text-lg leading-relaxed">
          The page you're looking for doesn’t exist or might have been moved.
          Let’s get you back on track!
        </p>

        <div className="mt-6 flex justify-center">
          <Link to="/course">
            <div className="relative inline-flex items-center justify-center gap-4 group">
              <div className="absolute inset-0 rounded-xl blur-lg filter bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-60 transition duration-1000 group-hover:opacity-100"></div>
              <div className="relative inline-flex items-center justify-center px-8 py-3 rounded-xl bg-black text-white font-semibold text-base transition-all duration-200 hover:bg-gray-900 hover:shadow-lg hover:-translate-y-0.5">
                Go Back Home
                <svg
                  aria-hidden="true"
                  viewBox="0 0 10 10"
                  width="10"
                  height="10"
                  fill="none"
                  className="ml-2 mt-0.5 -mr-1 stroke-white stroke-2"
                >
                  <path
                    d="M0 5h7"
                    className="opacity-0 group-hover:opacity-100 transition"
                  />
                  <path
                    d="M1 1l4 4-4 4"
                    className="group-hover:translate-x-[3px] transition"
                  />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
