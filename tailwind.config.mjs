/** @type {import('tailwindcss').Config} */
import react from '@astrojs/react';
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [
		require('tailwind-scrollbar-hide')
	],
	integrations: [
		react({
		  include: ['**/react/*'],
		}),
	],
}
