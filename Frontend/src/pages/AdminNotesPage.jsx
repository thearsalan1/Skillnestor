import { useEffect, useState } from "react";
import AdminHeader from "../components/AdminHeader";
import useAdminStore from "../Store/useAdminStore";
import { toast } from "sonner";

const AdminSubject = () => {
  const [file, setFile] = useState(null);
  const [subjectId, setSubjectId] = useState("");
  const { getAllpdfs, pdfs, uploadNotes, deletePdf } = useAdminStore();

  const handleOnClick = async (e) => {
    e.preventDefault();
    if (!subjectId || !file) {
      toast.error("Please provide both Subject ID and a PDF file");
      return;
    }
    try {
      const res = await uploadNotes({ subjectId, file });
      toast.success(res.message || "PDF uploaded successfully");
      setSubjectId("");
      setFile(null);
      getAllpdfs();
    } catch (err) {
      toast.error(err.message || "Upload failed");
    }
  };

  const handleDelete = async (subjectId, pdfId) => {
    if (!window.confirm("Are you sure you want to delete this PDF?")) return;
    try {
      await deletePdf({ subjectId, pdfId });
      toast.success("PDF deleted successfully");
      getAllpdfs();
    } catch (err) {
      toast.error(err.message || "Failed to delete PDF");
    }
  };

  useEffect(() => {
    getAllpdfs();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-900 text-white">
      <header>
        <AdminHeader />
      </header>

      <main className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10">
        {/* Upload Notes Form */}
        <section className="bg-black/80 rounded-xl p-6 shadow-lg flex flex-col gap-6">
          <h1 className="text-center text-3xl sm:text-5xl font-semibold mb-4">
            Upload Notes
          </h1>
          <form className="flex flex-col gap-4" onSubmit={handleOnClick}>
            <input
              type="text"
              value={subjectId}
              onChange={(e) => setSubjectId(e.target.value)}
              placeholder="Enter Subject ID"
              className="p-3 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => setFile(e.target.files[0])}
              className="p-3 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="py-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors font-semibold"
            >
              Upload PDF
            </button>
          </form>
        </section>

        {/* Notes Table */}
        <section className="bg-black/80 rounded-xl shadow-lg overflow-x-auto overflow-y-auto">
          <table className="min-w-full border-collapse">
            <thead className="bg-black text-white text-left text-sm sm:text-base font-semibold sticky top-0 z-10">
              <tr>
                <th className="px-4 py-3">Notes Id</th>
                <th className="px-4 py-3">Subject Title</th>
                <th className="px-4 py-3">Notes Title</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="text-white text-sm sm:text-base">
              {pdfs.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center py-6 text-white/70">
                    No notes found
                  </td>
                </tr>
              ) : (
                pdfs.map((pdf, index) => (
                  <tr
                    key={pdf._id}
                    className={`transition-all ${
                      index % 2 === 0
                        ? "bg-gray-900/60 hover:bg-gray-800/60"
                        : "bg-gray-900/40 hover:bg-gray-800/50"
                    }`}
                  >
                    <td className="px-4 py-3 break-words">{pdf._id}</td>
                    <td className="px-4 py-3 break-words">
                      {pdf.subjectTitle}
                    </td>
                    <td className="px-4 py-3 break-words">
                      {pdf.originalname}
                    </td>
                    <td className="px-4 py-3 flex gap-2">
                      <button
                        onClick={() => handleDelete(pdf.subjectId, pdf._id)}
                        className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded-lg font-medium transition-colors"
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

export default AdminSubject;
