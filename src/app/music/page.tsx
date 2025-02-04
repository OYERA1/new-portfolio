import { Spotify } from "react-spotify-embed";

export default function PlaylistPage() {
    return <div className="flex justify-center py-20">
        <iframe className={"w-max rounded-2xl border-0"} title="spotify playlist" src="https://open.spotify.com/embed/playlist/37i9dQZF1EprXSD0EVMZPs?utm_source=generator&theme=0" width="100%" height="500" />
    </div>
}