import Image from "next/image";
import Link from "next/link";
import { BOOK_DATA } from "./book-data";

const BookGrid = () => {
	return (
		<>
			<div className="grid max-w-4xl grid-cols-3">
				{BOOK_DATA.map((book) => (
					<Link
						href={book.link}
						rel="noopener"
						target="_blank"
						key={book.id}
						className="w-max"
					>
						<Image
							src={book.content}
							alt={book.name}
							width={200}
							height={600}
							className="cursor-pointer"
						/>
						<h2>{book.name}</h2>
					</Link>
				))}
			</div>
		</>
	);
};

export { BookGrid };
