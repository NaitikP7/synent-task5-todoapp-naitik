# Synent Task 5 - Todo Application

## Overview

This is a modern Todo Application built using React and Vite. The application enables users to efficiently manage daily tasks through a clean and responsive interface. Users can create, view, complete, and delete tasks while benefiting from persistent storage using the browser's local storage.

The application also includes a calendar and real-time clock to improve task organization and productivity.

---

## Features

### Task Management

* Create new tasks with a title and description
* View all tasks in an organized card-based layout
* Mark tasks as completed
* Delete tasks when no longer needed

### Persistent Storage

* Tasks are stored in the browser's Local Storage
* Data remains available after page refresh or browser restart

### Productivity Tools

* Integrated calendar component
* Real-time clock display

### User Interface

* Clean and modern design
* Responsive layout
* Dynamic task card styling for better visual organization

---

## Technologies Used

* React
* Vite
* Tailwind CSS
* Lucide React
* React Calendar

---

## Installation

### Prerequisites

Ensure the following software is installed:

* Node.js
* npm

### Clone the Repository

```bash
git clone https://github.com/your-username/synent-task5-todoapp.git
```

### Navigate to the Project Directory

```bash
cd synent-task5-todoapp
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

The application will be available at:

```bash
http://localhost:5173
```

---

## Project Structure

```text
src/
├── components/
│   ├── AddNoteForm.jsx
│   ├── Calendar.css
│   ├── Calendar.jsx
│   ├── NoteCard.jsx
│   ├── NotesList.jsx
│   ├── SideBar.css
│   └── Time.jsx
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

---

## Functionalities

### Add Task

Users can create a new task by entering the required information.

### Complete Task

Tasks can be marked as completed using the completion control provided on each task card.

### Delete Task

Tasks can be permanently removed from the application.

### Calendar Integration

A calendar component is available to assist with date tracking and planning.

### Real-Time Clock

The current time is displayed and updated automatically.

---

## Future Enhancements

Potential improvements include:

* Task categories
* Due dates and reminders
* Task priority levels
* Search and filtering functionality
* Dark mode support
* Drag-and-drop task management

---

## License

This project was developed as part of the Synent Internship Task submission and is intended for educational and demonstration purposes.
