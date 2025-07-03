/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          700: '#6B46C1',
          200: '#E9D5FF',
        },
        yellow: {
          400: '#FDE047',
        },
        gray: {
          50: '#F8FAFC',
          600: '#6B7280',
        },
        green: {
          500: '#10B981',
        },
      },
    },
  },
  plugins: [],
};
