/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				barlowmedium: ["barlowmedium", "sans-serif"],
				barlowsemi: ["barlowsemi", "sans-serif"],
			},
			colors: {
				moderateViolet: "hsl(263, 55%, 52%)",
				vdGrayishBlue: "hsl(217, 19%, 35%)",
				vdBlackishBlue: "hsl(219, 29%, 14%)",
				lightGray: "hsl(0, 0%, 81%)",
				lightGrayishBlue: "hsl(210, 46%, 95%)",
			},
		},
	},
	plugins: [],
}
