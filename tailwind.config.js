/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '32px',
        8: '40px',
        9: '48px',
        10: '56px',
      },
      fontSize: {
        sm: '10px',
        md: '14px',
        base: '16px',
        xl: '24px',
        xxl: '28px',
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      colors: {
        bg: '#E9ECEF',
        since: '#302F62',
        until: '#3BB272',
        d_day: '#E46666',
        border: '#d9d9d9',
        lightGray: 'rgba(0, 0, 0, 0.4)',
        zero: 'rgba(0, 0, 0, 0.0)',
        ultraWhiteGray: 'rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
