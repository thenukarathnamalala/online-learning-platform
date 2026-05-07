const swaggerJsDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Instructor Service API",
      version: "1.0.0",
      description: "Instructor Microservice API"
    },
    servers: [
      {
        url: "http://localhost:5003"
      }
    ]
  },
  apis: ["./src/routes/*.js"]
};

module.exports = swaggerJsDoc(options);