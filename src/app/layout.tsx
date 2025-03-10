import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Script from "next/script";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		default: "OYERA",
		template: "%s | OYERA",
	},
	applicationName: "OYERA",
	description:
		"Portfólio de Luan Oyera, Desenvolvedor Full-Stack especializado em Node.js, React e Next.js.",
	openGraph: {
		type: "website",
		siteName: "OYERA",
		url: "https://oyera.dev",
	},
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true
		}
	}
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
			<Head>
				<Script type="application/ld+json">
					{
						"@context": "https://schema.org",

					}
				</Script>
			</Head>
			<body className={`${inter.variable} antialiased`}>{children}</body>
		</html>
	);
}
