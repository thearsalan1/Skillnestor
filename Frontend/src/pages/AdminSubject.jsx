import AdminHeader from "../components/AdminHeader";
import Footer from "../components/Footer";

const AdminSubject = () => {
  const subjects = [
    {
      id: "SUB101",
      title: "C Basics",
      description: "Syntax, variables, loops, and functions in C.",
      notes: "Focus on procedural logic and memory management.",
      course: "CSE101",
    },
    {
      id: "SUB102",
      title: "Python Essentials",
      description: "Data types, control flow, and scripting in Python.",
      notes: "Use Jupyter notebooks for practice.",
      course: "CSE101",
    },
    {
      id: "SUB103",
      title: "Problem Solving",
      description: "Logic building and algorithmic thinking.",
      notes: "Practice with HackerRank challenges.",
      course: "CSE101",
    },
    {
      id: "SUB201",
      title: "Logic Gates",
      description: "AND, OR, NOT, NAND, NOR, XOR, XNOR.",
      notes: "Use truth tables and circuit diagrams.",
      course: "ECE201",
    },
    {
      id: "SUB202",
      title: "Combinational Circuits",
      description: "Adders, multiplexers, encoders, decoders.",
      notes: "Simulate using Logisim.",
      course: "ECE201",
    },
    {
      id: "SUB203",
      title: "Sequential Circuits",
      description: "Flip-flops, counters, and registers.",
      notes: "Understand timing diagrams.",
      course: "ECE201",
    },
    {
      id: "SUB301",
      title: "Laws of Thermodynamics",
      description: "Zeroth to Third Law explained.",
      notes: "Use real-world examples like engines.",
      course: "ME301",
    },
    {
      id: "SUB302",
      title: "Heat Transfer",
      description: "Conduction, convection, and radiation.",
      notes: "Include Stefan-Boltzmann law.",
      course: "ME301",
    },
    {
      id: "SUB303",
      title: "Entropy & Enthalpy",
      description: "Energy transformations and system equilibrium.",
      notes: "Focus on closed and open systems.",
      course: "ME301",
    },
    {
      id: "SUB401",
      title: "ER Modeling",
      description: "Entity-relationship diagrams and schema design.",
      notes: "Use draw.io for diagrams.",
      course: "CSE205",
    },
    {
      id: "SUB402",
      title: "SQL Queries",
      description: "CRUD operations, joins, and subqueries.",
      notes: "Practice with MySQL Workbench.",
      course: "CSE205",
    },
    {
      id: "SUB403",
      title: "Normalization",
      description: "1NF to 3NF and beyond.",
      notes: "Avoid redundancy and anomalies.",
      course: "CSE205",
    },
    {
      id: "SUB501",
      title: "Ecosystems",
      description: "Structure, function, and biodiversity.",
      notes: "Include food chains and webs.",
      course: "HUM101",
    },
    {
      id: "SUB502",
      title: "Pollution",
      description: "Air, water, soil, and noise pollution.",
      notes: "Discuss causes and mitigation.",
      course: "HUM101",
    },
    {
      id: "SUB503",
      title: "Sustainable Development",
      description: "Green practices and environmental ethics.",
      notes: "Include SDGs and case studies.",
      course: "HUM101",
    },
    {
      id: "SUB601",
      title: "HTML & CSS",
      description:
        "Structure and style web pages with semantic markup and flex/grid layouts.",
      notes: "Use CodePen for live previews.",
      course: "CSE310",
    },
    {
      id: "SUB602",
      title: "JavaScript",
      description: "DOM manipulation, ES6 features, and event handling.",
      notes: "Practice with interactive widgets.",
      course: "CSE310",
    },
    {
      id: "SUB603",
      title: "React Basics",
      description: "Components, props, state, and JSX.",
      notes: "Build a simple portfolio site.",
      course: "CSE310",
    },
    {
      id: "SUB701",
      title: "Typography",
      description: "Font pairing, hierarchy, and readability.",
      notes: "Use Google Fonts and Figma.",
      course: "ART105",
    },
    {
      id: "SUB702",
      title: "Color Theory",
      description: "Contrast, harmony, and emotional impact.",
      notes: "Explore Adobe Color palettes.",
      course: "ART105",
    },
    {
      id: "SUB703",
      title: "Layout Design",
      description: "Grids, alignment, and composition.",
      notes: "Design mockups in Canva.",
      course: "ART105",
    },
    {
      id: "SUB801",
      title: "Startup Models",
      description: "Lean canvas, MVP, and pivoting strategies.",
      notes: "Use real startup case studies.",
      course: "BUS220",
    },
    {
      id: "SUB802",
      title: "Market Research",
      description: "Customer discovery and competitive analysis.",
      notes: "Conduct surveys and interviews.",
      course: "BUS220",
    },
    {
      id: "SUB803",
      title: "Pitching & Funding",
      description: "Crafting investor decks and understanding funding rounds.",
      notes: "Study Shark Tank pitches.",
      course: "BUS220",
    },
    {
      id: "SUB901",
      title: "Kinematics",
      description: "Motion in one and two dimensions.",
      notes: "Use motion graphs and equations.",
      course: "PHY102",
    },
    {
      id: "SUB902",
      title: "Dynamics",
      description: "Forces, laws of motion, and friction.",
      notes: "Include free-body diagrams.",
      course: "PHY102",
    },
    {
      id: "SUB903",
      title: "Energy & Momentum",
      description: "Work, power, collisions, and conservation laws.",
      notes: "Use lab simulations.",
      course: "PHY102",
    },
    {
      id: "SUB1001",
      title: "Cognitive Psychology",
      description: "Memory, perception, and problem-solving.",
      notes: "Include famous experiments.",
      course: "PSY110",
    },
    {
      id: "SUB1002",
      title: "Behavioral Psychology",
      description: "Conditioning, reinforcement, and learning.",
      notes: "Study Pavlov and Skinner.",
      course: "PSY110",
    },
    {
      id: "SUB1003",
      title: "Social Psychology",
      description: "Group dynamics, conformity, and interpersonal influence.",
      notes: "Explore Milgram and Asch studies.",
      course: "PSY110",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-white">
      <header>
        <AdminHeader />
      </header>

      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8">
        {/* Add Subject Form */}
        <section className="bg-black h-[600px] text-white rounded-xl p-6 shadow-lg">
          <h1 className="text-center text-3xl sm:text-5xl font-semibold mb-6">
            Add Subject
          </h1>
          <form className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-lg mb-2">
                Title
              </label>
              <input
                type="text"
                placeholder="Enter Subject title"
                className="w-full p-3 bg-gray-800 text-white rounded outline-none text-lg"
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-lg mb-2">
                Description
              </label>
              <textarea
                rows={6}
                placeholder="Enter subject description"
                className="w-full p-3 bg-gray-800 text-white rounded outline-none text-lg resize-none"
              />
            </div>
            <button className="w-full bg-blue-700 py-3 rounded-xl text-lg text-white hover:bg-blue-600 transition">
              Add
            </button>
          </form>
        </section>

        {/* Subject Table */}
        <section className="bg-black lg:h-[600px] overflow-y-auto rounded-xl shadow-lg overflow-x-auto">
          <table className="min-w-full border rounded-md">
            <thead className="bg-black text-white text-left text-sm sm:text-md font-semibold sticky top-0 z-10">
              <tr>
                <th className="px-4 py-3">Subject Id</th>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Description</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Notes Hint</th>
                <th className="px-4 py-3">Delete</th>
              </tr>
            </thead>
            <tbody className="text-white text-sm sm:text-base">
              {subjects.map((subject) => (
                <tr
                  key={subject.id}
                  className="bg-gray-900 hover:bg-gray-800 transition"
                >
                  <td className="px-4 py-2">{subject.id}</td>
                  <td className="px-4 py-2">{subject.title}</td>
                  <td className="px-4 py-2">{subject.description}</td>
                  <td className="px-4 py-2">{subject.course}</td>
                  <td className="px-4 py-2">{subject.notes}</td>
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

export default AdminSubject;
