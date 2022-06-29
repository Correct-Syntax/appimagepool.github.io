/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'feature-pattern': "url('/feature_pattern.png')",
        'feature-pattern-flipped': "url('/feature_pattern_flipped.png')"
      },
      colors: {
        accent: "#167ABF",
        secondary: "#E8F1FF",
        'dark-1': "#0D1419",
        'dark-2': "#090D10",
        'placeholder': "#858585",
      },
      fontSize: {
        title: ['3rem', { lineHeight: '4.5rem' }],
        'heading-1': ['2.25rem', { lineHeight: '3.375rem' }],
        'heading-2': ['1.75rem', { lineHeight: '2.625rem' }],
        paragraph: ['1.375rem', { lineHeight: '2rem' }],
        small: ['1.125rem', { lineHeight: '1.6875rem' }]
      },
      spacing: {
        '50px': '3.125rem',
        '120px': '7.5rem',
        '150px': '9.375rem',
        '180px': '11.25rem',
        '380px': '23.75rem'
      }
    },
  },
  plugins: [],
}
