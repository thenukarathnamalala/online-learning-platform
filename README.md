# Online Learning Platform - Microservices Architecture

A containerized microservices-based backend system for an online learning platform built using Node.js, Express.js, MongoDB, Docker, Docker Compose, JWT Authentication, Swagger, and API Gateway architecture.

## Features

- User authentication with JWT
- Course management CRUD APIs
- Instructor management CRUD APIs
- Student enrollment management
- API Gateway for centralized routing
- Swagger/OpenAPI documentation
- MongoDB database integration
- Dockerized microservices
- Docker Compose multi-container setup

## Microservices

| Service | Description | Port |
|---|---|---|
| API Gateway | Central entry point | 3000 |
| Auth Service | Register, login, JWT auth | 5001 |
| Course Service | Course CRUD operations | 5002 |
| Instructor Service | Instructor CRUD operations | 5003 |
| Enrollment Service | Student course enrollment | 5004 |
| MongoDB | Database | 27017 |

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Swagger / OpenAPI
- Docker
- Docker Compose
- Git & GitHub

## Project Structure

```txt
online-learning-platform/
├── api-gateway/
├── auth-service/
├── course-service/
├── instructor-service/
├── enrollment-service/
├── docker-compose.yml
├── .dockerignore
├── .gitignore
└── README.md