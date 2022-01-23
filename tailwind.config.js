const colors = require("tailwindcss/colors")

module.exports = {
    purge: [
        './{pages,components}/**/*.{js,tsx}',
    ],
    theme: {
        colors: {
            blue: colors.sky,
            white: colors.white,
            gray: colors.slate,
        },
        extend: {},
        screens: {
            "sm": "640px",
            "md": "768px",
            "lg": "1024px",
            "xl": "2048px",
        },
    },
    variants: {},
    plugins: []
}
