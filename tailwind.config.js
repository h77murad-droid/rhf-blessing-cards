/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        maroon: {
          DEFAULT: '#8B0000',
          light: '#A52A2A',
          dark: '#6B0000',
        },
        // Secondary colors
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E8C547',
          dark: '#B8941F',
        },
        // Neutral colors
        gray: {
          DEFAULT: '#4A4A4A',
          light: '#9E9E9E',
          lighter: '#E0E0E0',
          dark: '#333333',
        },
        // Background colors
        beige: {
          DEFAULT: '#FAF8F3',
          light: '#FDFCF9',
        },
        // Semantic colors
        success: '#4CAF50',
        error: '#F44336',
        info: '#2196F3',
        warning: '#FF9800',
      },
      fontFamily: {
        sans: ['Tajawal', 'sans-serif'],
      },
      fontSize: {
        'h1-desktop': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        'h1-mobile': ['32px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2-desktop': ['40px', { lineHeight: '1.3', fontWeight: '700' }],
        'h2-mobile': ['28px', { lineHeight: '1.3', fontWeight: '700' }],
        'h3-desktop': ['32px', { lineHeight: '1.4', fontWeight: '700' }],
        'h3-mobile': ['24px', { lineHeight: '1.4', fontWeight: '700' }],
        'h4-desktop': ['24px', { lineHeight: '1.4', fontWeight: '700' }],
        'h4-mobile': ['20px', { lineHeight: '1.4', fontWeight: '700' }],
        'h5-desktop': ['20px', { lineHeight: '1.5', fontWeight: '500' }],
        'h5-mobile': ['18px', { lineHeight: '1.5', fontWeight: '500' }],
        'body-desktop': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-mobile': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-large-desktop': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-large-mobile': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-small': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'button': ['16px', { lineHeight: '1.5', fontWeight: '500' }],
        'button-large-desktop': ['18px', { lineHeight: '1.5', fontWeight: '500' }],
        'button-large-mobile': ['16px', { lineHeight: '1.5', fontWeight: '500' }],
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '96px',
        '5xl': '128px',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'maroon': '0 4px 14px 0 rgba(139, 0, 0, 0.15)',
        'gold': '0 4px 14px 0 rgba(212, 175, 55, 0.2)',
      },
      maxWidth: {
        'container': '1280px',
      },
      transitionDuration: {
        'fast': '150ms',
        'base': '300ms',
        'slow': '500ms',
      },
      zIndex: {
        'dropdown': '1000',
        'sticky': '1100',
        'fixed': '1200',
        'modal-backdrop': '1300',
        'modal': '1400',
        'popover': '1500',
        'tooltip': '1600',
      },
    },
  },
  plugins: [],
};
