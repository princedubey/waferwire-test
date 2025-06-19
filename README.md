# Role-Based Dashboard Application

A modern, responsive dashboard application built with **React**, **TypeScript**, and **Vite**. This project features role-based authentication, a collapsible sidebar, and a clean, Bootstrap-powered UI. It is ideal as a starter template for admin panels, analytics dashboards, or internal tools.

## Features

- **Role-Based Authentication**: Admin and user roles with mock login.
- **Dashboard Layout**: Collapsible sidebar, responsive design, and main content area.
- **Pages**: Dashboard, User Management (admin only), Reports, Profile, About.
- **Demo Accounts**: Easily log in as admin or user for testing.
- **Mock Data**: Users, reports, and dashboard stats are provided via mock data files.
- **Bootstrap 5 Styling**: Custom theming and gradients for a modern look.
- **TypeScript Types**: Strongly typed data models for safety and clarity.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```bash
# Clone the repository
$ git clone <your-repo-url>
$ cd waferwire-test

# Install dependencies
$ npm install
# or
yarn install
```

### Running the App

```bash
# Start the development server
$ npm run dev
# or
yarn dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) by default.

### Building for Production

```bash
$ npm run build
# or
yarn build
```

### Preview Production Build

```bash
$ npm run preview
# or
yarn preview
```

### Linting

```bash
$ npm run lint
# or
yarn lint
```

## Project Structure

```
waferwire-test/
├── src/
│   ├── App.tsx                # Main app component, handles auth and layout
│   ├── main.tsx               # React entry point
│   ├── index.css              # Custom and Bootstrap styles
│   ├── context/
│   │   └── AuthContext.tsx    # Authentication context and logic
│   ├── data/
│   │   └── mockData.ts        # Mock users, reports, and stats
│   ├── components/
│   │   ├── DashboardLayout.tsx# Main dashboard layout with sidebar
│   │   ├── LoginPage.tsx      # Login form and demo account buttons
│   │   ├── layout/
│   │   │   └── Sidebar.tsx    # Collapsible sidebar navigation
│   │   └── pages/
│   │       ├── Dashboard.tsx      # Dashboard page
│   │       ├── UserManagement.tsx # User management (admin only)
│   │       ├── Reports.tsx        # Reports listing
│   │       ├── Profile.tsx        # User profile
│   │       └── About.tsx          # About/info page
│   └── types/
│       └── index.ts           # TypeScript interfaces and types
├── index.html                 # HTML entry point
├── package.json               # Project metadata and scripts
├── vite.config.ts             # Vite configuration
└── README.md                  # Project documentation
```

## Authentication & Roles
- **Mock authentication**: Login with `admin@example.com` or `user@example.com` and password `password`.
- **Admin role**: Access to all pages, including User Management.
- **User role**: Access to Dashboard, Reports, Profile, and About.
- **Session**: User info is stored in `localStorage` for session persistence.

## Theming & UI
- Uses [Bootstrap 5](https://getbootstrap.com/) for layout and components.
- Custom gradients and styles in `src/index.css`.
- Responsive sidebar with collapse/expand and mobile support.
- Icons from [lucide-react](https://lucide.dev/).

## Scripts
- `dev`: Start development server
- `build`: Build for production
- `preview`: Preview production build
- `lint`: Run ESLint on the codebase

## Credits
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Bootstrap](https://getbootstrap.com/)
- [Lucide React Icons](https://lucide.dev/)

---

All rights reserved.

Developed by [Prince Dubey](https://www.princedubey.com)

