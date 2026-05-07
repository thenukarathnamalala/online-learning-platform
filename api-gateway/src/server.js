const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { createProxyMiddleware } = require("http-proxy-middleware");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

dotenv.config();

const app = express();

app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register user through API Gateway
 *     tags: [Auth Gateway]
 */
/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login user through API Gateway
 *     tags: [Auth Gateway]
 */
app.use("/api/auth", createProxyMiddleware({
  target: "http://localhost:5001",
  changeOrigin: true
}));

/**
 * @swagger
 * /api/courses:
 *   post:
 *     summary: Create course through API Gateway
 *     tags: [Course Gateway]
 */
/**
 * @swagger
 * /api/courses:
 *   get:
 *     summary: Get all courses through API Gateway
 *     tags: [Course Gateway]
 */
/**
 * @swagger
 * /api/courses/{id}:
 *   get:
 *     summary: Get course by ID through API Gateway
 *     tags: [Course Gateway]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
/**
 * @swagger
 * /api/courses/{id}:
 *   put:
 *     summary: Update course through API Gateway
 *     tags: [Course Gateway]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
/**
 * @swagger
 * /api/courses/{id}:
 *   delete:
 *     summary: Delete course through API Gateway
 *     tags: [Course Gateway]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
app.use("/api/courses", createProxyMiddleware({
  target: "http://localhost:5002",
  changeOrigin: true
}));

/**
 * @swagger
 * /api/instructors:
 *   post:
 *     summary: Create instructor through API Gateway
 *     tags: [Instructor Gateway]
 */
/**
 * @swagger
 * /api/instructors:
 *   get:
 *     summary: Get all instructors through API Gateway
 *     tags: [Instructor Gateway]
 */
/**
 * @swagger
 * /api/instructors/{id}:
 *   get:
 *     summary: Get instructor by ID through API Gateway
 *     tags: [Instructor Gateway]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
/**
 * @swagger
 * /api/instructors/{id}:
 *   put:
 *     summary: Update instructor through API Gateway
 *     tags: [Instructor Gateway]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
/**
 * @swagger
 * /api/instructors/{id}:
 *   delete:
 *     summary: Delete instructor through API Gateway
 *     tags: [Instructor Gateway]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
app.use("/api/instructors", createProxyMiddleware({
  target: "http://localhost:5003",
  changeOrigin: true
}));

/**
 * @swagger
 * /api/enrollments:
 *   post:
 *     summary: Enroll student through API Gateway
 *     tags: [Enrollment Gateway]
 */
/**
 * @swagger
 * /api/enrollments:
 *   get:
 *     summary: Get all enrollments through API Gateway
 *     tags: [Enrollment Gateway]
 */
/**
 * @swagger
 * /api/enrollments/student/{studentId}:
 *   get:
 *     summary: Get enrollments by student ID through API Gateway
 *     tags: [Enrollment Gateway]
 *     parameters:
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema:
 *           type: string
 */
/**
 * @swagger
 * /api/enrollments/{id}:
 *   put:
 *     summary: Cancel enrollment through API Gateway
 *     tags: [Enrollment Gateway]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
app.use("/api/enrollments", createProxyMiddleware({
  target: "http://localhost:5004",
  changeOrigin: true
}));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});