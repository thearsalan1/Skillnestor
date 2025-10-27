import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgetPassword from "./pages/ForgetPassword";
import CoursePage from "./pages/CoursePage";
import SubjectsPage from "./pages/SubjectsPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/course" element={<CoursePage />} />
        <Route path="/subjects" element={<SubjectsPage />} />
      </Routes>
    </>
  );
};

export default App;
