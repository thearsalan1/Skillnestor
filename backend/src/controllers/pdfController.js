const Subject = require("../models/Subject");
const cloudinary = require("../config/cloudinary");

// Get all PDFs for admin dashboard
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
    console.error("Error fetching all PDFs:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Get PDFs by subject
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
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Helper function to extract public_id from Cloudinary URL
const extractPublicIdFromUrl = (url) => {
  try {
    const urlParts = url.split("/upload/");
    if (urlParts.length < 2) return null;

    const afterUpload = urlParts[1];
    const withoutVersion = afterUpload.replace(/^v\d+\//, ""); 

    return withoutVersion;
  } catch (error) {
    return null;
  }
};

// Delete PDF from MongoDB and Cloudinary
const deletePdf = async (req, res) => {
  try {
    const { subjectId, pdfId } = req.params;

    const subject = await Subject.findById(subjectId);
    if (!subject) {
      return res
        .status(404)
        .json({ success: false, message: "Subject not found" });
    }

    const pdf = subject.pdfs.id(pdfId);
    if (!pdf) {
      return res.status(404).json({ success: false, message: "PDF not found" });
    }

    let publicId = pdf.public_id;

    if (!publicId && pdf.url) {
      publicId = extractPublicIdFromUrl(pdf.url);
    }

    if (!publicId) {
      return res.status(400).json({
        success: false,
        message: "Cannot determine Cloudinary public_id for deletion",
      });
    }


    const cloudRes = await cloudinary.uploader.destroy(publicId, {
      resource_type: "raw",
    });


    pdf.deleteOne();
    await subject.save();

    const message =
      cloudRes.result === "ok"
        ? "PDF deleted successfully from both database and Cloudinary"
        : cloudRes.result === "not found"
          ? "PDF removed from database (file not found in Cloudinary)"
          : "PDF removed from database (Cloudinary deletion uncertain)";

    res.status(200).json({
      success: true,
      message,
      cloudinaryResult: cloudRes.result,
    });
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports = {
  getAllPdfForAdmin,
  getPdfBySubject,
  deletePdf,
};
