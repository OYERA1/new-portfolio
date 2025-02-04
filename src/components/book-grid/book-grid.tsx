import Image from "next/image";
import Link from "next/link";
import { BOOK_DATA } from "./book-data";

const BookGrid = () => {
	return (
		<div className="contains flex flex-col flex-wrap items-baseline gap-10 md:flex-row">
			{BOOK_DATA.map((book) => (
				<div
					key={book.id}
					className="group w-max overflow-hidden transition-all duration-300 hover:scale-105">

					<Link
						href={book.link}
						rel="noopener"
						target="_blank"
					>
						<Image
							src={book.content}
							alt={book.name}
							width={200}
							height={600}
							className="cursor-pointer rounded-xl border-2 border-black/20 transition-all duration-300 group-hover:shadow-lg"
						/>
					</Link>
					<h2 className="relative flex flex-col">
						{book.name}
						<span className="absolute bottom-0 h-[1px] w-0 bg-accent/50 transition-all duration-300 ease-in-out group-hover:w-full" />
					</h2>
				</div>
			))}
		</div>
	);
};

export { BookGrid };
