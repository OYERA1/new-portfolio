import { cn } from "@/utils/lib";
import Link from "next/link";
import type { ReactNode } from "react";

interface INavItem {
	className?: string;
	items: IGenericObject[];
}

const NavItem = ({ className, items }: INavItem) => {
	return (
		<div className={cn("flex items-center gap-4 ", className)}>
			{items.map((item) => (
				<Link className="group transition duration-500"
					href={item?.link ?? ""}
					key={item.id}
				>
					{item.content}
					{typeof item.content === 'string' && <span className="block h-[1px] max-w-0 bg-foreground transition-all duration-300 group-hover:max-w-full" />}
				</Link>
			))}
		</div>
	);
};

export { NavItem };
