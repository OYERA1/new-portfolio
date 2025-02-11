import Image from "next/image";
import Link from "next/link";

interface TechCardProps {
	title: string;
	description: string;
	image: string;
	link: string;
}

const TechCard = ({ description, image, link, title }: TechCardProps) => {
	return (
		<Link
			href={link}
			target="_blank"
			className="col group relative aspect-square size-[300px] items-center justify-center rounded-2xl border p-6 hover:bg-neutral-400/30 dark:border-neutral-900 dark:bg-neutral-900 dark:hover:bg-neutral-700/60"
		>
			<picture className="group-hover:-translate-y-1 relative mb-5 size-28">
				<Image
					className="rounded-lg object-cover"
					alt={title}
					fill
					src={image}
				/>
			</picture>
			<div className="absolute inset-x-6 bottom-6 flex justify-between">
				<p className="font-bold text-xl">{title}</p>
				<span className="flex items-center justify-center rounded-full border border-neutral-700/60 px-3 text-neutral-500 text-sm dark:text-neutral-400/50">
					{description}
				</span>
			</div>
		</Link>
	);
};

export { TechCard, type TechCardProps };
