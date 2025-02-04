import type { Config } from "tailwindcss";
import plugins from 'tailwindcss/plugin'
import type { PluginCreator, } from "tailwindcss/types/config";

const glow: PluginCreator = ({ addVariant }) => {
	addVariant("glow", ".glow-capture [glow] &");
};

const glowEffect = plugins(glow, {
	theme: {
		extend: {
			colors: {
				glow: 'color-mix(in srgb, var(--glow-color) calc(<alpha-value> * 100%), transparent)'
			}
		}
	}
})

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
	plugins: [glowEffect],
} satisfies Config;
