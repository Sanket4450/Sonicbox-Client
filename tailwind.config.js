/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        phone: '440px',
        tab: '799px',
      },
      backgroundColor: {
        primary: 'var(--bg-primary)',
        secondary: 'var(--bg-secondary)',
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
      },
      colors: {
        'theme-black': '#121212',
        'theme-white': '#f5f5f5',
        'theme-purple': '#a020f0',
        'theme-light-purple': '#7e13c1',
        'closer-gray': '--closer-gray',
        'far-gray': '--far-gray',
      },
    },
  },
  plugins: [],
}
