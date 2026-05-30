/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        "brand-orange": "var(--brand-orange)",
        "brand-gold": "var(--brand-gold)",
        "brand-olive": "var(--brand-olive)",
        "brand-berry": "var(--brand-berry)",

        muted: "var(--muted)",
        border: "var(--border)",

        "bg-primary": "var(--bg-primary)",
        "bg-secondary": "var(--bg-secondary)",
        "bg-elevated": "var(--bg-elevated)",
        "bg-overlay": "var(--bg-overlay)",

        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",
        "text-inverse": "var(--text-inverse)",
      },

      fontFamily: {
        display: ["Anton", "sans-serif"],
        editorial: ["Cormorant Garamond", "serif"],
        body: ["Inter", "sans-serif"],
        accent: ["Staatliches", "sans-serif"],
      },

      fontSize: {
        "display-2xl": "var(--display-2xl)",
        "display-xl": "var(--display-xl)",
        "display-lg": "var(--display-lg)",
        "display-md": "var(--display-md)",
        "display-sm": "var(--display-sm)",

        h1: "var(--heading-1)",
        h2: "var(--heading-2)",
        h3: "var(--heading-3)",
        h4: "var(--heading-4)",

        "body-lg": "var(--body-lg)",
        "body-md": "var(--body-md)",
        "body-sm": "var(--body-sm)",

        caption: "var(--caption)",
        micro: "var(--micro)",
      },

      lineHeight: {
        display: "var(--lh-display)",
        heading: "var(--lh-heading)",
        body: "var(--lh-body)",
        "body-tight": "var(--lh-body-tight)",
      },

      letterSpacing: {
        display: "var(--ls-display)",
        normal: "var(--ls-normal)",
        wide: "var(--ls-wide)",
      },

      transitionDuration: {
        fast: "150ms",
        normal: "250ms",
        slow: "350ms",
      },
    },
  },

  plugins: [],
};
