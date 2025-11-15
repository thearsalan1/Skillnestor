import { create } from "zustand";
import {
  addCourseAPI,
  addSubjectApi,
  deleteCourseAPI,
  deleteSubjectApi,
  fetchCourses,
  fetchSubjectsAPI,
  getAllpdfsAPI,
  getAllUsersAPI,
  addNotesApi,
  deletePdfApi,
} from "../services/services";
import { toast } from "sonner";

const useAdminStore = create((set) => ({
  courses: [],
  users: [],
  subjects: [],
  pdfs: [],
  isLoading: false,

  loadAdminData: async () => {
    set({ isLoading: true });
    try {
      const courseRes = await fetchCourses();
      set({
        courses: courseRes.data.data,
        isLoading: false,
      });
    } catch (err) {
      console.error("Failed to load admin data:", err);
      set({ isLoading: false });
    }
  },

  deleteCourse: async (id) => {
    try {
      await deleteCourseAPI(id);
      set((state) => ({
        courses: state.courses.filter((course) => course._id !== id),
      }));
    } catch (error) {
      console.error("Failed to delete course : ", error);
    }
  },

  addCourse: async ({ title, description, category }) => {
    try {
      const res = await addCourseAPI({ title, description, category });
      if (!res.data.success || !res.data) {
        throw new Error("Unexpected response format");
      }

      const newCourse = res.data.data;
      set((state) => ({
        courses: [...state.courses, newCourse],
      }));
    } catch (error) {
      console.error("Failed to add course", error);
      throw error;
    }
  },

  getAllUsers: async () => {
    try {
      const res = await getAllUsersAPI();

      if (!res.data.success || !res.data) {
        throw new Error("Unexpected response format");
      }

      const newUsers = res.data.data;
      set((state) => ({
        users: [...state.users, ...newUsers],
      }));
    } catch (error) {
      console.error("Failed to load users", error);
      throw error;
    }
  },

  fetchSubjects: async () => {
    try {
      set({ isLoading: true });

      const subjectRes = await fetchSubjectsAPI();

      if (!subjectRes.data.success || !Array.isArray(subjectRes.data.data)) {
        throw new Error("Unexpected response format");
      }

      set({
        subjects: subjectRes.data.data,
        isLoading: false,
      });
    } catch (error) {
      console.error("Failed to load subjects data:", error);
      set({ isLoading: false });
    }
  },

  deleteSubject: async (id) => {
    try {
      await deleteSubjectApi(id);
      set((state) => ({
        subjects: state.subjects.filter((subject) => subject._id !== id),
      }));
    } catch (error) {
      console.error("Failed to delete subject, ", error);
    }
  },

  addSubject: async ({ title, description, course }) => {
    try {
      const res = await addSubjectApi({ title, description, course });
      console.log("Creating subject:", res);
      if (!res.data.success || !res.data) {
        throw new Error("Unexpected response format");
      }
      const newSubject = res.data.data;
      set((state) => ({
        subjects: [...state.subjects, newSubject],
      }));
    } catch (error) {
      console.error("Failed to add subject", error);
      throw error;
    }
  },

  getAllpdfs: async () => {
    try {
      const res = await getAllpdfsAPI();
      if (!res.data?.success) throw new Error("PDFs not found");
      console.log(res.data);
      set({ pdfs: res.data.data });
      return res.data.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  uploadNotes: async ({ subjectId, file }) => {
    try {
      const res = await addNotesApi({ subjectId, file });
      console.log("📦 Upload response:", res.data);

      if (!res.data.success || !res.data.data) {
        throw new Error("Unexpected response format");
      }

      const newPdf = res.data.data;
      set((state) => ({
        pdfs: [...state.pdfs, newPdf],
      }));

      return res.data;
    } catch (error) {
      console.error("Failed to upload notes:", error);
      throw error;
    }
  },

  deletePdf: async ({ subjectId, pdfId }) => {
    try {
      await deletePdfApi({ subjectId, pdfId });
      set((state) => ({
        pdfs: state.pdfs.filter((pdf) => pdf._id !== pdfId),
      }));
      toast.success("PDF deleted successfully");
    } catch (error) {
      console.error("Failed to delete PDF:", error);
      toast.error("Failed to delete PDF");
    }
  },
}));

export default useAdminStore;
