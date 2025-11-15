const path = require("path");
const cloudinary = require("../config/cloudinary");
const Subject = require("../models/Subject");
const fs = require("fs");

exports.uploadPdf = async (req, res) => {
  try {
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "No file uploaded" });
    }

    const { subjectId } = req.params;

    // Remove extension and sanitize for Cloudinary
    const fileNameWithoutExt = path
      .parse(req.file.originalname)
      .name.replace(/\s+/g, "_");

    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "SkillNester_PDFs",
      resource_type: "raw",
      use_filename: true,
      unique_filename: false,
      public_id: fileNameWithoutExt, // Cloudinary-safe name
    });

    fs.unlinkSync(req.file.path);

    const uploadedPdf = {
      originalname: req.file.originalname,
      url: result.secure_url,
      public_id: result.public_id, // THIS will now exist
      uploadedAt: new Date(),
    };

    const subject = await Subject.findById(subjectId);
    if (!subject) {
      return res
        .status(404)
        .json({ success: false, message: "Subject not found" });
    }

    subject.pdfs.push(uploadedPdf);
    await subject.save();

    res.status(200).json({
      success: true,
      message: "PDF uploaded successfully",
      data: uploadedPdf,
    });
  } catch (err) {
    console.error("❌ Upload Error:", err);
    res.status(500).json({
      success: false,
      message: "Failed to upload PDF",
      error: err.message,
    });
  }
};
