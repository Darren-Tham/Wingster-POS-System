import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "main-blue": "#2261FF",
        "main-light-blue": "#638DFF",
        "icon-color": "#B3B3B3"
      },
      animation: {
        popup: "popup 300ms ease forwards"
      },
      keyframes: {
        popup: {
          from: {
            opacity: "0",
            transform: "scale(0.75)"
          },
          to: {
            opacity: "1",
            transform: "scale(1)"
          }
        }
      }
    }
  },
  plugins: []
}
export default config
