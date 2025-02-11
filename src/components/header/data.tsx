import {
	GithubLogo,
	LinkedinLogo,
	TwitterLogo,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

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
			<LinkedinLogo
				size={24}
				weight="fill"
				className="duration-150 hover:brightness-75"
			/>
		),
		link: "https://linkedin.com/in/oyera",
	},
	{
		id: 2,
		content: (
			<Image
				alt="bluesky"
				src={"/logo/bluesky.svg"}
				width={24}
				height={24}
				className="brightness-150 grayscale duration-150 hover:brightness-75"
			/>
		),
		link: "https://bsky.app/profile/oyera.dev",
	},
	{
		id: 3,
		content: (
			<GithubLogo
				size={24}
				weight="fill"
				className=" duration-150 hover:brightness-75"
			/>
		),
		link: "https://github.com/oyera1",
	},
];

export { NAV_DATA, NAV_SOCIAL_DATA };
