import {
	GithubLogo,
	LinkedinLogo,
	TwitterLogo,
} from "@phosphor-icons/react/dist/ssr";

const NAV_DATA: IGenericObject[] = [
	{
		id: 1,
		content: "Sobre",
		link: "/about",
	},
	{
		id: 2,
		content: "Trabalho",
		link: "/work",
	},
	{
		id: 3,
		content: "Contato",
		link: "/contact",
	},
	{
		id: 4,
		content: "Livros",
		link: "/books",
	},
];

const NAV_SOCIAL_DATA: IGenericObject[] = [
	{
		id: 1,
		content: (
			<LinkedinLogo size={24} weight="fill" className=" duration-150 hover:brightness-75" />
		),
		link: "https://linkedin.com/in/oyera",
	},
	{
		id: 2,
		content: (
			<TwitterLogo size={24} weight="fill" className=" duration-150 hover:brightness-75" />
		),
		link: "/about",
	},
	{
		id: 3,
		content: (
			<GithubLogo size={24} weight="fill" className=" duration-150 hover:brightness-75" />
		),
		link: "/about",
	},
];

export { NAV_DATA, NAV_SOCIAL_DATA };
