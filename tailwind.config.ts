import type { Config } from "tailwindcss";
import components from "./tailwind-components.cjs";

export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  mode: "jit",
  theme: {
    extend: {
      keyframes: {
        "spin-y": {
          "0%": {
            transform: "perspective(500px) rotateY(0deg)",
          },
          "100%": {
            transform: "perspective(500px) rotateY(360deg)",
          },
        },
      },
    },
  },
  plugins: [
    components,
  ],
  // presets: [require('@downwindcss/easings')],
} satisfies Config;

