const Subject = require("../models/Subject");

// get  All pdfs for admin dashboard
const getAllPdfForAdmin = async (req, res) => {
  try {
    const subjects = await Subject.find({});
    const allPdfs = subjects.flatMap((subject) =>
      subject.pdfs.map((pdf) => ({
        subjectTitle: subject.title,
        subjectId: subject._id,
        ...pdf.toObject(),
      }))
    );
    res.status(200).json({ success: true, data: allPdfs });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Get pdf by of the subject
const getPdfBySubject = async (req, res) => {
  try {
    const subject = await Subject.findById(req.params.subjectId);
    if (!subject) {
      return res
        .status(404)
        .json({ success: false, message: "Subject not found" });
    }

    if (!subject.pdfs || subject.pdfs.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No PDFs found for this subject" });
    }

    res.status(200).json({ success: true, data: subject.pdfs });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// delete pdf
const deletePdf = async (req, res) => {
  try {
    const subject = await Subject.findById(req.params.subjectId);
    if (!subject) {
      return res
        .status(404)
        .json({ success: false, message: "Subject not found" });
    }

    const pdfId = req.params.pdfId;

    const initialLength = subject.pdfs.length;
    const fs = require("fs");
    const path = require("path");

    const deletedPdf = subject.pdfs.find((pdf) => pdf._id.toString() === pdfId);
    if (deletedPdf) {
      const filePath = path.join(__dirname, "..", deletedPdf.url);
      fs.unlink(filePath, (err) => {
        if (err) console.error("Failed to delete file:", err.message);
      });
    }
    subject.pdfs = subject.pdfs.filter((pdf) => pdf._id.toString() !== pdfId);

    if (subject.pdfs.length === initialLength) {
      return res
        .status(404)
        .json({ success: false, message: "PDF not found in subject" });
    }

    await subject.save();

    res.status(200).json({
      success: true,
      message: "PDF deleted successfully",
      data: subject.pdfs,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  getAllPdfForAdmin,
  getPdfBySubject,
  deletePdf,
};
