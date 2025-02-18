/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{html,js,svelte,ts}', // Note the inclusion of .svelte and .ts if you're using TypeScript
        './src/routes/**/*.{html,js,svelte,ts}', // If your components are in the routes directory
        './src/lib/**/*.{html,js,svelte,ts}'  // If you have a separate lib directory
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#3F4F44'
            }
        },
    },
    plugins: [],
}