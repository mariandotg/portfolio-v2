/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
    colors: {
      dark: '#0D0D0D',
      "dark-headlines": "#E1E1E1",
      "dark-text": "#B1B1B1",
      light: '#F8F8FA',
      "light-headlines": "#0D0D0D",
      "light-text": "#5E5E5E",
      primary: '#7050D8',
    },
  },
  plugins: [],
};
