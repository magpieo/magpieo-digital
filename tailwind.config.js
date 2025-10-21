/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontSize: {
        paragraph: ["12px", "1.5rem"], // default
        paragraphLg: ["14px", "1.5rem"], // large screens
        heading: ["32px", "1.2"], // default
        headingLg: ["40px", "1.2"], // large
        subheading: ["22px", "1.3"],
        subheadingLg: ["28px", "1.3"],
      },
    },
  },
  plugins: [],
};
