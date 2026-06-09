# Synent Task 5 — Todo Application

A feature-rich, modern task management application built with **React 18** and **Vite**, designed to help users efficiently organize, track, and manage their daily tasks through an intuitive and visually polished interface. Developed as **Task 5** of the **Synent Technology Internship Program**.

---

## Table of Contents

- [Objective](#objective)
- [Overview](#overview)
- [Features](#features)
- [Steps Performed](#steps-performed)
- [Tools & Technologies Used](#tools--technologies-used)
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [Usage](#usage)
- [Outcome](#outcome)
- [Future Enhancements](#future-enhancements)
- [License](#license)

---

## Objective

The primary objective of this project was to build a **fully functional Todo application** using React that demonstrates core front-end development skills, including:

- **Component-based architecture** — Designing reusable, modular UI components.
- **State management** — Managing application state using React hooks (`useState`, `useEffect`).
- **Data persistence** — Implementing browser-based storage with the Web Storage API (`localStorage`) to retain tasks across sessions.
- **Responsive UI design** — Creating a clean, adaptive layout that works seamlessly across desktop and mobile viewports.
- **Modern styling** — Leveraging Tailwind CSS utility classes alongside custom gradient-based design tokens.

The project simulates a real-world productivity tool, reinforcing skills in event handling, conditional rendering, list manipulation, and persistent data flow within a React application.

---

## Overview

The application presents a two-panel layout: a **sidebar** containing a real-time clock, task creation form, and interactive calendar, and a **main content area** displaying all tasks as color-coded cards. Users can create tasks with a title and description, mark them as completed, and delete them — all with immediate visual feedback. Task data is automatically synchronized with `localStorage`, ensuring persistence across page refreshes and browser restarts.

---

## Features

### Task Management
- **Create tasks** with a title and detailed description via a dedicated form.
- **Mark tasks as completed** using the check-circle toggle on each card (completed tasks become visually dimmed).
- **Delete tasks** permanently with a single click using the delete button.

### Persistent Storage
- All tasks are serialized and stored in `localStorage` under the key `synent-tasks`.
- Data persists automatically across page refreshes and browser sessions.
- State initializes from `localStorage` on app load using a lazy initializer pattern.

### Productivity Tools
- **Real-time clock** — Displays the current date and time (day, month, year, hours, minutes, seconds in 12-hour format), updating every second via `setInterval`.
- **Interactive calendar** — Integrated `react-calendar` widget for date tracking and planning (visible on desktop viewports).

### Visual Design
- **Dynamic card colors** — Each task card is assigned one of four gradient color palettes based on the first character of the task title, ensuring visual variety.
- **Gradient-based design system** — Warm earthy tones (`#fef5e7`, `#f9e4c8`, `#1a7659`, `#f39c12`) for a cohesive, modern aesthetic.
- **Hover effects and transitions** — Shadow elevation on hover, scale animation on button press, and smooth opacity transitions for completed tasks.
- **Responsive layout** — Sidebar stacks above the task area on smaller screens; side-by-side on `lg` (1024px+) breakpoints.

---

## Steps Performed

### 1. Project Initialization
- Scaffolded the React project using **Vite** with the `@vitejs/plugin-react` preset for fast HMR-based development.
- Installed core dependencies: `react`, `react-dom`, `tailwindcss`, `lucide-react`, and `react-calendar`.

### 2. Component Architecture Design
- Decomposed the application into seven focused components:
  - `App` — Root component managing global task state and CRUD operations.
  - `AddNoteForm` — Controlled form for task creation with title and description fields.
  - `NotesList` — Container that maps over the task array and renders individual cards.
  - `NoteCard` — Individual task card with dynamic gradients, toggle, and delete controls.
  - `Time` — Live clock component using `useEffect` with `setInterval`.
  - `Calendar` — Wrapper around the `react-calendar` library with custom styling.

### 3. State Management & Data Persistence
- Implemented task state using `useState` with a **lazy initializer** to load from `localStorage` on first render.
- Synchronized state changes to `localStorage` via a `useEffect` hook that triggers on every task array update.
- Developed three core operations: `handleAddNote`, `toggleCompleted`, and `deleteCard` — each producing immutable state updates.

### 4. UI & Styling Implementation
- Configured **Tailwind CSS 4** with the `@tailwindcss/vite` plugin for zero-config styling.
- Designed a warm, earthy gradient color system for backgrounds, cards, and interactive elements.
- Implemented dynamic card color assignment using character-code-based index mapping.
- Added custom CSS for the calendar widget and sidebar layout (`Calendar.css`, `SideBar.css`).

### 5. Responsive Design & Polish
- Applied responsive breakpoints using Tailwind's `lg:` prefix to transition from stacked to side-by-side layout.
- Ensured the calendar is hidden on mobile (`hidden lg:block`) to preserve screen real estate.
- Added hover/active micro-animations on buttons and shadow transitions on task cards.

### 6. Testing & Verification
- Verified CRUD operations (create, read, complete, delete) across multiple browsers.
- Confirmed `localStorage` persistence after page refresh and browser restart.
- Tested responsive layout across mobile, tablet, and desktop viewports.

---

## Tools & Technologies Used

| Technology / Tool        | Role                                                                 |
| ------------------------ | -------------------------------------------------------------------- |
| **React 18**             | UI library for building the component-based interface                |
| **Vite 5**               | Lightning-fast build tool and development server with HMR            |
| **Tailwind CSS 4**       | Utility-first CSS framework for rapid, responsive styling            |
| **Lucide React**         | Modern icon library providing `CircleCheckBig` and `Minus` icons     |
| **react-calendar**       | Pre-built interactive calendar widget for date tracking              |
| **JavaScript (ES6+)**    | Core programming language with destructuring, arrow functions, etc.  |
| **HTML5**                | Semantic markup for the application structure                        |
| **CSS3**                 | Custom styles for calendar and sidebar components                    |
| **localStorage API**     | Web Storage API for client-side data persistence                     |
| **ESLint**               | Static analysis tool for code quality and consistency                |
| **Git & GitHub**         | Version control and repository hosting                               |
| **VS Code**              | Primary code editor and development environment                      |

---

## Project Structure

```text
synent-task5-todoapp-naitik/
├── public/                     # Static assets
├── src/
│   ├── assets/                 # Images and media files
│   ├── components/
│   │   ├── AddNoteForm.jsx     # Controlled form for creating new tasks
│   │   ├── Calendar.css        # Custom styles for the calendar widget
│   │   ├── Calendar.jsx        # Interactive calendar using react-calendar
│   │   ├── NoteCard.jsx        # Individual task card with dynamic colors
│   │   ├── NotesList.jsx       # Grid container rendering all task cards
│   │   ├── SideBar.css         # Sidebar-specific layout styles
│   │   └── Time.jsx            # Real-time clock with date display
│   ├── styles/
│   │   └── App.css             # Additional application styles
│   ├── App.css                 # Root-level component styles
│   ├── App.jsx                 # Root component with state management
│   ├── index.css               # Global base styles and Tailwind directives
│   └── main.jsx                # React DOM entry point
├── dist/                       # Production build output
├── index.html                  # HTML template
├── package.json                # Dependencies and npm scripts
├── vite.config.js              # Vite build configuration
├── eslint.config.js            # ESLint configuration
└── README.md
```

---

## Setup & Installation

### Prerequisites

Ensure the following are installed on your system:

- **Node.js** (v18.0.0 or higher recommended)
- **npm** (v9.0.0 or higher)

### Installation Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/synent-task5-todoapp-naitik.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd synent-task5-todoapp-naitik
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

5. **Open the application:**

   Navigate to `http://localhost:5173` in your browser.

### Build for Production

```bash
npm run build
```

The optimized output will be generated in the `dist/` directory.

---

## Usage

1. **Add a task** — Enter a title and description in the sidebar form, then click the "Add Task" button.
2. **Complete a task** — Click the check-circle icon (top-left of any task card) to toggle its completion status. Completed tasks appear dimmed.
3. **Delete a task** — Click the red minus button (top-right of the card) to permanently remove the task.
4. **Track dates** — Use the interactive calendar in the sidebar to view dates and plan ahead.
5. **Monitor time** — The real-time clock at the top of the sidebar displays the current date and time.

---

## Outcome

### Final Result
A fully functional, visually polished **Todo Application** that demonstrates proficiency in modern front-end development with React.

### Key Achievements
- **Complete CRUD functionality** — Users can create, read, update (toggle completion), and delete tasks through an intuitive interface.
- **Persistent data layer** — Tasks survive page refreshes and browser restarts through `localStorage` integration with React state synchronization.
- **Dynamic visual design** — Color-coded task cards with gradient backgrounds provide instant visual differentiation, enhancing the user experience.
- **Responsive architecture** — The two-panel layout gracefully adapts from a stacked mobile view to a side-by-side desktop layout using Tailwind CSS responsive utilities.
- **Real-time productivity tools** — An integrated live clock and interactive calendar add practical utility beyond basic task management.
- **Clean component architecture** — Seven focused, reusable components following React best practices demonstrate strong understanding of component decomposition and prop-driven data flow.

### Skills Demonstrated
- React hooks (`useState`, `useEffect`) for state management and side effects
- Controlled form components with event handling
- Client-side data persistence using the Web Storage API
- Responsive UI design with Tailwind CSS utility classes
- Component-based architecture with prop drilling
- Dynamic styling through computed class names

---

## Future Enhancements

- Task categories and labels for better organization
- Due dates and reminder notifications
- Task priority levels (Low, Medium, High)
- Search and filtering functionality
- Dark mode toggle
- Drag-and-drop task reordering
- Export tasks as PDF or CSV

---

## License

This project was developed by **Naitik Patel** as part of the **Synent Technology Internship Program** and is intended for educational and demonstration purposes. All rights reserved.
