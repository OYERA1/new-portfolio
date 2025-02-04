import Link from "next/link";

interface CardsProps {
    title: string,
    description: string
    link: string
    img?: string
}

const Cards = ({ description, img, link, title }: CardsProps) => {
    return (
        <Link href={link} className="group flex aspect-square  flex-col items-center justify-center rounded-xl border border-neutral-200/80 bg-neutral-100 p-10 transition-all duration-200 hover:bg-neutral-200 hover:shadow-md dark:border-none dark:bg-neutral-900 dark:hover:bg-neutral-800/70">
            <div className="text-center" >
                <h3 className="font-bold text-2xl">{title}</h3>
                <h4 className=" text-neutral-500">{description}</h4>
            </div >
        </Link >
    );
};

export { Cards, type CardsProps };