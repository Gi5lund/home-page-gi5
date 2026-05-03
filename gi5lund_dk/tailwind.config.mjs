/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'gi-bg': '#a4f4f4',
        'gi-sage': '#93A392',
        'gi-text': '#1A202C',
      },
    },
  },
  plugins: [],
};

export default config;