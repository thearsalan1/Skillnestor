📚 SkillNester LMS Backend

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-Backend-lightgrey?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen?logo=mongodb)
![JWT Auth](https://img.shields.io/badge/Auth-JWT-blue?logo=jsonwebtokens)


Node.js Express MongoDB JWT Auth
A modular, scalable backend for the SkillNester Learning Management System (LMS) — built with Express, MongoDB, and emotional precision. Designed to manage courses, subjects, PDF resources, and access control through clean, secure APIs.

🚀 Features
- Course Management
- Create, retrieve, and delete courses
- Subjects are relationally mapped to courses
- Subject Module
- Create subjects linked to courses
- Fetch subjects by course ID
- Delete subjects with automatic cleanup
- PDF Upload System
- Upload multiple PDFs per subject
- Store metadata (originalname, url, uploadedAt)
- Delete PDFs by ID with file system cleanup
- Relational Integrity
- Subjects are pushed into the course’s subjects array on creation
- Automatically removed on deletion
- Protected Routes
- Admin-only access for sensitive operations
- JWT-based authentication with role-based middleware
- Modular Structure
- Clean separation of concerns: routes, controllers, models, middleware

🌐 Frontend Integration
This backend is designed to integrate with a dedicated frontend application (React-based), which will be developed in future stages of the SkillNester project. All APIs are structured for seamless communication and secure data flow.

🛠️ Tech Stack
- Server: Express.js
- Database: MongoDB + Mongoose
- Authentication: JWT + Role-based Middleware
- Testing: Postman
- Deployment-ready: Vercel (frontend), Render or Railway (backend)

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
📘 Courses
- POST /api/courses — Create course (Admin only)
- GET /api/courses — Get all courses
- GET /api/courses/:id — Get course by ID
- DELETE /api/courses/:id — Delete course (Admin only)
📗 Subjects
- POST /api/subjects — Create subject (Admin only)
- GET /api/subjects — Get all subjects (Admin only)
- GET /api/subjects/course/:courseId — Get subjects by course
- DELETE /api/subjects/:id — Delete subject (Admin only)
📄 PDFs
- POST /api/pdf/:subjectId — Upload PDF to subject (Admin only)
- GET /api/pdf/:subjectId — Get PDFs for a subject (Authenticated users)
- GET /api/pdf/admin/all — Get all PDFs (Admin only)
- DELETE /api/pdf/:subjectId/:pdfId — Delete PDF (Admin only)

🧪 Testing
Use Postman to test all endpoints. Auth-protected routes require a valid JWT token with the admin role.



🧙‍♂️ Author
Arsalan
