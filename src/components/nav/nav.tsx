import type { ReactNode } from "react";

const Nav = ({ children }: { children: ReactNode }) => {
	return (
		<div className="container items-center rounded-xl border-[1px] border-card-border/30 bg-card/25 px-3 py-3 backdrop-blur-md md:h-16 md:px-6 md:py-0">
			<nav className="flex h-full w-full flex-col items-center justify-between md:flex-row ">{children}</nav>
		</div>
	);
};

export { Nav };
