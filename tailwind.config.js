/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-roboto)", "system-ui", "sans-serif"],
                arabic: ["var(--font-cairo)", "system-ui", "sans-serif"],
            },
        },
    },
    safelist: [
        'font-sans',
        'font-arabic'
    ],
    plugins: [],
    darkMode: "class",
};