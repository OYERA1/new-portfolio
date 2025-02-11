import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Sobre",
};

export default function AboutPage() {
	return (
		<main className="flex w-full flex-col items-center py-20 text-accent">
			<div className="contains flex-col px-5 py-10 md:px-0">
				<h1 className="font-bold text-7xl">Sobre</h1>
				<h2 className="text-lg">Quem sou e o que faço</h2>
			</div>
			<hr className="w-full border-neutral-400/20" />
			<div className="contains px-5 py-20 md:px-0">
				<div className="col max-w-[620px] gap-10">
					<div>
						<h3 className="font-medium text-2xl text-accent/60">Quem eu sou</h3>
						<p className="font-light text-lg">
							Meu nome é <strong>Luan Henrique Oyera Chiacherini</strong>.
							Desenvolvedor, torcedor, fotografo, beletrista, gamer e amante de
							gatos. Atualmente vivo em São Paulo e sou apaixonado em ser
							curioso e tento aprender tudo o que posso.
						</p>
					</div>
					<div>
						<h3 className="font-medium text-2xl text-accent/60">O que faço?</h3>
						<p className="font-light text-lg">
							Atualmente trabalho em uma empresa de educação chamada{" "}
							<strong>
								<Link
									href={"https://meucurso.com.br"}
									target="_blank"
									className="underline"
								>
									MeuCurso Educacional{" "}
								</Link>
							</strong>
							como desenvolvedor full-stack, atuando tanto no front-end até na
							administração do servidor ubuntu, melhorando nosso site,
							aumentando a performance e experiência dos usuários.
						</p>
					</div>
					<div>
						<h3 className="font-medium text-2xl text-accent/60">
							Minhas experiências
						</h3>
						<p className="font-light text-lg">
							Durante minha trajetória, tive a oportunidade de colaborar em
							projetos significativos, como o desenvolvimento de um e-commerce
							de alto tráfego e o protótipo de uma rede social para advogados.
							Trabalhei de perto com tecnologias como C#, .NET, SQL Server e
							Azure, garantindo uma excelente performance e segurança nos
							sistemas. Além das minhas experiências de trabalho, já fiz alguns
							projetos pessoais, como um blog para organizar anotações feitas
							para minhas aulas da faculdade, centrando todo meu conhecimento em
							um banco de dados não relacional, utilizando ORMs, modelando o
							banco de dados e criando um sistema de autenticação que se conecta
							com a Google, aceitando apenas dominios da propria faculdade.
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}
