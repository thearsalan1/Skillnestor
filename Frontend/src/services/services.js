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
  console.log(title, description, course);

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
