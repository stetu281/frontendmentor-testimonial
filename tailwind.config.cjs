/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				barlowmedium: ["barlowmedium", "sans-serif"],
				barlowsemi: ["barlowsemi", "sans-serif"],
			},
		},
	},
	plugins: [],
}
