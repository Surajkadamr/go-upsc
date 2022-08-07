/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/*.{js,jsx}"],
  theme: {
    extend: {},
    screens: {
      'mxl': {'max': '768px'},
      // => @media (max-width: 1535px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
    },
    width:{
      "100":"50rem",
      "auto":"auto"
    },
    margin:{
      "100":"23rem",
      "0":"0rem",
      "10":"2rem",
      "5":"1.25rem",
      "24":"5.25rem",
      "auto":"auto"
    },
    fontSize:{
      "1":"0.4rem",
      "2xll":"0.8rem",
      "3xl":"2rem",
      "sm":"1rem",
      "4xl":"2rem",
      "2xl":"1.5rem"
    }
  },
  plugins: [],
}
