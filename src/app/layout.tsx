import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		default: "OYERA",
		template: "%s | OYERA",
	},
	description:
		"Portfólio de Luan Oyera, Desenvolvedor Full-Stack especializado em Node.js, React e Next.js.",
	openGraph: {
		type: "website",
		siteName: "OYERA",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
		>
			<body className={`${inter.variable} antialiased`}>{children}</body>
		</html>
	);
}
