import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				background: "hsla(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsla(var(--card))",
					border: "hsla(var(--card-border))",
				},
				accent: {
					DEFAULT: "hsla(var(--accent))",
				},
			},
		},
	},
	plugins: [],
} satisfies Config;
