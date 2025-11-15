📚 SkillNester LMS — Full Stack

- [Node.js](https://nodejs.org/en)
- [Express.js](https://expressjs.com)
- [MongoDB](https://www.mongodb.com)
- [JWT (JSON Web Tokens)](https://jwt.io/introduction)
- [React](https://react.dev)
- [Zustand](https://zustand.docs.pmnd.rs/getting-started/introduction)
- [Cloudinary](https://cloudinary.com)
- [Responsive Web Design (MDN Guide)](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Responsive_design)

SkillNester is a modular, full-stack Learning Management System (LMS) built with Node.js, Express, MongoDB, and React. Designed for scalability, clarity, and emotional engagement, it enables seamless course management, subject organization, PDF resource delivery, and secure user access—all through clean, role-based APIs and a cinematic frontend experience.

🚀 Key Features
🔐 Authentication & Access Control
- JWT-based login system
- Role-based middleware (Admin/User)
- Protected routes for sensitive operations
📘 Course & Subject Management
- Create, retrieve, and delete courses
- Subjects relationally mapped to courses
- Auto-cleanup of subjects on course deletion
📄 PDF Resource System
- Upload multiple PDFs per subject via Cloudinary
- Store metadata (filename, URL, timestamp)
- Delete PDFs with Cloudinary + DB cleanup
- Secure access for authenticated users
🧱 Modular Architecture
- Clean separation of concerns:
- routes/, controllers/, models/, middlewares/, config/
- Scalable and maintainable backend structure

🌐 Frontend Features
🧑‍💼 Admin Pages
- Dashboard: Overview of all LMS data
- Course Management: Create, delete, and view courses
- Subject Management: Create, delete, and filter subjects by course
- PDF Management: Upload, view, and delete notes (PDFs) per subject
👨‍🎓 User Pages
- Home Page: Hero section with CTA, featured courses
- Courses Page: Browse all courses
- Subjects Page: View subjects under a course
- Notes Page: View PDFs under a subject
- PDF Viewer: Securely view/download notes
⚙️ Frontend Stack
- React + Vite for blazing-fast UI
- Zustand for global state management
- Axios for API communication
- React Router for navigation
- Cloudinary for PDF hosting
- Tailwind CSS for styling
- Fully Responsive across devices

📦 Installation
# Root setup
cd skillnester
npm install

# Backend setup
cd backend
npm install
npm start server

# Frontend setup
cd frontend
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
PDFs
- POST /api/pdf/:subjectId — Upload PDF (Admin only)
- GET /api/pdf/:subjectId — Get PDFs for a subject (Authenticated users)
- GET /api/pdf/admin/all — Get all PDFs (Admin only)
- DELETE /api/pdf/:subjectId/:pdfId — Delete PDF (Admin only)

🧪 Testing
Use Postman to test all endpoints. Auth-protected routes require a valid JWT token with the appropriate role.

🗂️ Folder Structure
skillnester/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── config/
|   ├── utils/
│   └── server.js
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── store/         # Zustand state
│   ├── services/      # Axios API calls
│   └── App.jsx
├── .gitignore
└── README.md


🧙‍♂️ Author
Arsalan — Full Stack + DevOps Engineer crafting cinematic, modular learning experiences with emotional precision.