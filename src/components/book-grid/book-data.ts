// import { readFile, readdir } from "node:fs/promises";

// const files = await readdir("/home/oyera/www/front/new-portfolio/public/books");
// // const links = Bun.file("/home/oyera/www/front/new-portfolio/public/links.txt");

// const makeBooks = async () => {
// 	const myBooks = [];
// 	const link = (await links.text()).split("\n");
// 	console.log(link);
// 	for (let i = 0; i < files.length; i++) {
// 		const newBook = {
// 			id: i + 1,
// 			content: `/books/${files[i]}`,
// 			name: files[i]
// 				.replaceAll("-", " ")
// 				.replace(".jpg", "")
// 				.replace(/\b(\w)/g, (s) => s.toUpperCase()),
// 			link: link[i],
// 		};

// 		myBooks.push(newBook);
// 	}

// 	console.log(myBooks);
// };

// makeBooks();

const BOOK_DATA = [
	{
		id: 1,
		content: "/books/a-metamorfose.jpg",
		name: "A Metamorfose",
		link: "https://www.amazon.com.br/metamorfose-Franz-Kafka/dp/8571646856",
	},
	{
		id: 2,
		content: "/books/ana-karenina.jpg",
		name: "Ana Karenina",
		link: "https://www.amazon.com.br/Anna-Kari%C3%AAnina-Liev-Tolstoi/dp/8535929223",
	},
	{
		id: 3,
		content: "/books/campo-geral.jpg",
		name: "Campo Geral",
		link: "https://www.amazon.com.br/Campo-Geral-Jo%C3%A3o-Guimar%C3%A3es-Rosa/dp/8526025074",
	},
	{
		id: 4,
		content: "/books/carta-ao-pai.jpg",
		name: "Carta Ao Pai",
		link: "https://www.amazon.com.br/Carta-ao-pai-Franz-Kafka/dp/8571646848",
	},
	{
		id: 5,
		content: "/books/crime-e-castigo.jpg",
		name: "Crime E Castigo",
		link: "https://www.amazon.com.br/Crime-castigo-Fi%C3%B3dor-Dostoi%C3%A9vski/dp/8544002161",
	},
	{
		id: 6,
		content: "/books/entendendo-algoritmos.jpg",
		name: "Entendendo Algoritmos",
		link: "https://www.amazon.com.br/Entendendo-Algoritmos-Ilustrado-Programadores-Curiosos/dp/8575225634",
	},
	{
		id: 7,
		content: "/books/o-nariz.jpg",
		name: "O Nariz",
		link: "https://www.amazon.com.br/Nariz-Venda-Exclusiva-Amazon-ebook/dp/B0916F5BYW",
	},
	{
		id: 8,
		content: "/books/os-demonios.jpg",
		name: "Os Demonios",
		link: "https://www.amazon.com.br/Os-dem%C3%B4nios-Fi%C3%B3dor-Dostoi%C3%A9vski/dp/6586014891",
	},
	{
		id: 9,
		content: "/books/morro-dos-ventos-uivantes.jpg",
		name: "Morro Dos Ventos Uivantes",
		link: "https://www.amazon.com.br/morro-dos-ventos-uivantes/dp/8582851421",
	},
	{
		id: 10,
		content: "/books/inicio-e-fim.jpg",
		name: "Inicio E Fim",
		link: "https://www.amazon.com.br/In%C3%ADcio-Fim-Fi%C3%B3dor-Dostoi%C3%A9vski/dp/8544002145",
	},
	{
		id: 11,
		content: "/books/as-ras.jpg",
		name: "As Ras",
		link: "https://www.amazon.com.br/R%C3%A3s-Arist%C3%B3fanes/dp/6585066049",
	},
];

export { BOOK_DATA };
