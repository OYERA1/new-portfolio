interface TechData {
	id: number;
	title: string;
	description: string;
	link: string;
	image: string;
}

const techData: TechData[] = [
	{
		id: 1,
		title: "TypeScript",
		description: "Linguagem",
		image: "/tech/typescript.png",
		link: "https://www.typescriptlang.org/",
	},
	{
		id: 10,
		title: "Tailwind",
		description: "CSS",
		image: "/tech/tailwind.png",
		link: "https://tailwindcss.com/",
	},
	{
		id: 2,
		title: "GitHub",
		description: "Controle de Versão",
		image: "/tech/github.webp",
		link: "https://github.com",
	},
	{
		id: 3,
		title: "Linux",
		description: "Sistema Operacional",
		image: "/tech/linux.jpg",
		link: "https://kernel.org",
	},
	{
		id: 4,
		title: "Bun",
		description: "JavaScript Runtime",
		image: "/tech/bun.svg",
		link: "https://bun.sh",
	},
	{
		id: 5,
		title: "Zustand",
		description: "Estado global",
		image: "/tech/zustand.svg",
		link: "https://zustand-demo.pmnd.rs/",
	},
	{
		id: 6,
		title: "Kotlin",
		description: "Linguagem",
		image: "/tech/kotlin.png",
		link: "https://kotlinlang.org/",
	},
	{
		id: 12,
		title: "IntelliJ Idea",
		description: "Editor",
		image: "/tech/intellij.jpg",
		link: "https://www.jetbrains.com/pt-br/idea/",
	},

	{
		id: 7,
		title: "Svelte",
		description: "Framework",
		image: "/tech/svelte.png",
		link: "https://svelte.dev/",
	},
	{
		id: 11,
		title: "VSCODE",
		description: "Editor",
		image: "/tech/vscode.png",
		link: "https://code.visualstudio.com/",
	},
	{
		id: 8,
		title: "NextJs",
		description: "Framework",
		image: "/tech/next.jpeg",
		link: "https://nextjs.org/",
	},
	{
		id: 9,
		title: "React Query",
		description: "Server Actions",
		image: "/tech/query.png",
		link: "https://tanstack.com/query/latest/docs/framework/react/overview",
	},
];

export { techData };
