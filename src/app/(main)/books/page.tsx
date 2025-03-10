import { BookGrid } from "@/components/book-grid/book-grid";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Livros",
};

export default function BookPage() {
	return (
		<div className="flex w-full flex-col items-center py-20 text-accent">
			<div className="contains flex-col justify-center px-5 py-10 md:px-0">
				<h1 className="font-bold text-6xl md:text-7xl ">Biblioteca</h1>
				<h2>
					Alguns dos livros que li, tanto na faculdade de letras, quanto na
					minha jornada como dev.
				</h2>
			</div>
			<hr className="w-full border-neutral-400/20" />
			<div className="py-20">
				<BookGrid />
			</div>
		</div>
	);
}
