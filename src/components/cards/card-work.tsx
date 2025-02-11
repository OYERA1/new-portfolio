import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

interface CardWorkProps {
	title: string;
	description: string;
	image: {
		url: string | StaticImageData;
		width: number;
		height: number;
	};
	link: string;
	linkTitle: string;
	icon: ReactNode;
}

const CardWork = ({
	description,
	image,
	link,
	title,
	linkTitle,
	icon,
}: CardWorkProps) => {
	return (
		<div className="col justify-between overflow-hidden rounded-xl border border-neutral-700/40 bg-neutral-100 p-10 transition-all duration-300 ease-in-out hover:bg-neutral-400/15 hover:shadow-md md:flex-row md:pr-0 dark:bg-neutral-900 dark:hover:border-neutral-700/60 ">
			<div className="col justify-between gap-5">
				<div className="col gap-5 ">
					<span className="hidden md:flex">{icon}</span>
					<h1 className="font-bold text-5xl">{title}</h1>
					<h2 className="max-w-[360px]">{description}</h2>
				</div>
				<Link
					className="w-max text-xl underline hover:brightness-125"
					href={link}
					target="_blank"
				>
					{linkTitle}
				</Link>
			</div>
			<picture className="hidden md:flex">
				<Image
					className="hover:scale-110"
					alt={title}
					src={image.url}
					width={image.width}
					height={image.height}
				/>
			</picture>
		</div>
	);
};

export { CardWork, type CardWorkProps };
