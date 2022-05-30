module.exports = {
  // purge: ["./pages/**/*.js", "./components/**/*.js"],
  purge: ['src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // Adds a new breakpoint in addition to the default breakpoints
      width: {
        '10vw': '10vw',
        '20vw': '20vw',
        '30vw': '30vw',
        '40vw': '40vw',
        '50vw': '50vw',
        '60vw': '60vw',
        '70vw': '70vw',
        '80vw': '80vw',
        '90vw': '90vw',
        '99vw': '96vw',
        '90%': '90%',
      },
      height: {
        '90vh': '90vh',
        '80vh': '80vh',
        '70vh': '70vh',
        '60vh': '60vh',
        '50vh': '50vh',
        '40vh': '40vh',
        '30vh': '30vh',
        '20vh': '20vh',
        '10vh': '10vh',
      },
      minHeight: {
        'l-hero': '750px',
      },
      fontFamily: {
        spectral: ['Spectral', 'sans-serif'],
      },

      // fontSize: {
      //   xs: '0.75rem',
      //   sm: '0.875rem',
      //   base: '1rem',
      //   lg: '1.125rem',
      //   xl: '1.25rem',
      //   '2xl': '1.5rem',
      //   '3xl': '1.875rem',
      //   '4xl': '2.25rem',
      //   '5xl': '3rem',
      //   '6xl': '4rem',
      // },

      textColor: {
        kBlue: '#00549E',
        kBlack: '#1F1F1F',
        kDBlue: '#00458C',
        kLBlue: '#C7E4F8',
        kLBlack: '#3e5364',
      },
      backgroundColor: {
        kLBlue: '#C7E4F8',
        kDBlue: '#058ED0',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
