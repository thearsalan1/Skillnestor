import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";

const CoursePage = () => {
  const backend = import.meta.env.VITE_BACKEND_URL;
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.message("Not Authenticated");
      navigate("/login");
      return;
    }

    const fetchCourses = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${backend}/api/courses`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCourses(res.data.data);
      } catch (error) {
        console.error("Error in fetching courses:", error.message);
        toast.error("Failed to fetch courses");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [navigate]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-900 text-white">
      <header>
        <Navbar />
      </header>
      <main className="p-6 md:p-10 max-w-7xl mx-auto">
        {loading ? (
          <div className="text-center py-20 text-xl animate-pulse">
            Fetching courses...
          </div>
        ) : (
          <div className="flex flex-col gap-10">
            <h1 className="text-5xl font-extrabold text-center mb-8 drop-shadow-lg">
              Courses
            </h1>
            {courses.length === 0 ? (
              <p className="text-center text-lg text-white/80">
                No courses available yet.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course) => (
                  <Link
                    to={`/subjects?courseId=${course._id}`}
                    key={course._id}
                    className="relative group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="mb-6">
                      <h2 className="text-3xl font-bold mb-3 text-white drop-shadow-md transition-all duration-300 group-hover:text-cyan-400">
                        {course.title}
                      </h2>
                      <p className="text-white/80 text-base leading-relaxed line-clamp-4">
                        {course.description}
                      </p>
                    </div>
                    <div className="mt-auto">
                      <span className="text-sm font-medium text-white/60">
                        Category:{" "}
                        <span className="text-white">{course.category}</span>
                      </span>
                    </div>
                    {/* subtle gradient border glow on hover */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 opacity-75 pointer-events-none"></div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default CoursePage;
