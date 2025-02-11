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
			className="col relative aspect-square size-[300px] items-center justify-center rounded-2xl border border-neutral-900 bg-neutral-900 p-6"
		>
			<picture className="relative size-28 rounded-xl">
				<Image
					alt={title}
					fill
					src={image}
				/>
			</picture>
			<div className="absolute inset-x-6 bottom-6 flex justify-between">
				<p className="font-bold text-2xl">{title}</p>
				<span className="flex items-center justify-center rounded-full border border-neutral-700/60 px-6 text-neutral-400/50">
					{description}
				</span>
			</div>
		</Link>
	);
};

export { TechCard, type TechCardProps };
