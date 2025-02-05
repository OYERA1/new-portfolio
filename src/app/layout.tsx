import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "oyera.dev",
        template: "%s | oyera.dev",
    },

    description: "Portfolio de Luan Oyera",

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
            <body className={`${inter.variable} antialiased`}>
                {children}
            </body>
        </html>
    )
}