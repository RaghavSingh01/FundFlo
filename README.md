# FundFlo

FundFlo is a web platform dedicated to empowering investors and companies by facilitating innovative funding opportunities and idea sharing. The platform enables seamless project submissions with rich multimedia, along with secure user authentication and personalized experiences.

---

## Features

- **Project Submission**  
  Users can submit detailed projects including title, tagline, problem statement, solutions, visions, business models, impact statements, founder info, and multiple images or image links across various sections.

- **Image Handling**  
  Supports adding multiple image URLs per section, allowing users to showcase visuals while keeping the process quick and simple.  

- **User Authentication**  
  Secure login and signup functionality powered by Firebase Authentication with email/password. User session management ensures appropriate UI updates such as hiding login/signup buttons when logged in.

- **Responsive Design**  
  Clean and modern UI designed with Tailwind CSS, optimized for various screen sizes.

- **Firebase Integration**  
  Uses Firebase services for backend including Firestore for project data storage, Firebase Storage (optional) for file uploads, and Firebase Authentication for user management.

---

## Technology Stack

- **Frontend:** React.js, Tailwind CSS, React Router  
- **Backend Services:** Firebase Firestore, Firebase Storage, Firebase Authentication  
- **Build Tools:** Vite bundler  
- **Deployment:** Prepared for Firebase Hosting, Vercel, or Netlify

---

## Getting Started

### Prerequisites
- Node.js and npm installed
- Firebase project with Firestore and Authentication enabled

### Setup

1. **Clone the repository:**
git clone https://github.com/RaghavSingh01/FundFlo.git
cd FundFlo


2. **Install dependencies:**
npm install


3. **Start development server:**
npm run dev


4. **Open the app:**  
Visit [http://localhost:5173](http://localhost:5173) in your browser.

---

## Usage

- **Register an account** using the Signup page.  
- **Login** with your credentials.  
- Navigate to submit projects via the "Add Project" page.  
- Enter project details, including multiple image URLs.  
- Submit to save to Firestore.  
- Browse projects either as an investor or a company.

---

## Important Notes

- The prototype uses UPI ID input without integrated payment gateways (like Razorpay).  
- Built for demonstration purposes only, **not intended for professional use**.
- Firebase Authentication powers the secure login, signup, and user management.

---

## Folder Structure

```FundFlo/
├── index.html
├── package.json
├── postcss.config.js
├── public/
│ └── vite.svg
├── src/
│ ├── App.css
│ ├── App.jsx
│ ├── Components/
│ │ ├── AddProject.jsx
│ │ ├── Input.jsx
│ │ ├── Login.jsx
│ │ ├── Navbar.jsx
│ │ ├── Signup.jsx
│ │ └── (other components)
│ ├── assets/
│ │ └── logo.png
│ ├── firebase.js
│ ├── index.css
│ ├── main.jsx
│ └── pages/
│ └── (all page components)
├── tailwind.config.js
└── vite.config.js

```