const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

const instructorRoutes = require("./routes/instructorRoutes");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api/instructors", instructorRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log(error));

const PORT = process.env.PORT || 5003;

app.listen(PORT, () => {
  console.log(`Instructor Service running on port ${PORT}`);
});