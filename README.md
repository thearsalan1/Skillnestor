📚 SkillNester LMS Backend


![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-Backend-lightgrey?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen?logo=mongodb)
![JWT Auth](https://img.shields.io/badge/Auth-JWT-blue?logo=jsonwebtokens)

A modular, scalable backend for a Learning Management System (LMS), built with Express, MongoDB, and emotional precision. Designed to handle courses, subjects, enrollment, access control, and more — with clean APIs and dramatic flair.

🚀 Features
- Course Management
Create, retrieve, and delete courses with relational subject mapping.
- Subject Module
Create subjects linked to courses, fetch by course ID, and delete with automatic cleanup.
- Relational Integrity
Subjects are pushed into the course’s subjects array on creation and removed on deletion.
- Protected Routes
Admin-only access for sensitive operations using middleware guards.
- Modular Structure
Clean separation of routes, controllers, models, and middleware.

🌐 Frontend Integration
This backend is built to integrate with a dedicated frontend application, which will be developed and merged in future stages of the SkillNester project. The backend APIs are structured to support seamless communication with the frontend for a complete LMS experience.

🛠️ Tech Stack

**Server:** Express.js  
**Database:** MongoDB + Mongoose  
**Authentication:** JWT + Role-based Middleware  
**Testing:** Postman  
**Deployment-ready:** Vercel (for frontend), Render or Railway (for backend)



📁 Folder Structure
skillnester/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── config/
│   └── server.js
├── .gitignore
└── README.md



📦 Installation
cd skillnester
npm install
cd backend
npm install
npm run dev



📮 API Endpoints
Courses
- POST /api/courses — Create course (Admin only)
- GET /api/courses — Get all courses
- GET /api/courses/:id — Get course by ID
- DELETE /api/courses/:id — Delete course (Admin only)
Subjects
- POST /api/subjects — Create subject (Admin only)
- GET /api/subjects — Get all subjects (Admin only)
- GET /api/subjects/course/:courseId — Get subjects by course
- DELETE /api/subjects/:id — Delete subject (Admin only)

🧪 Testing
Use Postman to test all endpoints. Auth-protected routes require a valid JWT token with admin role.

📊 Roadmap
- Day 5: PDF Upload
- Day 6: Enrollment System
- Day 7: Access Control & Cleanup
- Day 8: Search & Filter System

🧙‍♂️ Author
Arsalan 

