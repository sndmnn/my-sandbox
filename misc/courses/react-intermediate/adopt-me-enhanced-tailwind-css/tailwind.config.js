module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,jsx,js}'],
  theme: {
    extend: {},
  },
  variant: {},
  plugins: [require('@tailwindcss/forms')],
};
