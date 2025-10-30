import { create } from "zustand";
import {
  addCourseAPI,
  addSubjectApi,
  deleteCourseAPI,
  deleteSubjectApi,
  fetchCourses,
  fetchSubjectsAPI,
  getAllUsersAPI,
} from "../services/services";

const useAdminStore = create((set) => ({
  courses: [],
  users: [],
  subjects: [],
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
}));

export default useAdminStore;
