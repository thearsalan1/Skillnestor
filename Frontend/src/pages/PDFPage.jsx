import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";

const PDFPage = () => {
  const backend = import.meta.env.VITE_BACKEND_URL;
  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!token) {
      toast.message("Not Authorized");
      navigate("/");
      return;
    }

    const fetchNotes = async () => {
      const query = new URLSearchParams(location.search);
      const subjectId = query.get("subject");

      try {
        setLoading(true);
        const res = await axios.get(`${backend}/api/pdf/${subjectId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setNotes(res.data.data);
      } catch (error) {
        console.error("Error fetching notes:", error.message);
        toast.error("Failed to load notes");
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, [token, location.search, navigate, backend]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-900 text-white">
      <header>
        <Navbar />
      </header>
      <main className="px-4 py-8 max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-10 drop-shadow-lg">
          Notes
        </h1>

        {loading ? (
          <p className="text-center text-xl animate-pulse">
            Loading Notes, please wait...
          </p>
        ) : notes.length === 0 ? (
          <p className="text-center text-lg text-white/80">
            Notes not available...
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {notes.map((note) => (
              <div
                key={note._id}
                className="relative group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="mb-6">
                  <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-white drop-shadow-md break-words">
                    {note.originalname.length > 50
                      ? `${note.originalname.slice(0, 47)}...`
                      : note.originalname}
                  </h2>
                  <p className="text-sm text-white/60">
                    Uploaded on:{" "}
                    <span className="text-white font-medium">
                      {new Date(note.uploadedAt).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </p>
                </div>
                <Link
                  to={note.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-sm font-medium py-2 px-4 rounded-md transition-colors duration-300 text-center cursor-pointer"
                >
                  Open PDF
                </Link>
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 opacity-50 pointer-events-none"></div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default PDFPage;
