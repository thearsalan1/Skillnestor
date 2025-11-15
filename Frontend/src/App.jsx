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
import AdminNotesPage from "./pages/AdminNotesPage";
import { Toaster } from "sonner";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <Toaster richColors position="top-right" />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />

        {/* Protected User Routes */}
        <Route
          path="/course"
          element={
            <ProtectedRoute>
              <CoursePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/subjects"
          element={
            <ProtectedRoute>
              <SubjectsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/subjects/pdf"
          element={
            <ProtectedRoute>
              <PDFPage />
            </ProtectedRoute>
          }
        />

        {/* Protected Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminHomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/courses"
          element={
            <ProtectedRoute>
              <AdminCourses />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/subjects"
          element={
            <ProtectedRoute>
              <AdminSubject />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/notes"
          element={
            <ProtectedRoute>
              <AdminNotesPage />
            </ProtectedRoute>
          }
        />
        {/* 404 Pages */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
