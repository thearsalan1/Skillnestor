import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
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
          headers: {
            Authorization: `Bearer ${token}`,
          },
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
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-white">
      <header className="flex justify-center">
        <Navbar />
      </header>
      <main>
        <div className="px-4 py-8 max-w-screen-xl mx-auto">
          <div className="w-full bg-white/10 backdrop-blur-xl border border-white/30 p-6 sm:p-10 shadow-lg rounded-lg">
            <h1 className="text-4xl sm:text-5xl font-semibold mb-8 text-black text-center">
              Notes
            </h1>

            {loading ? (
              <p className="text-white text-lg sm:text-xl text-center animate-pulse">
                Loading Notes, please wait...
              </p>
            ) : notes.length === 0 ? (
              <p className="text-white text-lg sm:text-xl text-center">
                Notes not available...
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {notes.map((note) => (
                  <div
                    key={note._id}
                    className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <h2 className="text-xl sm:text-2xl font-semibold mb-3 break-words">
                        {note.originalname.length > 50
                          ? `${note.originalname.slice(0, 47)}...`
                          : note.originalname}
                      </h2>
                      <p className="text-sm text-gray-300 mb-4">
                        Uploaded on:{" "}
                        <span className="text-white font-medium">
                          {new Date(note.uploadedAt).toLocaleDateString(
                            "en-IN",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </span>
                      </p>
                    </div>
                    <a
                      href={`${backend}/${note.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium py-2 px-4 rounded-md transition-colors duration-300 text-center"
                    >
                      Open PDF
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default PDFPage;
