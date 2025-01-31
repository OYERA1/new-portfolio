import Link from "next/link";
import { Nav } from "../nav/nav";
import { NavItem } from "../nav/nav-item";
import { ToggleSwitcher } from "../toggle-switcher";
import { NAV_DATA, NAV_SOCIAL_DATA } from "./data";

const Header = () => {
	return (
		<header className="contains relative z-10 flex text-accent/70">
			<Nav>
				<div className="flex gap-4">
					<Link
						href={"/"}
						className="font-extrabold text-3xl text-black/80 dark:text-white/80"
					>
						Ø
					</Link>
					<NavItem items={NAV_DATA} />
				</div>
				<div className="flex gap-6">
					<NavItem
						className="gap-6"
						items={NAV_SOCIAL_DATA}
					/>

					<div className="h-6 w-[1px] bg-accent/30 " />
					<ToggleSwitcher />
				</div>
			</Nav>
		</header>
	);
};

export { Header };
