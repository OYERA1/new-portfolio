import type { ReactNode } from "react";

const Nav = ({ children }: { children: ReactNode }) => {
	return (
		<div className="container h-16 items-center rounded-xl border-[1px] border-card-border/30 bg-card/25 px-6 backdrop-blur-md">
			<nav className="flex h-full w-full items-center justify-between">{children}</nav>
		</div>
	);
};

export { Nav };
