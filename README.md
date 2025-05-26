# ShopCo - Modern E-commerce Platform

A modern e-commerce platform built with Vue 3, featuring a responsive design, real-time updates, and seamless shopping experience.

## 🚀 Features

- 🛍️ Product browsing with filtering and sorting
- 🔍 Advanced search functionality
- 🛒 Shopping cart management
- 👤 User authentication
- 💳 Secure checkout process
- 📱 Fully responsive design
- ⭐ Product reviews and ratings
- 🎯 Featured products and new arrivals sections
- 📸 Cloudinary image management
- 🔥 Firebase backend integration

## 🛠️ Tech Stack

- **Frontend:**

  - Vue 3 (Composition API)
  - Tailwind CSS
  - Pinia (State Management)
  - Vue Router
  - Swiper.js (Sliders)

- **Backend:**
  - Firebase
    - Authentication
    - Firestore Database
    - Cloud Storage
  - Cloudinary (Image Management)

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase account
- Cloudinary account

## 🔧 Environment Setup

1. Clone the repository:

```bash
git clone https://github.com/yourusername/shopco-vue.git
cd shopco-vue
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory:

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id

VITE_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
VITE_CLOUDINARY_API_KEY=your_cloudinary_api_key
VITE_CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

## 🚀 Getting Started

1. Start the development server:

```bash
npm run dev
# or
yarn dev
```

2. Build for production:

```bash
npm run build
# or
yarn build
```

## 📁 Project Structure

```
src/
├── assets/          # Static assets
├── components/      # Vue components
├── firebase/        # Firebase configuration
├── router/          # Vue Router configuration
├── stores/          # Pinia stores
├── views/           # Page components
└── App.vue          # Root component
```

## 🔐 Firebase Setup

1. Create a new Firebase project
2. Enable Authentication (Email/Password)
3. Set up Firestore Database
4. Configure Security Rules
5. Add your Firebase configuration to `.env`

## ☁️ Cloudinary Setup

1. Create a Cloudinary account
2. Create a new cloud
3. Get your cloud name, API key, and API secret
4. Add your Cloudinary configuration to `.env`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 📱 Responsive Design

The application is fully responsive and optimized for:

- Mobile devices
- Tablets
- Desktop screens

## 🔒 Security

- Firebase Authentication for user management
- Secure API endpoints
- Protected routes
- Environment variables for sensitive data

## 🚀 Deployment

1. Build the project:

```bash
npm run build
```

2. Deploy to your preferred hosting service (e.g., Vercel, Netlify, Firebase Hosting)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- Vue.js team for the amazing framework
- Firebase for backend services
- Cloudinary for image management
- Tailwind CSS for styling
- All contributors who have helped with the project
