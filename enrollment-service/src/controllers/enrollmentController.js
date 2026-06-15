const Enrollment = require("../models/Enrollment");

// ENROLL STUDENT
const enrollStudent = async (req, res) => {
  try {
    const enrollment = await Enrollment.create(req.body);

    res.status(201).json({
      message: "Student enrolled successfully",
      enrollment
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message
    });
  }
};

// GET ALL ENROLLMENTS
const getAllEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.find();

    res.status(200).json(enrollments);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message
    });
  }
};

// GET ENROLLMENTS BY STUDENT ID
const getEnrollmentsByStudentId = async (req, res) => {
  try {
    const enrollments = await Enrollment.find({
      studentId: req.params.studentId
    });

    res.status(200).json(enrollments);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message
    });
  }
};

// CANCEL ENROLLMENT
const cancelEnrollment = async (req, res) => {
  try {
    const enrollment = await Enrollment.findByIdAndUpdate(
      req.params.id,
      { status: "cancelled" },
      { new: true }
    );

    if (!enrollment) {
      return res.status(404).json({
        message: "Enrollment not found"
      });
    }

    res.status(200).json({
      message: "Enrollment cancelled successfully",
      enrollment
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message
    });
  }
};

module.exports = {
  enrollStudent,
  getAllEnrollments,
  getEnrollmentsByStudentId,
  cancelEnrollment
};