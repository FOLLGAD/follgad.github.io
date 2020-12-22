const colors = require("tailwindcss/colors")

module.exports = {
    purge: [
        './src/**/*.js',
    ],
    darkMode: false,
    theme: {
        colors: {
            blue: colors.lightBlue,
            white: colors.white,
            gray: colors.blueGray,
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
