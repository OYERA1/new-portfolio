import { CardWork } from "@/components/cards/card-work";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Trabalho",
};

export default function WorkPage() {
	return (
		<main className="flex w-full flex-col items-center py-20 text-accent">
			<div className="contains flex-col px-5 py-10 md:px-0">
				<h1 className="font-bold text-7xl">Trabalho</h1>
				<h2 className="text-lg">Minha experiência até aqui</h2>
			</div>
			<hr className="w-full border-neutral-400/20" />
			<div className="contains flex-col gap-20 py-10">
				<CardWork
					icon={
						<Image
							alt="bipelove"
							width={96}
							height={96}
							src={"/logo/bipelove.png"}
						/>
					}
					linkTitle="Visitar site"
					image={{ url: "/works/screenshot-1.png", height: 500, width: 550 }}
					description="Primeira experiência como dev full-stack, refatorei, criei novas features e implementei melhorias que pularam de 40% em performance, para 95%. Ajustei nosso deploy implementando CI/CD com docker utilizando um servidor VPS Azure."
					title="MeuCurso"
					link="https://meucurso.com.br"
				/>
				<CardWork
					icon={<span className="text-8xl">🐭</span>}
					linkTitle="Visitar site"
					image={{ url: "/works/screenshot-2.png", height: 500, width: 550 }}
					description="Meu curriculo online, com opção para baixar em pdf. O aplicativo feito em svelte e hospedado em uma VPS DigitalOcean."
					title="Curriculum Vitæ"
					link="https://cv.oyera.dev"
				/>
			</div>
		</main>
	);
}
