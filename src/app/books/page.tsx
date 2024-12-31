import { BookGrid } from "@/components/book-grid/book-grid";

export default function Page() {
	return (
		<main>
			<h1>Biblioteca</h1>
			<h2>
				Alguns dos livros que li, tanto na faculdade de letras, quanto na minha
				jornada como dev.
			</h2>
			<div className="h-[1px] w-full bg-accent/30" />
			<div>
				<BookGrid />
			</div>
		</main>
	);
}
