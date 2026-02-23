/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'gi-bg': '#F4F4F4',
        'gi-sage': '#93A392',
        'gi-text': '#1A202C',
      },
    },
  },
  plugins: [],
};