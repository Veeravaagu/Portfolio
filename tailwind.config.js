export default {
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                background: "rgb(var(--color-background) / <alpha-value>)",
                panel: "rgb(var(--color-panel) / <alpha-value>)",
                surface: "rgb(var(--color-surface) / <alpha-value>)",
                accent: "rgb(var(--color-accent) / <alpha-value>)",
                muted: "rgb(var(--color-muted) / <alpha-value>)",
                dim: "rgb(var(--color-dim) / <alpha-value>)",
                line: "rgb(var(--color-line) / <alpha-value>)",
            },
            fontFamily: {
                sans: ['"Space Grotesk"', "ui-sans-serif", "system-ui", "sans-serif"],
                mono: ['"Space Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
            },
            boxShadow: {
                glow: "0 20px 55px rgba(0,0,0,0.55)",
            },
            backgroundImage: {
                "hero-radial": "var(--hero-background)",
            },
        },
    },
    plugins: [],
};
