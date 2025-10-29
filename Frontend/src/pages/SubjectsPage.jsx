import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useLocation, useSearchParams } from "react-router-dom";
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
        console.log(res.data);
        setSubjects(res.data.data);
      } catch (error) {
        console.error("Error fetching subjects:", error.message);
      }
    };

    fetchSubjects();
  }, [location.search]);

  return (
    <div className="max-w-screen min-h-screen bg-gradient-to-br from-blue-950 to-white">
      <header className="flex justify-center">
        <Navbar></Navbar>
      </header>
      <main>
        <div className="p-5 ">
          <div className=" w-full bg-white/10 backdrop-blur-xl border border-white/30 p-10 shadow-lg">
            <h1 className="text-5xl font-semibold mb-10">Subjects</h1>
            <div className="flex justify-evenly gap-15 flex-wrap">
              {subjects.map((subject) => (
                <Link
                  key={subject._id}
                  to={`/subjects/pdf?subject=${subject._id}`}
                  className="bg-black text-white w-[340px] text-center p-7 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors duration-300 shadow-md hover:shadow-xl"
                >
                  <h1 className="text-4xl font-bold mb-5 tracking-tight">
                    {subject.title}
                  </h1>
                  <p className="text-base text-left mb-5 leading-relaxed opacity-90">
                    {subject.description}
                  </p>
                  <p className="text-sm font-medium text-gray-300">
                    Notes:{" "}
                    <span className="text-white">{subject.pdfs.length}</span>
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default SubjectsPage;
