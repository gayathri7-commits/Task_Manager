# Simple Task Manager App

A clean and simple Kanban-style Task Manager built to track tasks across three stages: Todo, In Progress, and Done.

## 🚀 Live Link
* **Frontend Deployment:** https://task-manager-xi-lovat-65.vercel.app/

## 🛠️ Tech Stack
* HTML5, CSS3, and Vanilla JavaScript (No frameworks)
* **Data Storage:** Browser LocalStorage to keep tasks saved on page refresh

## 🧠 Key Decisions & Tradeoffs
* **Simple State Management:** The app uses a single JavaScript array to hold the tasks. Whenever a task is added, moved, or deleted, the board updates automatically to match the array.
* **Basic Security:** Included a small helper function to escape HTML characters, preventing basic script injection issues if a user type HTML tags into a task title.
* **Client-Side Focus:** Since the core assignment focused on the layout, responsiveness, and basic task actions, the login and registration screens simulate transitions locally without a backend database. 

## 📋 Features Completed
- [x] Login & Register screen switching
- [x] Create, move, and delete tasks
- [x] Clear column tracking (Todo, In Progress, Done)
- [x] Clean, responsive layout using CSS Grid and Flexbox
