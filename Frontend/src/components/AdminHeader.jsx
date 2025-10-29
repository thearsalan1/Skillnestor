import React from "react";
import logo from "../assets/Logo.jpg";

const AdminHeader = () => {
  return (
    <div>
      <div className="bg-blue-950 p-2 flex justify-between items-center text-white">
        <img src={logo} className="w-[200px]" />
        <ul className="flex gap-10 text-lg pr-10">
          <li>
            <a href="/course">Home</a>
          </li>
          <li>
            <a href="/admin/courses">Courses</a>
          </li>
          <li>
            <a href="/admin/subjects">Subjects</a>
          </li>
          <li>
            <a href="/admin/notes">Notes</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminHeader;
