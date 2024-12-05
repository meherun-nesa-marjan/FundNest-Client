/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bannar': "url('./public/images/bg.jpg')",
        
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

