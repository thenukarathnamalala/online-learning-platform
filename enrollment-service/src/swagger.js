const swaggerJsDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Enrollment Service API",
      version: "1.0.0",
      description: "Enrollment Microservice API"
    },
    servers: [
      {
        url: "http://localhost:5004"
      }
    ]
  },
  apis: ["./src/routes/*.js"]
};

module.exports = swaggerJsDoc(options);