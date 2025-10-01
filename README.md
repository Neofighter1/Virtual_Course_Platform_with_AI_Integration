# 📚 Virtual Course Platform with AI Integration

A comprehensive full-stack **Learning Management System (LMS)** built with the **MERN Stack**, featuring AI-powered course search, secure authentication, payment integration, and intuitive dashboards for both students and instructors.

---

## ✨ Key Features

### 🎓 For Students
- Browse and enroll in courses with seamless payment integration
- Track enrolled courses and learning progress
- AI-powered course search and recommendations
- Interactive video lectures with course materials
- Leave reviews and ratings for courses
- Profile management with avatar upload

### 👨‍🏫 For Instructors/Admins
- Complete course management (create, edit, delete)
- Lecture management with video uploads
- Student enrollment tracking
- Revenue and analytics dashboard
- Course review monitoring

### 🔒 Security & Authentication
- JWT-based secure authentication
- Email verification system
- Password reset functionality
- Protected routes with role-based access control

### 💳 Payment & Orders
- Integrated payment gateway
- Order history and receipts
- Automated email notifications

### 🧠 AI Integration
- AI-powered course search and recommendations
- Intelligent content generation assistance

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** React.js with Vite
- **State Management:** Redux Toolkit
- **Styling:** CSS3 with responsive design
- **Routing:** React Router
- **HTTP Client:** Axios

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JWT (JSON Web Tokens)
- **File Upload:** Multer
- **Cloud Storage:** Cloudinary
- **Email Service:** Nodemailer

### Additional Services
- **AI Integration:** Custom AI controller for intelligent features
- **Payment Processing:** Payment gateway integration
- **Media Hosting:** Cloudinary for images and videos

---

## 📁 Project Structure

```
Virtual-Courses/
├── backend/
│   ├── index.js                 # Main server entry point
│   ├── configs/
│   │   ├── connectDb.js         # Database connection
│   │   ├── cloudinary.js        # Cloudinary configuration
│   │   ├── Mail.js              # Email service setup
│   │   └── token.js             # JWT token utilities
│   ├── controllers/
│   │   ├── authController.js    # Authentication logic
│   │   ├── userController.js    # User management
│   │   ├── courseController.js  # Course operations
│   │   ├── orderController.js   # Order processing
│   │   ├── reviewController.js  # Review management
│   │   └── aiController.js      # AI features
│   ├── middlewares/
│   │   ├── isAuth.js            # Authentication middleware
│   │   └── multer.js            # File upload middleware
│   ├── models/
│   │   ├── userModel.js
│   │   ├── courseModel.js
│   │   ├── lectureModel.js
│   │   ├── orderModel.js
│   │   └── reviewModel.js
│   └── routes/
│       ├── authRoute.js
│       ├── userRoute.js
│       ├── courseRoute.js
│       ├── paymentRoute.js
│       ├── reviewRoute.js
│       └── aiRoute.js
│
└── frontend/
    ├── src/
    │   ├── App.jsx              # Main app component
    │   ├── components/          # Reusable components
    │   ├── pages/               # Page components
    │   │   ├── Home.jsx
    │   │   ├── Login.jsx
    │   │   ├── SignUp.jsx
    │   │   ├── Profile.jsx
    │   │   ├── AllCourses.jsx
    │   │   └── admin/           # Admin pages
    │   ├── redux/               # Redux store & slices
    │   └── customHooks/         # Custom React hooks
    └── vite.config.js
```

---

## ⚡ Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- Cloudinary account
- Email service credentials (SMTP)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Neofighter1/Virtual_Course_Platform_with_AI_Integration.git
cd Virtual_Course_Platform_with_AI_Integration
```

2. **Backend Setup**
```bash
cd backend
npm install
```

3. **Create `.env` file in backend folder**
```env
# Server
PORT=5000

# Database
MONGODB_URI=your_mongodb_connection_string

# JWT
JWT_SECRET=your_jwt_secret_key

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Email Configuration
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USER=your_email@gmail.com
MAIL_PASS=your_app_password

# Frontend URL (for CORS)
CLIENT_URL=http://localhost:5173
```

4. **Frontend Setup**
```bash
cd ../frontend
npm install
```

5. **Create `.env` file in frontend folder**
```env
VITE_API_URL=http://localhost:5000
```

6. **Run the Application**

Open two terminals:

**Terminal 1 - Backend:**
```bash
cd backend
npm start
# or for development with auto-reload
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

7. **Access the Application**
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

---

## 🔑 Environment Variables

### Backend (.env)
| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | `5000` |
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/lms` |
| `JWT_SECRET` | Secret key for JWT | `your_secret_key` |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name | `your_cloud_name` |
| `CLOUDINARY_API_KEY` | Cloudinary API key | `123456789` |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret | `your_secret` |
| `MAIL_HOST` | SMTP server | `smtp.gmail.com` |
| `MAIL_PORT` | SMTP port | `587` |
| `MAIL_USER` | Email address | `your@email.com` |
| `MAIL_PASS` | Email password/app password | `your_password` |
| `CLIENT_URL` | Frontend URL | `http://localhost:5173` |

### Frontend (.env)
| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API URL | `http://localhost:5000` |

---

## 📚 API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/forgot-password` - Request password reset
- `POST /api/auth/verify-email` - Verify email address

### User Management
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/update` - Update profile
- `POST /api/user/upload-avatar` - Upload profile picture

### Courses
- `GET /api/courses` - Get all courses
- `GET /api/courses/:id` - Get single course
- `POST /api/courses` - Create course (Admin)
- `PUT /api/courses/:id` - Update course (Admin)
- `DELETE /api/courses/:id` - Delete course (Admin)

### Lectures
- `GET /api/courses/:courseId/lectures` - Get course lectures
- `POST /api/courses/:courseId/lectures` - Add lecture (Admin)
- `PUT /api/lectures/:id` - Update lecture (Admin)
- `DELETE /api/lectures/:id` - Delete lecture (Admin)

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders` - Get user orders

### Reviews
- `POST /api/reviews` - Add review
- `GET /api/courses/:courseId/reviews` - Get course reviews

### AI Features
- `POST /api/ai/search` - AI-powered course search
- `POST /api/ai/recommend` - Get AI recommendations

---

## 🎨 Features in Detail

### User Authentication Flow
1. User signs up with email and password
2. Email verification link sent
3. User verifies email
4. User can login and access protected routes
5. JWT token stored for session management

### Course Management
1. Admin creates course with details
2. Upload course thumbnail to Cloudinary
3. Add multiple lectures with video content
4. Set course pricing
5. Publish course for students

### Payment Process
1. Student selects course
2. Initiates payment
3. Payment gateway processes transaction
4. Order created in database
5. Course access granted
6. Confirmation email sent

### AI Integration
- Natural language course search
- Personalized course recommendations
- Content generation assistance for instructors

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Neofighter1**
- GitHub: [@Neofighter1](https://github.com/Neofighter1)
- Repository: [Virtual_Course_Platform_with_AI_Integration](https://github.com/Neofighter1/Virtual_Course_Platform_with_AI_Integration)

---

## 🙏 Acknowledgments

- MongoDB for the database
- Cloudinary for media hosting
- All open-source contributors

---

## 📧 Support

For support, email or open an issue in the GitHub repository.

---

**⭐ If you find this project useful, please consider giving it a star!**
