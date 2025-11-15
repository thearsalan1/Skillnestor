import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const SubjectsPage = () => {
  const backend = import.meta.env.VITE_BACKEND_URL;
  const [subjects, setSubjects] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const query = new URLSearchParams(location.search);
        const courseId = query.get("courseId");
        const res = await axios.get(
          `${backend}/api/subjects/course/${courseId}`
        );
        setSubjects(res.data.data);
      } catch (error) {
        console.error("Error fetching subjects:", error.message);
      }
    };

    fetchSubjects();
  }, [location.search]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-900 text-white">
      <header>
        <Navbar />
      </header>
      <main className="p-6 md:p-10 max-w-7xl mx-auto">
        <div className="flex flex-col gap-10">
          <h1 className="text-5xl font-extrabold text-center mb-8 drop-shadow-lg">
            Subjects
          </h1>

          {subjects.length === 0 ? (
            <p className="text-center text-lg text-white/80">
              No subjects available yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {subjects.map((subject) => (
                <Link
                  key={subject._id}
                  to={`/subjects/pdf?subject=${subject._id}`}
                  className="relative group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold mb-3 text-white drop-shadow-md transition-all duration-300 group-hover:text-cyan-400">
                      {subject.title}
                    </h2>
                    <p className="text-white/80 text-base leading-relaxed line-clamp-4">
                      {subject.description}
                    </p>
                  </div>
                  <div className="mt-auto">
                    <span className="text-sm font-medium text-white/60">
                      Notes:{" "}
                      <span className="text-white">{subject.pdfs.length}</span>
                    </span>
                  </div>
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 opacity-75 pointer-events-none"></div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default SubjectsPage;
