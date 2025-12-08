# Personal Website - Frontend

A modern personal website built with React, TypeScript, Vite, and Tailwind CSS.

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite 7** - Build tool & dev server
- **Tailwind CSS 3** - Utility-first CSS framework
- **ESLint** - Code linting

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Getting Started

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd personal-website/frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The app will be available at **http://localhost:5173/**

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 📁 Project Structure

```
frontend/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, fonts, etc.
│   ├── index.css        # Global styles with Tailwind directives
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Application entry point
├── index.html           # HTML template
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies and scripts
```

## 🎨 Tailwind CSS Setup

Tailwind CSS is already configured and ready to use. The setup includes:

1. **Tailwind directives** in `src/index.css`:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

2. **PostCSS configuration** in `postcss.config.js`:
   ```js
   export default {
     plugins: {
       tailwindcss: {},
       autoprefixer: {},
     },
   }
   ```

3. **Content paths** configured in `tailwind.config.js` to scan all component files.

### Using Tailwind

Simply add utility classes to your JSX:

```tsx
<div className="bg-blue-500 text-white p-4 rounded-lg shadow-lg">
  Hello Tailwind!
</div>
```

## 🏗️ Building for Production

```bash
npm run build
```

This will:
1. Type-check with TypeScript
2. Bundle and optimize with Vite
3. Output to the `dist/` folder

## 📚 Learn More

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vite.dev/)
- [Tailwind CSS v3 Documentation](https://v3.tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 📄 License

This project is private.
