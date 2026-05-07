const swaggerJsDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",

    info: {
      title: "Course Service API",
      version: "1.0.0",
      description: "Course Microservice API"
    },

    servers: [
      {
        url: "http://localhost:5002"
      }
    ]
  },

  apis: ["./src/routes/*.js"]
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = swaggerSpec;