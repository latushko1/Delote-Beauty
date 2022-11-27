/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			primary: '#FFFFFF',
			secondary: '#111111',
			accend: '#CDAA7D',
		},
		container: {
			padding: '20px',
			center: true,
		},
	},
	plugins: [],
};
