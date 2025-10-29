import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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
          headers: {
            Authorization: `Bearer ${token}`,
          },
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
  }, [ navigate]);

  return (
    <div className="max-w-screen min-h-screen bg-gradient-to-br from-blue-950 to-white">
      <header className="flex justify-center">
        <Navbar></Navbar>
      </header>
      <main>
        <div className="p-5 ">
          {loading ? (
            <div className="text-white text-xl text-center py-10 animate-pulse">
              Fetching courses...
            </div>
          ) : (
            <div className=" w-full bg-white/10 backdrop-blur-xl border border-white/30 p-10 shadow-lg">
              <h1 className="text-5xl font-semibold mb-10">Courses</h1>
              {courses.length === 0 ? (
                <p className="text-white text-lg text-center">
                  No courses available yet.
                </p>
              ) : (
                <div className="flex justify-evenly gap-15 flex-wrap">
                  {courses.map((course) => (
                    <Link
                      to={`/subjects?courseId=${course._id}`}
                      key={course._id}
                      className="bg-black text-white w-[340px] text-center p-7 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors duration-300 shadow-md hover:shadow-xl"
                    >
                      <h1 className="text-4xl font-bold mb-5 tracking-tight">
                        {course.title}
                      </h1>
                      <p className="text-base text-left mb-5 leading-relaxed opacity-90">
                        {course.description}
                      </p>
                      <p className="text-sm font-medium text-gray-300">
                        Category:{" "}
                        <span className="text-white">{course.category}</span>
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default CoursePage;
