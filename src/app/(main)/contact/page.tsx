import { Form } from "@/components/form/form";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contato",
};

export default function ContactPage() {
	return (
		<div className="flex w-full flex-col items-center py-20 text-accent">
			<div className="contains flex-col px-5 py-10 md:px-0">
				<h1 className="font-bold text-7xl">Entre em contato</h1>
				<h2>Vamos trabalhar em algo legal :)</h2>
			</div>
			<hr className="w-full border-neutral-400/20" />
			<div className="contains px-5 py-20 md:px-0">
				<div className="relative z-10 size-full min-h-72 divide-y-2 divide-neutral-600/20 overflow-hidden rounded-xl border border-neutral-600/20 bg-opacity-10 dark:divide-neutral-400/25 dark:bg-neutral-800/50">
					<div className="-z-10 -top-14 absolute bottom-56 mb-64 h-full w-full bg-gradient-to-tr from-purple-800 to-orange-400 opacity-10 blur-2xl transition-all duration-700 dark:hidden" />
					<div className="flex w-full justify-center border-none py-4 font-medium">
						Nova mensagem
					</div>
					<Form />
				</div>
			</div>
		</div>
	);
}
