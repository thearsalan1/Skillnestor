import React from "react";
import AdminHeader from "../components/AdminHeader";
import Footer from "../components/Footer";

const AdminCourses = () => {
  const courses = [
    {
      id: "CSE101",
      title: "Introduction to Programming",
      description:
        "Learn the fundamentals of coding using C and Python, ideal for beginners stepping into the world of software.",
      category: "Computer Science",
      subjects: [
        {
          title: "C Basics",
          description: "Syntax, variables, loops, and functions in C.",
        },
        {
          title: "Python Essentials",
          description: "Data types, control flow, and scripting in Python.",
        },
        {
          title: "Problem Solving",
          description: "Logic building and algorithmic thinking.",
        },
      ],
    },
    {
      id: "ECE201",
      title: "Digital Electronics",
      description:
        "Explore the logic behind modern electronics, from gates to flip-flops and circuit design.",
      category: "Electronics",
      subjects: [
        {
          title: "Logic Gates",
          description: "AND, OR, NOT, NAND, NOR, XOR, XNOR.",
        },
        {
          title: "Combinational Circuits",
          description: "Adders, multiplexers, encoders, decoders.",
        },
        {
          title: "Sequential Circuits",
          description: "Flip-flops, counters, and registers.",
        },
      ],
    },
    {
      id: "ME301",
      title: "Thermodynamics",
      description:
        "Understand the principles of energy, heat, and work in mechanical systems.",
      category: "Mechanical",
      subjects: [
        {
          title: "Laws of Thermodynamics",
          description: "Zeroth to Third Law explained.",
        },
        {
          title: "Heat Transfer",
          description: "Conduction, convection, and radiation.",
        },
        {
          title: "Entropy & Enthalpy",
          description: "Energy transformations and system equilibrium.",
        },
      ],
    },
    {
      id: "CSE205",
      title: "Database Management Systems",
      description:
        "Master relational databases, SQL, and data modeling for real-world applications.",
      category: "Computer Science",
      subjects: [
        {
          title: "ER Modeling",
          description: "Entity-relationship diagrams and schema design.",
        },
        {
          title: "SQL Queries",
          description: "CRUD operations, joins, and subqueries.",
        },
        { title: "Normalization", description: "1NF to 3NF and beyond." },
      ],
    },
    {
      id: "HUM101",
      title: "Environmental Studies",
      description:
        "Gain awareness of ecological systems, sustainability, and environmental impact.",
      category: "Humanities",
      subjects: [
        {
          title: "Ecosystems",
          description: "Structure, function, and biodiversity.",
        },
        {
          title: "Pollution",
          description: "Air, water, soil, and noise pollution.",
        },
        {
          title: "Sustainable Development",
          description: "Green practices and environmental ethics.",
        },
      ],
    },

    {
      id: "CSE310",
      title: "Web Development",
      description:
        "Build modern, responsive websites using HTML, CSS, JavaScript, and React.",
      category: "Computer Science",
      subjects: [
        {
          title: "HTML & CSS",
          description:
            "Structure and style web pages with semantic markup and flex/grid layouts.",
        },
        {
          title: "JavaScript",
          description: "DOM manipulation, ES6 features, and event handling.",
        },
        {
          title: "React Basics",
          description: "Components, props, state, and JSX.",
        },
      ],
    },
    {
      id: "ART105",
      title: "Graphic Design Fundamentals",
      description:
        "Explore visual storytelling through typography, layout, and color theory.",
      category: "Design",
      subjects: [
        {
          title: "Typography",
          description: "Font pairing, hierarchy, and readability.",
        },
        {
          title: "Color Theory",
          description: "Contrast, harmony, and emotional impact.",
        },
        {
          title: "Layout Design",
          description: "Grids, alignment, and composition.",
        },
      ],
    },
    {
      id: "BUS220",
      title: "Entrepreneurship & Innovation",
      description:
        "Learn how to turn ideas into ventures through lean startup principles and market validation.",
      category: "Business",
      subjects: [
        {
          title: "Startup Models",
          description: "Lean canvas, MVP, and pivoting strategies.",
        },
        {
          title: "Market Research",
          description: "Customer discovery and competitive analysis.",
        },
        {
          title: "Pitching & Funding",
          description:
            "Crafting investor decks and understanding funding rounds.",
        },
      ],
    },
    {
      id: "PHY102",
      title: "Classical Mechanics",
      description:
        "Dive into Newtonian physics, motion, and forces in physical systems.",
      category: "Physics",
      subjects: [
        {
          title: "Kinematics",
          description: "Motion in one and two dimensions.",
        },
        {
          title: "Dynamics",
          description: "Forces, laws of motion, and friction.",
        },
        {
          title: "Energy & Momentum",
          description: "Work, power, collisions, and conservation laws.",
        },
      ],
    },
    {
      id: "PSY110",
      title: "Introduction to Psychology",
      description:
        "Understand human behavior, cognition, and emotion through psychological theories.",
      category: "Humanities",
      subjects: [
        {
          title: "Cognitive Psychology",
          description: "Memory, perception, and problem-solving.",
        },
        {
          title: "Behavioral Psychology",
          description: "Conditioning, reinforcement, and learning.",
        },
        {
          title: "Social Psychology",
          description:
            "Group dynamics, conformity, and interpersonal influence.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-white">
      <header>
        <AdminHeader />
      </header>

      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8">
        {/* Add Course Form */}
        <section className="bg-black lg:h-[650px] text-white rounded-xl p-6 shadow-lg">
          <h1 className="text-center text-3xl sm:text-5xl font-semibold mb-6">
            Add Course
          </h1>
          <form className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-lg mb-2">
                Title
              </label>
              <input
                type="text"
                placeholder="Enter Course title"
                className="w-full p-3 bg-gray-800 text-white rounded outline-none text-lg"
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-lg mb-2">
                Description
              </label>
              <textarea
                rows={5}
                placeholder="Enter Course Description"
                className="w-full p-3 bg-gray-800 text-white rounded outline-none text-lg resize-none"
              />
            </div>
            <div>
              <label htmlFor="category" className="block text-lg mb-2">
                Category
              </label>
              <input
                type="text"
                placeholder="Enter Course category"
                className="w-full p-3 bg-gray-800 text-white rounded outline-none text-lg"
              />
            </div>
            <button className="w-full bg-blue-700 py-3 rounded-xl text-lg text-white hover:bg-blue-600 transition">
              Add
            </button>
          </form>
        </section>

        {/* Courses Table */}
        <section className="bg-black lg:h-[650px] lg:overflow-x-auto rounded-xl shadow-lg overflow-x-auto">
          <table className="min-w-full border rounded-md">
            <thead className="bg-black text-white text-left text-sm sm:text-md font-semibold sticky top-0 z-10">
              <tr>
                <th className="px-4 py-3">Course Id</th>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Description</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Total Subjects</th>
                <th className="px-4 py-3">Delete</th>
              </tr>
            </thead>
            <tbody className="text-white text-sm sm:text-base">
              {courses.map((course) => (
                <tr
                  key={course.id}
                  className="bg-gray-900 hover:bg-gray-800 transition"
                >
                  <td className="px-4 py-2">{course.id}</td>
                  <td className="px-4 py-2">{course.title}</td>
                  <td className="px-4 py-2">{course.description}</td>
                  <td className="px-4 py-2">{course.category}</td>
                  <td className="px-4 py-2">{course.subjects.length}</td>
                  <td className="px-4 py-2">
                    <button className="px-3 py-1 bg-red-500 hover:bg-red-700 text-white rounded-md text-sm">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default AdminCourses;
