import axios from "axios";
const backend = import.meta.env.VITE_BACKEND_URL;

export const fetchCourses = () => axios.get(`${backend}/api/courses`);
const token = localStorage.getItem("token");

export const deleteCourseAPI = (id) =>
  axios.delete(`${backend}/api/courses/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const addCourseAPI = ({ title, description, category }) => {
  const token = localStorage.getItem("token");
  return axios.post(
    `${backend}/api/courses`,
    { title, description, category },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getAllUsersAPI = () => {
  const token = localStorage.getItem("token");
  return axios.get(`${backend}/api/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const fetchSubjectsAPI = () => {
  const token = localStorage.getItem("token");
  return axios.get(`${backend}/api/subjects`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteSubjectApi = (id) => {
  const token = localStorage.getItem("token");
  return axios.delete(`${backend}/api/subjects/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const addSubjectApi = ({ title, description, course }) => {
  const token = localStorage.getItem("token");

  return axios.post(
    `${backend}/api/subjects`,
    { title, description, course },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getAllpdfsAPI = () => {
  const token = localStorage.getItem("token");
  return axios.get(`${backend}/api/pdf/admin/all`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const addNotesApi = ({ subjectId, file }) => {
  const token = localStorage.getItem("token");

  const formData = new FormData();
  formData.append("pdf", file);
  return axios.post(`${backend}/api/subjects/upload/${subjectId}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deletePdfApi = ({ subjectId, pdfId }) => {
  const token = localStorage.getItem("token");
  return axios.delete(`${backend}/api/pdf/${subjectId}/${pdfId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
