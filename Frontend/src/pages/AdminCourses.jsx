import React, { useEffect, useState } from "react";
import AdminHeader from "../components/AdminHeader";
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
    if (!window.confirm("Are you sure you want to delete this course?")) return;
    try {
      await deleteCourse(id);
      toast.success("Course deleted successfully");
    } catch {
      toast.error("Failed to delete course");
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-900 text-white">
      <header>
        <AdminHeader />
      </header>

      <main className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10">
        {/* Add Course Form */}
        <section className="bg-black/80 rounded-xl p-6 shadow-lg flex flex-col gap-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
            Add Course
          </h2>
          <form className="flex flex-col gap-4" onSubmit={handleOnSubmit}>
            <input
              type="text"
              value={title}
              placeholder="Course Title"
              onChange={(e) => setTitle(e.target.value)}
              className="p-3 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              value={description}
              placeholder="Course Description"
              onChange={(e) => setDescription(e.target.value)}
              className="p-3 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none min-h-[120px]"
              required
            />
            <input
              type="text"
              value={category}
              placeholder="Course Category"
              onChange={(e) => setCategory(e.target.value)}
              className="p-3 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button className="py-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors font-semibold">
              Add Course
            </button>
          </form>
        </section>

        {/* Courses Table */}
        <section className="bg-black/80 rounded-xl shadow-lg overflow-x-auto">
          <table className="min-w-full text-left border-collapse">
            <thead className="bg-black text-white text-left text-sm sm:text-base font-semibold sticky top-0 z-10">
              <tr>
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Description</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Subjects</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan="6" className="text-center py-6 text-white/70">
                    Loading courses...
                  </td>
                </tr>
              ) : courses.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center py-6 text-white/70">
                    No courses found
                  </td>
                </tr>
              ) : (
                courses.map((course, index) => (
                  <tr
                    key={course._id}
                    className={`transition-all ${
                      index % 2 === 0
                        ? "bg-gray-900/60 hover:bg-gray-800/60"
                        : "bg-gray-900/40 hover:bg-gray-800/50"
                    }`}
                  >
                    <td className="px-4 py-3 break-words">{course._id}</td>
                    <td className="px-4 py-3 font-medium">{course.title}</td>
                    <td className="px-4 py-3 text-white/80 break-words">
                      {course.description}
                    </td>
                    <td className="px-4 py-3">{course.category}</td>
                    <td className="px-4 py-3">
                      {course.subjects?.length || 0}
                    </td>
                    <td className="px-4 py-3 flex gap-2">
                      <button
                        onClick={() => handleDelete(course._id)}
                        className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-all font-medium"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default AdminCourses;
