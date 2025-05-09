import { Toaster } from "sonner";
import "../globals.css";
import { Header } from "@/components/header";
import { ThemeProvider } from "next-themes";
import Image from "next/image";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
		>
			<div className="relative flex h-full min-h-screen flex-col items-center overflow-x-hidden bg-background py-8 transition-all duration-700">
				<Header />
				<main>
					{children}
					<picture className="-translate-x-1/2 pointer-events-none absolute top-0 left-1/2 h-[550px] w-[1440px]">
						<Image
							alt="gradient"
							loading="eager"
							sizes="100vw"
							draggable="false"
							priority
							fill
							src={"/header-gradient.svg"}
							fetchPriority="high"
						/>
					</picture>
				</main>
			</div>
			<Toaster richColors />
		</ThemeProvider>
	);
}
