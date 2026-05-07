const swaggerJsDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Online Learning Platform API Gateway",
      version: "1.0.0",
      description: "API Gateway for Auth, Course, Instructor and Enrollment services"
    },
    servers: [
      {
        url: "http://localhost:3000"
      }
    ]
  },
  apis: ["./src/server.js"]
};

module.exports = swaggerJsDoc(options);