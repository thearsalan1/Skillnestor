import { useEffect, useState } from "react";
import AdminHeader from "../components/AdminHeader";
import Footer from "../components/Footer";
import useAdminStore from "../Store/useAdminStore";
import { toast } from "sonner";

const AdminSubject = () => {
  const { fetchSubjects, subjects, deleteSubject, addSubject } =
    useAdminStore();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [course, setCourse] = useState("");

  const handleOnCLick = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Adding course...");
    try {
      await addSubject({ title, description, course });
      toast.success("Subject added successfully", { id: toastId });
      setTitle("");
      setDescription("");
      setCourse("");
    } catch (error) {
      console.error(error);
      toast.error("Error in adding subject");
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this subject?"
    );
    if (!confirm) return;

    try {
      await deleteSubject(id);
      toast.success("Subject deleted successfully");
    } catch (error) {
      toast.error("Subject not deleted");
      console.error("Delete error:", error);
    }
  };

  useEffect(() => {
    fetchSubjects();
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-white">
      <header>
        <AdminHeader />
      </header>

      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8">
        {/* Add Subject Form */}
        <section className="bg-black h-[650px] text-white rounded-xl p-6 shadow-lg">
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter Subject title"
                className="w-full p-3 bg-gray-800 text-white rounded outline-none text-lg"
              />
              <label htmlFor="courseId" className="block text-lg mb-2">
                Course Id
              </label>
              <input
                type="text"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                placeholder="Enter courseId"
                className="w-full p-3 bg-gray-800 text-white rounded outline-none text-lg"
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-lg mb-2">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={6}
                placeholder="Enter subject description"
                className="w-full p-3 bg-gray-800 text-white rounded outline-none text-lg resize-none"
              />
            </div>
            <button
              onClick={(e) => handleOnCLick(e)}
              className="w-full bg-blue-700 py-3 rounded-xl text-lg text-white hover:bg-blue-600 transition"
            >
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
                <th className="px-4 py-3">Delete</th>
              </tr>
            </thead>
            <tbody className="text-white text-sm sm:text-base">
              {subjects.map((subject) => (
                <tr
                  key={subject._id}
                  className="bg-gray-900 hover:bg-gray-800 transition"
                >
                  <td className="px-4 py-2">{subject._id}</td>
                  <td className="px-4 py-2">{subject.title}</td>
                  <td className="px-4 py-2">{subject.description}</td>
                  <td className="px-4 py-2">{subject.course}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleDelete(subject._id)}
                      className="px-3 py-1 bg-red-500 hover:bg-red-700 text-white rounded-md text-sm"
                    >
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
