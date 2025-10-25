const express = require("express");
const { protect, admin } = require("../middlewares/roleMiddleware");
const {
  getAllPdfForAdmin,
  getPdfBySubject,
  deletePdf,
} = require("../controllers/pdfController");

const router = express.Router();
// @GetAllPdfForAdmin GET /api/pdf/admin/all
// @desc Get all the pdf in each sub
// @Access Private/Admin
router.get("/admin/all", protect, admin, getAllPdfForAdmin);

// @GetAllPdfOfASub GET /api/pdf/:subjectId
// @desc Get all the pdf of the subject
// @Access Private/Public
router.get("/:subjectId", protect, getPdfBySubject);

// @DeleteAPdf DELETE /api/pdf/:subjectId/:pdfId
// @desc Delete a pdf using id
// @Access Private/Admin
router.delete("/:subjectId/:pdfId", protect, admin, deletePdf);

module.exports = router;
