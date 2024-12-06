/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bannar': "url('./images/bg.jpg')",
        'bannar1': "url('./images/bannar4.jpg')",
        'bannar2': "url('./images/bannar5.jpg')",
        'bannar3': "url('./images/bannar3.jpg')",

        
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

