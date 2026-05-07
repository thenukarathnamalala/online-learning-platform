const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

const courseRoutes = require("./routes/courseRoutes");

dotenv.config();

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// SWAGGER
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// ROUTES
app.use("/api/courses", courseRoutes);

// DATABASE CONNECTION
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.log(error);
  });

// SERVER
const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
  console.log(`Course Service running on port ${PORT}`);
});