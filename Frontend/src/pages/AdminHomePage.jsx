import React, { useEffect } from "react";
import AdminHeader from "../components/AdminHeader";
import useAdminStore from "../Store/useAdminStore";

const AdminHomePage = () => {
  const {
    getAllUsers,
    users,
    courses,
    loadAdminData,
    subjects,
    fetchSubjects,
    getAllpdfs,
    pdfs,
  } = useAdminStore();

  useEffect(() => {
    getAllUsers();
    loadAdminData();
    fetchSubjects();
    getAllpdfs();
  }, []);

  const dashboardItems = [
    {
      title: "Courses Dashboard",
      count: courses.length,
      link: "/admin/courses",
    },
    {
      title: "Subjects Dashboard",
      count: subjects.length,
      link: "/admin/subjects",
    },
    { title: "Notes Dashboard", count: pdfs.length, link: "/admin/notes" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-900 text-white">
      <header>
        <AdminHeader />
      </header>

      <main className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-10">
        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {dashboardItems.map((item, index) => (
            <a
              href={item.link}
              key={index}
              className="block px-6 py-6 rounded-xl shadow-lg bg-black/80 hover:bg-black/70 transition-all duration-300"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                {item.title}
              </h2>
              <p className="text-xl sm:text-2xl mb-4">Total: {item.count}</p>
              <span className="text-blue-400 underline hover:text-blue-300 font-medium">
                Manage
              </span>
            </a>
          ))}
        </div>

        {/* Users Table */}
        <div className="overflow-x-auto rounded-xl shadow-lg bg-black/80">
          <table className="min-w-full border-collapse">
            <thead className="bg-black text-white text-left text-base sm:text-lg font-semibold sticky top-0 z-10">
              <tr>
                <th className="px-4 py-3">User Id</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Role</th>
                <th className="px-4 py-3">Email</th>
              </tr>
            </thead>
            <tbody className="text-white text-sm sm:text-base">
              {users.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center py-4 text-white/70">
                    No users found
                  </td>
                </tr>
              ) : (
                users.map((user, index) => (
                  <tr
                    key={user._id}
                    className={`transition-all ${
                      index % 2 === 0
                        ? "bg-black/60 hover:bg-black/50"
                        : "bg-black/40 hover:bg-black/30"
                    }`}
                  >
                    <td className="px-4 py-3 break-words">{user._id}</td>
                    <td className="px-4 py-3">{user.name}</td>
                    <td className="px-4 py-3">{user.role}</td>
                    <td className="px-4 py-3 break-words">{user.email}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AdminHomePage;
