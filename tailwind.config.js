/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        'base': '1.125rem', // Increased from 1rem
        'lg': '1.25rem',    // Increased
        'xl': '1.375rem',   // Increased
        '2xl': '1.625rem',  // Increased
        '3xl': '2rem',      // Increased
        '4xl': '2.5rem',    // Increased
        '5xl': '3.25rem',   // Increased
        'hero': ['3.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'count-up': 'countUp 2s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blob': 'blob 7s infinite',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      boxShadow: {
        'card': '0 2px 4px rgba(0,0,0,0.1)',
        'elevated': '0 4px 6px rgba(0,0,0,0.1)',
      },
      height: {
        'touch': '44px',
      },
      minHeight: {
        'touch': '44px',
      },
      minWidth: {
        'touch': '44px',
      },
      backgroundImage: {
        'noise': "url('data:image/png;base64,data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAElBMVEUAAAD8/vz08vT09PT8+vz///+Tb6O1AAAABnRSTlMCBgYGBgYGiPrVAAAARElEQVQ4y2NgwAX+///P8P//f4Z///7/Z/j//x8D4////wdC8AADWYBh1I5ROxgYGP4zMDAwEAoP7HAkPxgotYMKaQcAzmQLksWXtqIAAAAASUVORK5CYII=')",
      },
    },
  },
  plugins: [],
};