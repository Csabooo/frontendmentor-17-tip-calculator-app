/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /* Primary */
        strong_cyan: "hsl(172, 67%, 45%)", //hover
        /* ### Neutral*/
        very_dark_cyan: "hsl(183, 100%, 15%)", //base button color
        dark_grayish_cyan: "hsl(186, 14%, 43%)",
        grayish_cyan: "hsl(184, 14%, 56%)",
        light_grayish_cyan: "hsl(185, 41%, 84%)", //background
        very_light_grayish_cyan: "hsl(189, 41%, 97%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        "space-mono": ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
