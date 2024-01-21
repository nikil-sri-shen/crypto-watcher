/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "320px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      boxShadow: {
        "3xl":
          "0px 6px 8px 4px rgba(255, 165, 0, 0.5), 0 2px 4px -1px rgba(255, 165, 0, 0.06)",
        "4xl":
          "0px 6px 8px 4px rgba(255, 165, 0, 0.2), 0 6px 8px -2px rgba(255, 165, 0, 0.05), inset 0px 0px 10px 5px rgba(255, 165, 0, 0.7), inset 0px 0px 20px 10px rgba(255, 165, 0, 0.5), inset 0px 0px 30px 15px rgba(255, 165, 0, 0.3), inset 0px 0px 40px 20px rgba(255, 165, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
