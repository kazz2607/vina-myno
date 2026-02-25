/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F28C6E",
        secondary: "#EA685E",
        "background-light": "#FFF9F7",
        "background-dark": "#1A1615",
        "surface-light": "#FFFFFF",
        "surface-dark": "#26201F",
        "text-light": "#333333",
        "text-dark": "#F5F5F5",
      },
      fontFamily: {
        display: ["'Plus Jakarta Sans'", "sans-serif"],
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "1rem",
        xl: "1.5rem",
        "2xl": "2rem",
        "3xl": "2.5rem",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #F28C6E 0%, #EA685E 100%)",
        "soft-gradient-light":
          "radial-gradient(circle at 50% 0%, rgba(242, 140, 110, 0.15) 0%, rgba(255, 249, 247, 0) 70%)",
        "soft-gradient-dark":
          "radial-gradient(circle at 50% 0%, rgba(242, 140, 110, 0.08) 0%, rgba(26, 22, 21, 0) 70%)",
      },
      boxShadow: {
        "primary-sm": "0 4px 20px rgba(242, 140, 110, 0.2)",
        "primary-md": "0 8px 30px rgba(242, 140, 110, 0.3)",
        "primary-lg": "0 12px 40px rgba(242, 140, 110, 0.4)",
      },
    },
  },
  plugins: [],
};
