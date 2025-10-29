import React from "react";
import AdminHeader from "../components/AdminHeader";

const AdminHomePage = () => {
  const users = [
    {
      userId: "001",
      name: "Arsalan",
      role: "Frontend Auteur",
      email: "arsalan@skillnester.com",
    },
    {
      userId: "002",
      name: "Riya",
      role: "UX Designer",
      email: "riya@skillnester.com",
    },
    {
      userId: "003",
      name: "Kabir",
      role: "Backend Architect",
      email: "kabir@skillnester.com",
    },
    {
      userId: "004",
      name: "Meera",
      role: "Content Strategist",
      email: "meera@skillnester.com",
    },
    {
      userId: "005",
      name: "Zoya",
      role: "QA Analyst",
      email: "zoya@skillnester.com",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-white">
      <header>
        <AdminHeader />
      </header>
      <main>
        <div className="w-full max-w-screen-xl mx-auto px-4 py-8">
          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: "Courses Dashboard",
                count: 100,
                link: "/admin/courses",
              },
              {
                title: "Subjects Dashboard",
                count: 100,
                link: "/admin/subjects",
              },
              {
                title: "Notes Dashboard",
                count: 100,
                link: "/admin/notes",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="px-6 py-5 bg-black text-white rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <h1 className="font-semibold text-2xl sm:text-3xl mb-4">
                  {item.title}
                </h1>
                <h2 className="text-xl sm:text-2xl mb-4">
                  Total: {item.count}
                </h2>
                <a
                  href={item.link}
                  className="text-blue-400 underline hover:text-blue-300"
                >
                  Manage
                </a>
              </div>
            ))}
          </div>

          {/* Users Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 rounded-md overflow-hidden">
              <thead className="bg-black text-white text-left text-base sm:text-lg font-semibold">
                <tr>
                  <th className="px-4 py-2">User Id</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Role</th>
                  <th className="px-4 py-2">Email</th>
                </tr>
              </thead>
              <tbody className="text-white text-sm sm:text-base">
                {users.map((user) => (
                  <tr
                    key={user.userId}
                    className="bg-gray-900 hover:bg-gray-800"
                  >
                    <td className="px-4 py-2">{user.userId}</td>
                    <td className="px-4 py-2">{user.name}</td>
                    <td className="px-4 py-2">{user.role}</td>
                    <td className="px-4 py-2">{user.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminHomePage;
