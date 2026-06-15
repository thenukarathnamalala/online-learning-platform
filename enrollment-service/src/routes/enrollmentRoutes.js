const express = require("express");

const {
  enrollStudent,
  getAllEnrollments,
  getEnrollmentsByStudentId,
  cancelEnrollment
} = require("../controllers/enrollmentController");

const router = express.Router();

/**
 * @swagger
 * /api/enrollments:
 *   post:
 *     summary: Enroll a student to a course
 *     tags: [Enrollments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               studentId:
 *                 type: string
 *               courseId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Student enrolled successfully
 */
router.post("/", enrollStudent);

/**
 * @swagger
 * /api/enrollments:
 *   get:
 *     summary: Get all enrollments
 *     tags: [Enrollments]
 */
router.get("/", getAllEnrollments);

/**
 * @swagger
 * /api/enrollments/student/{studentId}:
 *   get:
 *     summary: Get enrollments by student ID
 *     tags: [Enrollments]
 *     parameters:
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema:
 *           type: string
 */
router.get("/student/:studentId", getEnrollmentsByStudentId);

/**
 * @swagger
 * /api/enrollments/{id}:
 *   put:
 *     summary: Cancel enrollment
 *     tags: [Enrollments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
router.put("/:id", cancelEnrollment);

module.exports = router;