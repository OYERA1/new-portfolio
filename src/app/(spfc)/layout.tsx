import type { Metadata } from "next";
import "../globals.css";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import localFont from 'next/font/local'
import Link from "next/link";


const westwood = localFont({
    src: "./westwood.woff2",
    display: "swap",
    variable: '--font-westwood'
})

export const metadata: Metadata = {
    title: { absolute: "SPFC | Easter Egg" },
    description: "SÃO PAULO FUTEBOL CLUBE",

};

export default function SPFCLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className={`${westwood.variable} relative flex min-h-screen w-full items-center justify-center bg-white text-black`}>
            <Link href={'/'} className="absolute top-10 left-10 flex items-center justify-center rounded-full bg-black p-2 shadow-inner shadow-white/65 " type="button">
                <ArrowLeft color="white" />
            </Link>
            {children}
        </main>
    );
}