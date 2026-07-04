# Modern Storytelling Landing Page

This project is a React-based web application generated from a Figma design for a "Modern Storytelling Landing Page". The application showcases a highly aesthetic, interactive web page tailored for modern storytelling and content presentation.

## 🎨 Original Design Reference
The original Figma project design is available here: 
[Modern Storytelling Landing Page - Figma](https://www.figma.com/design/4fvEnI7FkgvGIzdRU9RksB/Modern-Storytelling-Landing-Page)

## 🛠️ Tech Stack

This project is built using a modern, performant web development stack:
- **Core Framework:** React 18
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS 4
- **UI Components:** 
  - Radix UI (accessible, unstyled primitive components)
  - Material UI (Icons & core components)
- **Animations & Effects:** Motion (Framer Motion), `tw-animate-css`, `canvas-confetti`
- **Routing:** React Router 7
- **Forms:** React Hook Form
- **Data Visualization:** Recharts
- **Other Utilities:** 
  - `date-fns` (Date manipulation)
  - `embla-carousel-react`, `react-slick` (Carousels/Sliders)
  - `sonner` (Toast notifications)
  - `clsx`, `tailwind-merge` (Classname utilities)

## 🚀 Getting Started

Follow these steps to run the project on your local machine.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) and npm installed.

### Installation

1. Clone or download the repository.
2. Open your terminal and navigate to the root directory of the project (`d:\Modern Storytelling Landing Page`).
3. Install all necessary dependencies by running:
   ```bash
   npm install
   ```
   *(Note: This project is configured to use Vite and React. The dependencies will be installed from `package.json`)*

### Running the Development Server

To start the local development server with hot-module replacement (HMR), run:
```bash
npm run dev
```
By default, Vite will start the server at [http://localhost:5173](http://localhost:5173). Open this URL in your browser to view the application.

### Building for Production

To create an optimized, production-ready build, run:
```bash
npm run build
```
This will compile your application into the `dist/` directory, ready to be deployed to any static hosting service.

## 📁 Project Structure

- `src/` - The source code of the application.
  - `app/` - Contains core application components, views, and utilities.
  - `styles/` - Global CSS styling including Tailwind directives.
  - `main.tsx` - The main entry point of the React application.
- `public/` - Static assets like images and fonts.
- `index.html` - The main HTML template.
- `package.json` - Defines project dependencies and npm scripts.
- `vite.config.ts` - Configuration for the Vite bundler.

## 📄 Attributions
Please check the `ATTRIBUTIONS.md` file in the root directory for potential attribution requirements or open-source licenses used in this project's assets or generated code.