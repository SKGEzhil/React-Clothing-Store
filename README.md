# React Clothing Store

A simple React application for a clothing store, featuring a filterable product list, a responsive menu, and various UI components built with TypeScript and Tailwind CSS. This project is set up using Vite.

## Prerequisites

Make sure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (v20 or later)
- [npm](https://www.npmjs.com/) (v10 or later)

## Getting Started

Follow these steps to set up and run the project on your local machine:

### 1. Clone the Repository

```bash
git clone https://github.com/SKGEzhil/React-Clothing-Store.git
cd react-clothing-store
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Tailwind CSS
Ensure your tailwind.config.js and index.css are correctly configured. Here are the default configurations:

#### tailwind.config.js
```bash
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

#### index.css
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### 5. Build for Production

```bash
npm run build
```

This will generate a `dist` folder containing the production-ready code.

