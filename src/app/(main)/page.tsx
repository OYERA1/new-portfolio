import { Cards } from "@/components/cards/cards";
import Spotify from "@/components/icons/spotify";
import Link from "next/link";

export default function Home() {
	return <div className="flex flex-col py-20">
		<div className="contains h-96 flex-col">
			<div className="flex flex-col gap-3 ">
				<h1 className="font-black text-6xl">
					<span className="text-neutral-600/85">
						Quem é {" "}
					</span>
					ØYERA?
				</h1>
				<h2 className="text-justify font-light text-black/75 text-xl dark:text-neutral-300/70 ">
					Desenvolvedor Full-Stack especializado em ambientes Node.JS
					<br />
					Com uma visão generalista, gosto de sempre me atualizar com as novas tecnologias que aparecem no mercado, podendo atuar em todos os ciclos de desenvolvimento e auxiliando pessoas e empresas a conquistarem seus objetivos.
				</h2>
			</div>
			<div className="mt-10 flex max-w-[400px] gap-20">
				<Link href={'https://cv.oyera.dev'} className="btn bg-neutral-800/90 font-semibold text-white/90 shadow-inner shadow-white/20 hover:bg-neutral-800 dark:bg-neutral-800/20 dark:text-white hover:dark:bg-neutral-800/75 ">
					Curriculo
				</Link>
				<Link href={'/contact'} className="btn bg-background text-foreground shadow-xl hover:bg-neutral-300/20 dark:hover:bg-neutral-800/20">
					Entre em contato
				</Link>
			</div>
		</div>

		<div className="contains flex-col gap-14" >
			<h2 className="font-black text-6xl">
				Me conheça!
			</h2>
			<div className="grid grid-cols-2 gap-7">
				<Cards title="Sobre mim" link="/about" description="Quem sou e o que faço" />
				<Cards title="Livros" link="/books" description="Livros que já li e gosto" />
				<Cards title="Stack" link="/stack" description="Ferramentas que utilizo" />
				<Cards img={<Spotify fontSize={250} />} title="Playlist" link="/music" description="Quais músicas estou ouvindo no momento" />
			</div>
		</div>
	</div >
}
