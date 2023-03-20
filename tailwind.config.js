/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true,
  },
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
        'primary-hover': '#856ADE',
        'primary-pressed': '#A28DE6',
        'tertiary-hover': '#555555',
        'tertiary-pressed': '#7D7D7D',
      },
      light: {
        DEFAULT: '#F8F8FA',
        headlines: '#0D0D0D',
        text: '#5E5E5E',
        'primary-hover': '#6246CC',
        'primary-pressed': '#4A36B9',
        'tertiary-hover': '#313131',
        'tertiary-pressed': '#282828',
      },
      transparent: 'transparent',
      primary: '#7050D8',
      tertiary: '#373737'
    },
  },
  plugins: [],
};
