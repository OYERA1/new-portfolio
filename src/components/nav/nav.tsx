import type { ReactNode } from "react";

const Nav = ({ children }: { children: ReactNode }) => {
	return (
		<div className="container m-auto flex h-16 max-w-screen-lg items-center justify-center rounded-xl border-[1px] border-card-border/30 bg-card/25 p-4 backdrop-blur-md">
			<nav className="flex w-full items-center justify-between">{children}</nav>
		</div>
	);
};

export { Nav };
