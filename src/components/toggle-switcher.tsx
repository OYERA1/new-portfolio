"use client";

import { Moon, Sun } from "@phosphor-icons/react/dist/ssr";
import { useTheme } from "next-themes";

const ToggleSwitcher = () => {
	const { theme, setTheme } = useTheme();
	const handleOnClick = () => {
		switch (theme) {
			case "dark":
				return setTheme("light");
			case "light":
				return setTheme("dark");
		}
	};

	return (
		<button
			type="button"
			onClick={handleOnClick}
			className="relative transition-all"
		>
			<Moon
				size={24}
				className="dark:-rotate-90 absolute light:rotate-0 scale-100 transition duration-300 dark:scale-0"
			/>
			<Sun
				size={24}
				className=" rotate-90 scale-0 transition duration-300 dark:rotate-0 dark:scale-100"
			/>
		</button>
	);
};

export { ToggleSwitcher };
