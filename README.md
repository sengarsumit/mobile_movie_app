🎬 Movie App - React Native + Appwrite + TMDB API
This is a React Native Movie App built using Expo, integrating Appwrite for authentication and backend services, and The Movie Database (TMDB) API to fetch movie data. The app allows users to browse, search, and view trending movies based on search activity.

✅ Features Implemented
🔐 User Signup & Login with Appwrite Auth

📬 User data saved in Appwrite DB (includes username and user ID)

🔍 Search movies using TMDB API

📈 Trending movies based on search count (tracked via Appwrite)

🧪 Dummy Profile & Saved Pages set up for future development

🚀 Built with expo-router and clean screen navigation

🛠 In Progress
🖼 Profile Picture Upload

Will be implemented using Cloudinary. The image will be selected during signup, uploaded to Cloudinary, and its URL saved to the Appwrite DB alongside the user data.

🧰 Tech Stack
Frontend: React Native (Expo)

Backend: Appwrite (Auth + Database)

Image Hosting: Cloudinary (WIP)

API: TheMovieDB.org

Routing: expo-router

State Management: React Context API

🔧 Setup Instructions
Clone the repo:

bash
Copy
Edit
git clone https://github.com/your-username/movie-app.git
cd movie-app
Install dependencies:

bash
Copy
Edit
npm install
Configure your .env or use app.config.js:

ini
Copy
Edit
EXPO_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
EXPO_PUBLIC_APPWRITE_DATABASE_ID=your_db_id
EXPO_PUBLIC_APPWRITE_COLLECTION_ID=your_collection_id
EXPO_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
EXPO_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
TMDB_API_KEY=your_tmdb_key
Start the app:

bash
Copy
Edit
npx expo start
📌 Note
This project was initially set up by following a YouTube tutorial. I then extended the project by implementing authentication, saving user data in Appwrite DB, and building dummy pages. Profile image upload and rendering are next in line to complete.

