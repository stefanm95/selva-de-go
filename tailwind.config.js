/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      /* ====================================================================
         COLORS - Using CSS variables for consistency
         ==================================================================== */
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        /* Brand Palette */
        "brand-orange": "var(--brand-orange)",
        "brand-gold": "var(--brand-gold)",
        "brand-olive": "var(--brand-olive)",
        "brand-berry": "var(--brand-berry)",

        /* Semantic Colors */
        muted: "var(--muted)",
        border: "var(--border)",

        /* Backgrounds */
        "bg-primary": "var(--bg-primary)",
        "bg-secondary": "var(--bg-secondary)",
        "bg-elevated": "var(--bg-elevated)",
        "bg-overlay": "var(--bg-overlay)",

        /* Text Colors */
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",
        "text-inverse": "var(--text-inverse)",
      },

      /* ====================================================================
         FONTS
         ==================================================================== */
      fontFamily: {
        display: "var(--font-display)",
        body: "var(--font-body)",
        accent: "var(--font-accent)",
      },

      /* ====================================================================
         TYPOGRAPHY SCALE - Using CSS custom properties
         ==================================================================== */
      fontSize: {
        /* Display Scale */
        "display-2xl": "var(--display-2xl)",
        "display-xl": "var(--display-xl)",
        "display-lg": "var(--display-lg)",
        "display-md": "var(--display-md)",
        "display-sm": "var(--display-sm)",

        /* Headings */
        h1: "var(--heading-1)",
        h2: "var(--heading-2)",
        h3: "var(--heading-3)",
        h4: "var(--heading-4)",

        /* Body */
        "body-lg": "var(--body-lg)",
        "body-md": "var(--body-md)",
        "body-sm": "var(--body-sm)",
        caption: "var(--caption)",
        micro: "var(--micro)",
      },

      /* ====================================================================
         LINE HEIGHTS
         ==================================================================== */
      lineHeight: {
        display: "var(--lh-display)",
        heading: "var(--lh-heading)",
        body: "var(--lh-body)",
        "body-tight": "var(--lh-body-tight)",
      },

      /* ====================================================================
         LETTER SPACING
         ==================================================================== */
      letterSpacing: {
        display: "var(--ls-display)",
        normal: "var(--ls-normal)",
        wide: "var(--ls-wide)",
      },

      /* ====================================================================
         SPACING - Luxury through breathing room
         ==================================================================== */
      spacing: {
        // Custom spacing scale if needed
      },

      /* ====================================================================
         TRANSITIONS & ANIMATIONS - Minimal, purposeful
         ==================================================================== */
      transitionDuration: {
        fast: "150ms",
        normal: "250ms",
        slow: "350ms",
      },

      /* ====================================================================
         BORDER RADIUS - Subtle, refined
         ==================================================================== */
      borderRadius: {
        none: "0",
        xs: "2px",
        sm: "4px",
        base: "6px",
        lg: "8px",
      },

      /* ====================================================================
         SHADOWS - Minimal, sophisticated
         ==================================================================== */
      boxShadow: {
        none: "none",
        xs: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        sm: "0 1px 3px 0 rgba(0, 0, 0, 0.08)",
        base: "0 4px 8px 0 rgba(0, 0, 0, 0.08)",
        lg: "0 8px 16px 0 rgba(0, 0, 0, 0.1)",
        xl: "0 12px 24px 0 rgba(0, 0, 0, 0.12)",
      },
    },
  },

  /* ====================================================================
     PLUGINS & UTILITIES
     ==================================================================== */
  plugins: [],
};
