import { TechCard } from "@/components/tech/tech-card";
import { techData } from "@/constants/tech-data";

export default function TechPage() {
	return (
		<main className="flex w-full flex-col items-center py-20 text-accent">
			<div className="contains flex-col px-5 py-10 md:px-0">
				<h1 className="font-bold text-6xl md:text-7xl">Tecnologias</h1>
				<h2 className="text-lg">
					Tecnologias que me auxiliam a desenvolver projetos.
				</h2>
			</div>
			<hr className="w-full border-neutral-400/20" />
			<div className="col contains flex-wrap items-center gap-10 px-5 py-20 md:flex-row md:items-start md:px-0">
				{techData.map((item) => (
					<TechCard
						key={item.id}
						description={item.description}
						link={item.link}
						title={item.title}
						image={item.image}
					/>
				))}
			</div>
		</main>
	);
}
