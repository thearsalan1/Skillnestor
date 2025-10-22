const { default: mongoose } = require("mongoose");
const Course = require("../models/Course");
const Subject = require("../models/Subject");

// Api for creating course
const createCourse = async (req, res) => {
  const { title, description, category } = req.body;
  try {
    if (!title || !description || !category) {
      return res
        .status(400)
        .json({ success: false, message: "Details not provided" });
    }
    let course = await Course.findOne({ title });
    if (course) {
      return res
        .status(400)
        .json({ success: false, message: "Course Already exists" });
    }
    course = new Course({
      title,
      description,
      category,
      createdBy: req.user._id,
    });
    await course.save();
    res.status(200).json({ success: true, data: course });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

// Api for getting all courses
const getCourses = async (req, res) => {
  try {
    const courses = await Course.find({}).sort({ createdAt: -1 });
    if (courses.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Courses not found" });
    }
    res.status(200).json({ success: true, data: courses });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Api for getting course by id
const getCourseById = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid course ID" });
    }

    const course = await Course.findById(req.params.id).populate("subjects");
    if (!course) {
      return res
        .status(404)
        .json({ success: false, message: "Course not found" });
    }
    res.status(200).json({ success: true, data: course });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Api for delete a course using id
const deleteCourse = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid course ID" });
    }
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res
        .status(404)
        .json({ success: false, message: "Course not found" });
    }
    await course.deleteOne();
    await Subject.deleteMany({ course: course._id });

    res
      .status(200)
      .json({ success: true, message: "Course deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  createCourse,
  getCourses,
  getCourseById,
  deleteCourse,
};
