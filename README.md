# FundFlo

## Introduction
FundFlo is a web platform designed to connect **investors** and **companies/startups** by enabling the sharing of innovative ideas and funding opportunities.  
Users can submit detailed project listings with text and images, and explore other projects as investors or collaborators.  
The platform is designed as a prototype demonstrating frontend integration with Firebase for authentication and data storage.

## Project Type
Frontend

## Deployed App
Frontend: [https://fund-flo.netlify.app/](https://fund-flo.netlify.app/)  
Backend: *Not applicable (handled by Firebase services directly)*  
Database: Firebase Firestore

## Directory Structure
```
FundFlo/
├── dist/
├── node_modules/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── A dynamic platform where creativity meets opportunity to fuel growth..png
│   │   ├── Be a part of.png
│   │   ├── Firstslide.png
│   │   ├── Got an idea and need money to start.png
│   │   ├── Got an Idea See who believes in it.png
│   │   ├── Help startups grow while also increasing your own money.png
│   │   ├── Invest (1).png
│   │   ├── logo.png
│   │   └── Welcome to FundFlo — Supporting Startups and Investors.png
│   ├── Components/
│   │   ├── Carousel.jsx
│   │   ├── Input.jsx
│   │   └── Navbar.jsx
│   ├── Pages/
│   │   ├── AddProject.jsx
│   │   ├── Companies.jsx
│   │   ├── Home.jsx
│   │   ├── Investors.jsx
│   │   ├── Login.jsx
│   │   ├── ProjectDetails.jsx
│   │   └── Signup.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── firebase.js
│   ├── index.css
│   ├── index.html
│   ├── main.jsx
│   └── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── vite.config.js
└── postcss.config.js
```

## Video Walkthrough of the project
[Demo Video]()


## Video Walkthrough of the codebase
[Demo Video]()

## Features
- **User Authentication** with Firebase (email/password)
- **Project Submission** form with multiple sections and image link support
- Dynamic **Navbar** showing login/signup or user info & logout based on auth state
- Data persistence in **Firebase Firestore**
- Image handling via URLs (avoiding CORS/storage delays)
- Simple UPI field for prototype payment

## Design decisions or assumptions
- Firebase Authentication is used instead of a custom backend for faster MVP development
- Image uploads are replaced by image URL input to avoid upload-related CORS issues
- Payment gateway not implemented — UPI ID included only as placeholder
- Tailwind CSS chosen for rapid and consistent styling
- Deployed as a static site on Netlify, using Firebase purely as an API/backend

## Installation & Getting started

### Clone the repo
```
git clone https://github.com/RaghavSingh01/FundFlo.git
```
### Navigate into the project
```

cd FundFlo
```
### Install dependencies
```
npm install
```

### Run the development server
```
npm run dev
```

## Usage
- Visit the deployed site or run locally
- Click **Signup** to create an account
- Log in with your credentials
- Use the **Add Project** form to submit project details
- Explore the investor/company pages to view projects

(Or create your own account via Signup form)

## APIs Used
- **Firebase Authentication API** – for user account creation and login
- **Firebase Firestore API** – for project data storage
- **Firebase Storage API (optional)** – for file uploads (currently replaced with image URLs)

## API Endpoints
*Not applicable* — This project’s frontend interacts directly with Firebase SDK methods instead of custom REST endpoints.  


## Technology Stack
- **React.js** – Frontend framework
- **Vite** – Development/build tool
- **Tailwind CSS** – Styling framework
- **Firebase** – Backend-as-a-Service
  - Firebase Authentication
  - Firestore (NoSQL Database)
  - Firebase Storage (optional for images)
- **Netlify** – Deployment host

