import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const subjects = [
  {
    title: "Data Structures",
    description:
      "Learn how to organize and manage data efficiently using arrays, linked lists, stacks, queues, trees, and graphs.",
    course: "B.Tech Computer Science",
  },
  {
    title: "Digital Electronics",
    description:
      "Explore logic gates, flip-flops, and circuit design fundamentals used in modern digital systems.",
    course: "B.Tech Electronics",
  },
  {
    title: "Engineering Mathematics",
    description:
      "Master calculus, linear algebra, and differential equations tailored for engineering applications.",
    course: "B.Tech All Branches",
  },
  {
    title: "Thermodynamics",
    description:
      "Understand the principles of heat, energy, and work in mechanical systems and real-world applications.",
    course: "B.Tech Mechanical",
  },
  {
    title: "Operating Systems",
    description:
      "Dive into process management, memory allocation, file systems, and scheduling algorithms.",
    course: "B.Tech Computer Science",
  },
  {
    title: "Environmental Studies",
    description:
      "Gain awareness of ecological systems, sustainability, and environmental impact in engineering.",
    course: "B.Tech All Branches",
  },
  {
    title: "Database Management Systems",
    description:
      "Learn how data is stored, queried, and managed using relational databases like MySQL and PostgreSQL.",
    course: "B.Tech Computer Science",
  },
];

const SubjectsPage = () => {
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
              {subjects.map((subject) => (
                <Link
                  to={`/${subject.title}`}
                  className="bg-black text-white w-[340px] text-center p-7 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors duration-300 shadow-md hover:shadow-xl"
                >
                  <h1 className="text-4xl font-bold mb-5 tracking-tight">
                    {subject.title}
                  </h1>
                  <p className="text-base text-left mb-5 leading-relaxed opacity-90">
                    {subject.description}
                  </p>
                  <p className="text-sm font-medium text-gray-300">
                    Category:{" "}
                    <span className="text-white">{subject.course}</span>
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
