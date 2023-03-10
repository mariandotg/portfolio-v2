/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    borderRadius: {
      DEFAULT: '4px',
    },
    fontSize: {
      DEFAULT: ['0.875rem', '1.125rem'],
      title: ['1.25rem', '1.75rem'],
      'section-title': ['1.25rem', '1.75rem'],
    },
    screens: {
      mobile: '550px',
      tablet: '834px',
      desktop: '1024px',
    },
    fontFamily: {
      display: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
      body: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
      monospace: ['IBM Plex Mono', 'system-ui', 'monospace'],
    },
    colors: {
      dark: {
        DEFAULT: '#0D0D0D',
        headlines: '#E1E1E1',
        text: '#B1B1B1',
      },
      light: {
        DEFAULT: '#F8F8FA',
        headlines: '#0D0D0D',
        text: '#5E5E5E',
      },
      primary: '#7050D8',
    },
  },
  plugins: [],
};
