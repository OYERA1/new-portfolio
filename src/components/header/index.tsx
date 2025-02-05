import Link from "next/link";
import { Nav } from "../nav/nav";
import { NavItem } from "../nav/nav-item";
import { ToggleSwitcher } from "../toggle-switcher";
import { NAV_DATA, NAV_SOCIAL_DATA } from "./data";

const Header = () => {
	return (
		<header className="contains relative z-10 flex px-5 text-accent/70 md:px-0">
			<Nav>
				<div className="flex gap-2 md:gap-8">
					<Link
						href={"/"}
						className="font-extrabold text-3xl text-black/80 dark:text-white/80"
					>
						Ø
					</Link>
					<NavItem items={NAV_DATA} />
				</div>
				<div className="flex gap-2 md:gap-6">
					<NavItem
						className="gap-2 md:gap-6"
						items={NAV_SOCIAL_DATA}
					/>

					<div className="hidden h-6 w-[1px] bg-accent/30 md:block " />
					<ToggleSwitcher />
				</div>
			</Nav>
		</header>
	);
};

export { Header };
