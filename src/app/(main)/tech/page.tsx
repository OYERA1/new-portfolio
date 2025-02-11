import { TechCard } from "@/components/tech/tech-card";

export default function TechPage() {
	return (
		<main className="flex w-full flex-col items-center py-20 text-accent">
			<div className="contains flex-col px-5 py-10 md:px-0">
				<h1 className="font-bold text-7xl">Sobre</h1>
				<h2 className="text-lg">Quem sou e o que faço</h2>
			</div>
			<hr className="w-full border-neutral-400/20" />
			<div className="contains px-5 py-20 md:px-0">
				<TechCard
					description="teste"
					link="teste"
					title="teste"
					image="/works/screenshot-1.png"
				/>
			</div>
		</main>
	);
}
