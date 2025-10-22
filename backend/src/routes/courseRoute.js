const express = require("express");
const { protect, admin } = require("../middlewares/roleMiddleware");
const {
  createCourse,
  getCourses,
  getCourseById,
  deleteCourse,
} = require("../controllers/courseController");

const router = express.Router();

// @CreateCourse POST /api/courses
// @desc add cousres by title,description,category
// @Access Private/Admin
router.post("/", protect, admin, createCourse);

// @Get Course GET /api/courses
// @desc Get all the courses
// @Access Public
router.get("/", getCourses);

// @Single course GET /api/courses/:id
// @desc get a single course using id
// @Access Public
router.get("/:id", getCourseById);

// @DeleteCourse DELETE /api/courses/:id
// @desc delete course using id
// @Access Private/Admin
router.delete("/:id", protect, admin, deleteCourse);

module.exports = router;
