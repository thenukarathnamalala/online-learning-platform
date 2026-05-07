const express = require("express");

const {
  createInstructor,
  getAllInstructors,
  getInstructorById,
  updateInstructor,
  deleteInstructor
} = require("../controllers/instructorController");

const router = express.Router();

/**
 * @swagger
 * /api/instructors:
 *   post:
 *     summary: Create instructor
 *     tags: [Instructors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               expertise:
 *                 type: string
 *               experience:
 *                 type: number
 *               bio:
 *                 type: string
 *     responses:
 *       201:
 *         description: Instructor created successfully
 */
router.post("/", createInstructor);

/**
 * @swagger
 * /api/instructors:
 *   get:
 *     summary: Get all instructors
 *     tags: [Instructors]
 *     responses:
 *       200:
 *         description: List of instructors
 */
router.get("/", getAllInstructors);

/**
 * @swagger
 * /api/instructors/{id}:
 *   get:
 *     summary: Get instructor by ID
 *     tags: [Instructors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
router.get("/:id", getInstructorById);

/**
 * @swagger
 * /api/instructors/{id}:
 *   put:
 *     summary: Update instructor
 *     tags: [Instructors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               expertise:
 *                 type: string
 *               experience:
 *                 type: number
 *               bio:
 *                 type: string
 */
router.put("/:id", updateInstructor);

/**
 * @swagger
 * /api/instructors/{id}:
 *   delete:
 *     summary: Delete instructor
 *     tags: [Instructors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
router.delete("/:id", deleteInstructor);

module.exports = router;