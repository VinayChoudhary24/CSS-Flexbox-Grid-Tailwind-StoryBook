/** @type {import('tailwindcss').Config} */ 
module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  // These paths are just examples, customize them to match your project structure
  purge: [
    './pages/index.js',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
}