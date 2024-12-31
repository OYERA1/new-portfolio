import { cn } from "@/utils/lib";
import Link from "next/link";
import type { ReactNode } from "react";

interface INavItem {
	className?: string;
	items: IGenericObject[];
}

const NavItem = ({ className, items }: INavItem) => {
	return (
		<div className={cn("flex items-center gap-10", className)}>
			{items.map((item) => (
				<Link
					href={item?.link ?? ""}
					key={item.id}
				>
					{item.content}
				</Link>
			))}
		</div>
	);
};

export { NavItem };
