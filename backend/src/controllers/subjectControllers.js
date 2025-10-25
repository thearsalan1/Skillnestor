const { default: mongoose } = require("mongoose");
const Course = require("../models/Course");
const Subject = require("../models/Subject");

// Api for creating subject
const createSubject = async (req, res) => {
  const { title, description, course } = req.body;
  try {
    if (!title || !description || !course) {
      return res
        .status(400)
        .json({ success: false, message: "All fields required" });
    }
    const existingCourse = await Course.findById(course);
    if (!existingCourse) {
      return res
        .status(404)
        .json({ success: false, message: "Course not found" });
    }
    
    const subject = new Subject({
      title,
      description,
      course,
    });
    await subject.save();
    existingCourse.subjects.push(subject._id);
    await existingCourse.save();
    res.status(201).json({ success: true, data: subject });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Api for get subjects
const getAllSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find({}).sort({ createdAt: -1 });
    if (subjects.length === 0) {
      return res.status(200).json({ success: true, data: subjects });
    }
    res.status(200).json({ success: true, data: subjects });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Api to get all subjects related to course
const getCourseSubjects = async (req, res) => {
  const { courseId } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(courseId)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid course id" });
    }
    const subjects = await Subject.find({ course: courseId });
    if (subjects.length === 0) {
      return res.status(200).json({ success: true, data: subjects });
    }
    res.status(200).json({ success: true, data: subjects });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Api to delete a subject using id
const deleteSubject = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ success: false, message: "Bad request" });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ success: false, message: "Invalid subject Id" });
    }

    const subject = await Subject.findByIdAndDelete(id);

    if (!subject) {
      return res
        .status(404)
        .json({ success: false, message: "Subject not found" });
    }

    await Course.findByIdAndUpdate(subject.course, {
      $pull: { subjects: subject.id },
    });

    res.status(200).json({
      success: true,
      message: "Subject deleted successfully",
      data: subject,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Controller to open pdf
module.exports = {
  createSubject,
  getAllSubjects,
  getCourseSubjects,
  deleteSubject,
};
