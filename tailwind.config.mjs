/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
            padding: {
                DEFAULT: '1.5rem',
                sm: '1rem',
                md: '1rem',
                lg: '1.5rem',
                xl: '1.5rem',
                '2xl': '1.5rem',
            },
            screens: {
                sm: '100%',
                md: '100%',
                lg: '100%',
                xl: '1280px',
            },
        },
		extend: {
			borderRadius: {
				'4xl': '1.875rem'
			}
		},
	},
	plugins: [],
}
