import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Playlists",
};

export default function PlaylistPage() {
	return (
		<div className="flex w-full flex-col items-center py-20 text-accent">
			<div className="contains px-10 py-10 md:px-0">
				<h1 className="font-bold text-7xl">Músicas do momento</h1>
			</div>
			<hr className="w-full border-neutral-400/20" />
			<div className="contains flex h-max flex-col gap-10 px-10 py-20 md:flex-row md:px-0">
				<div className="flex h-full w-full flex-col justify-between gap-10">
					<h2 className="font-semibold text-5xl">No Repeat</h2>
					<iframe
						loading="lazy"
						className="rounded-2xl border-0"
						title="spotify playlist"
						src="https://open.spotify.com/embed/playlist/37i9dQZF1EprXSD0EVMZPs?utm_source=generator&theme=0"
						frameBorder={0}
						width="100%"
						height="152"
					/>
					<h2 className="font-semibold text-5xl">Música do momento</h2>
					<iframe
						loading="lazy"
						className="rounded-2xl border-0"
						title="spotify playlist"
						src="https://open.spotify.com/embed/track/7ue3vDtaxcToVyzbyloSyQ?utm_source=generator"
						frameBorder={0}
						width="100%"
						height="152"
					/>
				</div>
				<div className="flex w-full flex-col gap-5">
					<h2 className="flex-1 font-semibold text-5xl">
						Album & Artista favorito
					</h2>
					<iframe
						title="Album favorito"
						className="rounded-2xl border-0"
						src="https://open.spotify.com/embed/album/3a9qH2VEsSiOZvMrjaS0Nu?utm_source=generator"
						width="100%"
						height="352"
						frameBorder="0"
						allowFullScreen
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
						loading="lazy"
					/>
				</div>
			</div>
		</div>
	);
}
