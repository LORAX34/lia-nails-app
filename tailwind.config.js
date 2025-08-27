import { defineConfig } from "@tailwindcss/vite";
export default defineConfig({
  content: [
    "./src/**/*.{astro,js,ts,jsx,tsx,vue,svelte}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f0afcd",
        secondary: "#814662",
        third: "#fefffd",
      },

      animation: {
        "bounce-slow": "bounce 2s infinite",
        "pulse-slow": "pulse 3s infinite",
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        96: "24rem",
      },
      width: {
        88: "22rem",
        96: "24rem",
      },
      height: {
        88: "22rem",
        96: "24rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        glow: "0 0 20px rgba(240, 175, 205, 0.5)",
        "glow-lg": "0 0 30px rgba(240, 175, 205, 0.6)",
      },
      backdropBlur: {
        xs: "2px",
      },
      transitionDuration: {
        400: "400ms",
        600: "600ms",
      },
    },
  },
  plugins: [],
});
