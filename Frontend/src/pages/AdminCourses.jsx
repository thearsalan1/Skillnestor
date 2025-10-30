import React, { useEffect, useState } from "react";
import AdminHeader from "../components/AdminHeader";
import Footer from "../components/Footer";
import useAdminStore from "../Store/useAdminStore";
import { toast } from "sonner";

const AdminCourses = () => {
  const { courses, isLoading, loadAdminData, deleteCourse, addCourse } =
    useAdminStore();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    loadAdminData();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete the course?"
    );
    if (!confirm) return;
    try {
      await deleteCourse(id);
      toast.success("Deleted Successully");
    } catch (error) {
      toast.error("Failed to delete the course");
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Adding course...");
    try {
      await addCourse({ title, description, category });
      toast.success("Course added successfully", { id: toastId });
      setTitle("");
      setDescription("");
      setCategory("");
    } catch {
      toast.error("Failed to add course", { id: toastId });
    }
  };

  useEffect(() => {}, [courses]);
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
          <form onSubmit={handleOnSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-lg mb-2">
                Title
              </label>
              <input
                type="text"
                value={title}
                placeholder="Enter Course title"
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-3 bg-gray-800 text-white rounded outline-none text-lg"
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-lg mb-2">
                Description
              </label>
              <textarea
                rows={5}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Enter Course category"
                className="w-full p-3 bg-gray-800 text-white rounded outline-none text-lg"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-700 py-3 rounded-xl text-lg text-white hover:bg-blue-600 transition"
            >
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
              {courses.length > 0 ? (
                courses.map((course) => (
                  <tr
                    key={course._id}
                    className="bg-gray-900 hover:bg-gray-800 transition"
                  >
                    <td className="px-4 py-2">{course._id}</td>
                    <td className="px-4 py-2">{course.title}</td>
                    <td className="px-4 py-2">{course.description}</td>
                    <td className="px-4 py-2">{course.category}</td>
                    <td className="px-4 py-2">
                      {course.subjects?.length || 0}
                    </td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => handleDelete(course._id)}
                        className="px-3 py-1 bg-red-500 hover:bg-red-700 text-white rounded-md text-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-4 text-white">
                    {isLoading ? "Loading courses..." : "No courses found"}
                  </td>
                </tr>
              )}
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
