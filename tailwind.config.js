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
        tab: '852px',
      },
      backgroundColor: {
        primary: 'var(--bg-primary)',
        'light-primary': 'var(--bg-light-primary)',
        secondary: 'var(--bg-secondary)',
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
      },
      colors: {
        'light-primary': 'var(--bg-light-primary)',
        'text-highlight': 'var(--text-highlight)',
        'text-highlight-light': 'var(--text-highlight-light)',
        'text-highlight-hover': 'var(--text-highlight-hover)',
        skeleton: 'var(--bg-skeleton)',
        'text-primary': 'var(--text-primary)',
        'bg-primary': 'var(--bg-primary)',
        'theme-black': '#121212',
        'theme-white': '#f5f5f5',
        'theme-purple': '#B414C0',
        'theme-light-purple': '#7e13c1',
        'closer-gray': 'var(--closer-gray)',
        'far-gray': 'var(--far-gray)',
      },
    },
  },
  plugins: [],
}
