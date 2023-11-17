/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./dist/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                'Poppins': [" Poppins"],
                "Roboto": ["Roboto"]
            }

        },
    },
    plugins: [],
}