/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss"

export default {
  darkMode: ["class"],

  content: ["./src/routes/**/*.tsx", "./src/components/**/*.tsx"],

  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Leckerli One", "cursive"],
      },
      keyframes: {
        slideUpAndFade: {
          from: { opacity: "0.5", transform: "translateY(2px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        slideUpAndFade: "slideUpAndFade 4000ms cubic-bezier(0.16, 1, 0.3, 1)",
      },

      transitionProperty: {
        "grid-rows": "grid-template-rows",
      },
    },
  },

  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/container-queries"),
  ],
} satisfies Config
