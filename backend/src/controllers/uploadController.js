const Subject = require("../models/Subject");

exports.uploadPdfToSubject = async (req, res) => {
  try {
    const subjectId = req.params.subjectId;

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No PDF file uploaded",
      });
    }

    const filePath = req.file.path.replace(/\\/g, "/");

    const subject = await Subject.findById(subjectId);
    if (!subject) {
      return res.status(404).json({
        success: false,
        message: "Subject not found",
      });
    }

    // Push new PDF object into the array
    subject.pdfs.push({
      originalname: req.file.originalname,
      url: filePath,
    });

    await subject.save();

    res.status(200).json({
      success: true,
      message: "PDF uploaded successfully",
      data: subject.pdfs,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
