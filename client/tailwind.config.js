/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor: {
        skin: {
          november: 'var(--border-color-november)'
        }
      },
      backgroundColor: {
        skin: {
          november: 'var(--bg-color-november)',
          novemberPrimary: 'var(--bg-color-novemberPrimary)'
        }
      }
    },
  },
  plugins: [],

}

