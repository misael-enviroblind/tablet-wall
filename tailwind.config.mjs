/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      container: {
        center: true
      },
      colors: {
        "dark-green": "rgb(var(--dark-green) / <alpha-value>)",
        "steel-blue": "rgb(var(--steel-blue) / <alpha-value>)",
        "royal-blue": "rgb(var(--royal-blue) / <alpha-value>)",
        oelo: "rgb(var(--oelo)/ <alpha-value>)"
      },
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
}
