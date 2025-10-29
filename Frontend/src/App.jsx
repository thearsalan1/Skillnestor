import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgetPassword from "./pages/ForgetPassword";
import CoursePage from "./pages/CoursePage";
import SubjectsPage from "./pages/SubjectsPage";
import PDFPage from "./pages/PDFPage";
import AdminHomePage from "./pages/AdminHomePage";
import AdminCourses from "./pages/AdminCourses";
import AdminSubject from "./pages/AdminSubject";
import { Toaster } from "sonner";

const App = () => {
  return (
    <>
      <Toaster richColors position="top-right" />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/course" element={<CoursePage />} />
        <Route path="/subjects" element={<SubjectsPage />} />
        <Route path="/subjects" element={<SubjectsPage />} />
        <Route path="/subjects/pdf" element={<PDFPage />} />

        <Route path="/admin" element={<AdminHomePage />} />
        <Route path="/admin/courses" element={<AdminCourses />} />
        <Route path="/admin/subjects" element={<AdminSubject />} />
      </Routes>
    </>
  );
};

export default App;
