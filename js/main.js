// Tailwind Configuration
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#f27f0d",
                "background-dark": "#1A1A1A",
                "card-dark": "#242424",
                "border-dark": "#333333",
                "background-light": "#f8f7f5", // Added from Nosotros/Servicios
            },
            fontFamily: {
                "display": ["Lexend", "sans-serif"],
                "sans": ["Noto Sans", "sans-serif"]
            },
            borderRadius: {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
        },
    },
}
