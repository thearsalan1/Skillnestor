const express = require("express");
const cors = require("cors");
const testRoutes = require("./src/routes/testRoute");
const authRoutes = require("./src/routes/authRoutes");
const coursesRoutes = require("./src/routes/courseRoute");
const subjectRoutes = require("./src/routes/subjectRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/test", testRoutes);
app.use("/api/courses", coursesRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/subjects", subjectRoutes);

module.exports = app;
