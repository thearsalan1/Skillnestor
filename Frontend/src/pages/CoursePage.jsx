import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const courses = [
  {
    title: "Introduction to Programming",
    description:
      "Learn the basics of coding using languages like C and Python. Ideal for beginners with no prior experience.",
    category: "Computer Science",
  },
  {
    title: "Engineering Mathematics",
    description:
      "Explore calculus, linear algebra, and differential equations tailored for engineering applications.",
    category: "Mathematics",
  },
  {
    title: "Digital Electronics",
    description:
      "Understand logic gates, flip-flops, and circuit design fundamentals used in modern electronics.",
    category: "Electronics",
  },
  {
    title: "Thermodynamics",
    description:
      "Study the principles of heat, energy, and work in mechanical systems and real-world applications.",
    category: "Mechanical",
  },
  {
    title: "Database Management Systems",
    description:
      "Learn how data is stored, queried, and managed using relational databases like MySQL and PostgreSQL.",
    category: "Computer Science",
  },
  {
    title: "Environmental Studies",
    description:
      "Gain awareness of ecological systems, sustainability, and environmental impact in engineering.",
    category: "Humanities",
  },
];

const CoursePage = () => {
  return (
    <div className="max-w-screen min-h-screen bg-gradient-to-br from-blue-950 to-white">
      <header className="flex justify-center">
        <Navbar></Navbar>
      </header>
      <main>
        <div className="p-5 ">
          <div className=" w-full bg-white/10 backdrop-blur-xl border border-white/30 p-10 shadow-lg">
            <h1 className="text-5xl font-semibold mb-10">Courses</h1>
            <div className="flex justify-evenly gap-15 flex-wrap">
              {courses.map((course) => (
                <Link
                  to={`/subjects`}
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
          </div>
        </div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default CoursePage;
