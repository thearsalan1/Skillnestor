const express = require("express");
const {
  getCourseSubjects,
  getAllSubjects,
  createSubject,
  deleteSubject,
} = require("../controllers/subjectControllers");
const { protect, admin } = require("../middlewares/roleMiddleware");
const { uploadPdf } = require("../controllers/uploadController"); // ✅ Fixed
const upload = require("../utils/cloudinaryUpload");

const router = express.Router();

// @GetSubjectByCourseId GET /api/subject/course/:courseId
// @desc Get all the subjects of a perticular course
// @Access Public
router.get("/course/:courseId", getCourseSubjects);

// @CreateSubject POST /api/subjects/
// @desc Create a new subject
// @Access Private/Admin
router.post("/", protect, admin, createSubject);

// @getAllSubjects GET /api/subjects
// @desc Get all the subject in database
// @Access Private/Admin
router.get("/", protect, admin, getAllSubjects);

// @DeleteSubject DELETE /api/subjects/:id
// @desc Delete a subject
// @Access Private/Admin
router.delete("/:id", protect, admin, deleteSubject);

// @UploadPDF POST /api/subjects/upload/:subjectId
// @desc Post req to upload notes pdf
// @Access Private/Admin
router.post(
  "/upload/:subjectId",
  protect,
  admin,
  upload.single("pdf"),
  uploadPdf
);

module.exports = router;
