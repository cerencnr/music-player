import './PlaylistBar.css'
import {playlists} from "../../playlists.ts";

export default function PlaylistBar() {
    return (
        <div className="playlist-container">
            {playlists.map((playlist) => (
                <div className="mini-playlist">{playlist.image}</div>
            ))}
        </div>
    );
}
