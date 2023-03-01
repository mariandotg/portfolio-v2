/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      display: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
      body: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
      monospace: ['IBM Plex Mono', 'system-ui', 'monospace'],
    },
  },
  plugins: [],
};
