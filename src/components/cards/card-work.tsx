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
    icon
}: CardWorkProps) => {
    return (
        <div className="group flex justify-between rounded-xl border border-neutral-700/40 bg-neutral-100 p-10 pr-0 transition-all duration-300 ease-in-out hover:bg-neutral-400/15 hover:shadow-md dark:bg-neutral-900 dark:hover:border-neutral-700/60">
            <div className="flex flex-col justify-between">
                <div>
                    <span>{icon}</span>
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
            <div className="flex size-max">
                <Image
                    alt={title}
                    src={image.url}
                    height={image.height}
                    width={image.width}
                />
            </div>
        </div>
    );
};

export { CardWork, type CardWorkProps };
