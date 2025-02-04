import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Glow, GlowCapture } from "../special/glow";

interface CardsProps {
    title: string;
    description: string;
    link: string;
    img?: string | ReactNode;
}

const Cards = ({ description, img, link, title }: CardsProps) => {
    return (
        <Link
            href={link}
            className="group relative flex aspect-square flex-col items-center rounded-xl border border-neutral-200/80 bg-neutral-100 p-10 transition-all duration-300 ease-in-out hover:bg-neutral-400/15 hover:shadow-md dark:border-none dark:bg-neutral-900 dark:hover:bg-neutral-900/80"
        >
            <div className="text-center">
                <h3 className="font-bold text-2xl">{title}</h3>
                <h4 className=" text-neutral-500">{description}</h4>
            </div>
            <div className="absolute bottom-20 z-30 ease-in-out *:transition-all *:duration-300 group-hover:*:scale-125">
                {img && typeof img === "string" && (
                    <Image
                        alt={title}
                        width={300}
                        height={300}
                        src={img}
                    />
                )}
                {img && typeof img !== "string" && img}
            </div>
        </Link >
    );
};

export { Cards, type CardsProps };
