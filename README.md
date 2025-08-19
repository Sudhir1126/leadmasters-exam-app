# Leadmasters Exam App

A React-based web application for taking exams, viewing results, and tracking progress. Styled with modern UI effects for a professional look.

---

## Features

- User Authentication (Login/Register)
- Timed Exam with multiple-choice questions
- Interactive question cards with hover effects
- View Exam Results
- Professional Dashboard with summary cards
- Stylish UI with gradients, hover effects, and animations
- Responsive design

---

## Setup Instructions

# 1. Clone the Repository
git clone https://github.com/your-username/leadmasters-exam-app.git

# 2. Navigate into the Project Folder
cd leadmasters-exam-app

# 3. Install Dependencies
npm install

# 4. Run the Development Server
npm run dev

# The app will start on http://localhost:5173 by default.
# Open this URL in your browser to access the app.

# 5. Build for Production (Optional)
npm run build
# This will generate a 'dist' folder containing production-ready files.

# 6. Preview Production Build (Optional)
npm run preview
# This lets you test the production build locally before deploying.


## API Testing (Frontend-Only Version)

> Note: This app currently uses **localStorage** to store user credentials and exam answers. There is no backend API yet. 

- **Register User**
  1. Open the Register page.
  2. Enter email and password.
  3. Click **Register**. User data is saved in `localStorage`.

- **Login User**
  1. Open the Login page.
  2. Enter registered email and password.
  3. Click **Login**. Authentication is done using `localStorage`.

- **Submit Exam**
  1. Start the exam from the Dashboard.
  2. Answer all questions and click **Submit Exam**.
  3. Exam score is calculated and stored in `localStorage`.

- **View Result**
  1. Click **View Result** from Dashboard.
  2. The score is retrieved from `localStorage`.

> Future Backend: You can replace the `localStorage` logic with API calls to your backend. Example endpoints would include:
> - `POST /register`
> - `POST /login`
> - `POST /submit-exam`
> - `GET /result`


  Screenshots
<img width="1034" height="1102" alt="image" src="https://github.com/user-attachments/assets/f71b6f75-f0ad-4467-87f7-e8bb43c4461a" />
<img width="2016" height="1012" alt="image" src="https://github.com/user-attachments/assets/7be91a19-1eb8-44f2-8c60-3b33809c1762" />
<img width="1101" height="861" alt="image" src="https://github.com/user-attachments/assets/0c0ec6cc-66c1-434f-a70d-0de3132cbf8f" />





