/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "Lightred": " #ff5757",
      "Orangeyyellow": "#ffb01f",
      "Greenteal": "#00bd91",
      "Cobaltblue": "#1125d4",
      "Lightslateblue": "#7857ff",
      "Lightroyalblue": "#2e2be9",
      "Violetblue": "#4e21ca",
      "Persianblue": "#2421ca",
      "White": "#ffffff",
      "Paleblue": "hsl(221, 100%, 96%)",
      "Lightlavender": "hsl(241, 100%, 89%)",
      "Darkgrayblue": "hsl(224, 30%, 27%)",

    },
    extend: {
      fontFamily: {
        "Hanken": ['Hanken', 'cursive'],
      },
    },
  },
  plugins: [],
}
