const Instructor = require("../models/Instructor");

// CREATE INSTRUCTOR
const createInstructor = async (req, res) => {
  try {
    const instructor = await Instructor.create(req.body);

    res.status(201).json({
      message: "Instructor created successfully",
      instructor
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message
    });
  }
};

// GET ALL INSTRUCTORS
const getAllInstructors = async (req, res) => {
  try {
    const instructors = await Instructor.find();

    res.status(200).json(instructors);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message
    });
  }
};

// GET INSTRUCTOR BY ID
const getInstructorById = async (req, res) => {
  try {
    const instructor = await Instructor.findById(req.params.id);

    if (!instructor) {
      return res.status(404).json({
        message: "Instructor not found"
      });
    }

    res.status(200).json(instructor);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message
    });
  }
};

// UPDATE INSTRUCTOR
const updateInstructor = async (req, res) => {
  try {
    const updatedInstructor = await Instructor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedInstructor) {
      return res.status(404).json({
        message: "Instructor not found"
      });
    }

    res.status(200).json({
      message: "Instructor updated successfully",
      updatedInstructor
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message
    });
  }
};

// DELETE INSTRUCTOR
const deleteInstructor = async (req, res) => {
  try {
    const deletedInstructor = await Instructor.findByIdAndDelete(req.params.id);

    if (!deletedInstructor) {
      return res.status(404).json({
        message: "Instructor not found"
      });
    }

    res.status(200).json({
      message: "Instructor deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message
    });
  }
};

module.exports = {
  createInstructor,
  getAllInstructors,
  getInstructorById,
  updateInstructor,
  deleteInstructor
};