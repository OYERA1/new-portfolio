import { Cards } from "@/components/cards/cards";
import Spotify from "@/components/icons/spotify";
import type { Metadata } from "next";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Home",
	description:
		"Página inicial de OYERA, desenvolvedor Full-Stack especializado em Node.js e outras tecnologias. Confira meus projetos, stack e entre em contato!",
	openGraph: {
		type: "website",
		title: "Home - OYERA",
		description:
			"Página inicial de OYERA, desenvolvedor Full-Stack especializado em Node.js e outras tecnologias...",
		url: "https://oyera.dev",
		siteName: "OYERA",
	},
};

export default async function Home() {
	const header = await headers();
	const userAgent = header.get("user-agent");
	const isMobile = userAgent?.match(
		/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i,
	);

	return (
		<div className="contains flex-col gap-20 py-20">
			<div className=" flex flex-col gap-3 px-5 md:p-0">
				<span className="font-black text-6xl">
					<span className="text-neutral-600/85">Quem é </span>
					<h1>OYERA</h1>
				</span>
				<h2 className="font-light text-xl md:text-justify ">
					Luan Henrique Oyera Chiacherini, desenvolvedor Full-Stack
					especializado em ambientes Node.JS
					<br />
					Com uma visão generalista, gosto de sempre me atualizar com as novas
					tecnologias que aparecem no mercado, podendo atuar em todos os ciclos
					de desenvolvimento e auxiliando pessoas e empresas a conquistarem seus
					objetivos.
				</h2>
				<div className="mt-10 flex max-w-[400px] flex-col gap-20 px-5 md:flex-row md:px-0">
					<Link
						href={"https://cv.oyera.dev"}
						target="_blank"
						className="btn bg-neutral-800/90 font-semibold text-white/90 shadow-inner shadow-white/20 hover:bg-neutral-800 dark:bg-neutral-800/20 hover:dark:bg-neutral-800/75 "
					>
						Curriculo
					</Link>
					<Link
						href={"/contact"}
						className="btn bg-background text-foreground shadow-xl hover:bg-neutral-300/20 dark:hover:bg-neutral-800/20"
					>
						Entre em contato
					</Link>
				</div>
			</div>

			<div className="contains flex-col gap-14 px-5 md:px-0">
				<h2 className="font-black text-6xl ">Me conheça!</h2>
				<div className="grid gap-7 md:grid-cols-2 ">
					<Cards
						title="Sobre mim"
						link="/about"
						img={
							<Image
								unoptimized
								className="mb-10"
								alt="mouse"
								height={isMobile ? 200 : 300}
								width={isMobile ? 200 : 300}
								src={"/mouse.png"}
							/>
						}
						description="Quem sou e o que faço"
					/>
					<Cards
						img="/books/Bookshelf.png"
						title="Livros"
						link="/books"
						description="Livros que já li e gosto"
					/>
					<Cards
						title="Stack"
						link="/tech"
						img="/tech/tech-stack.png"
						description="Ferramentas que utilizo"
					/>
					<Cards
						img={
							<Spotify className="mb-10 text-[180px] md:mb-20 md:text-[250px]" />
						}
						title="Playlist"
						link="/music"
						description="Quais músicas estou ouvindo no momento"
					/>
				</div>
			</div>
		</div>
	);
}
