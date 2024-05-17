/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{jsx,js,ts,tsx,html}", "./index.html"],
    theme: {
        extend: {
            colors: {
                "my-green": "#1abc9c",
                "my-gray": "#2c3e50",
                "my-dark-gray": "#1a252f",
            },
        },
    },
    plugins: [],
};
