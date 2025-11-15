const express = require("express");
const cors = require("cors");
const path = require("path");

const testRoutes = require("./src/routes/testRoute");
const authRoutes = require("./src/routes/authRoutes");
const coursesRoutes = require("./src/routes/courseRoute");
const subjectRoutes = require("./src/routes/subjectRoutes");
const pdfRoutes = require("./src/routes/pdfRoutes");
const userRoutes = require("./src/routes/userRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/test", testRoutes);
app.use("/api/courses", coursesRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/subjects", subjectRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/pdf", pdfRoutes);
app.use("/api/user", userRoutes);

module.exports = app;
