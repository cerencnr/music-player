import './Playlist.css'
import {playlists} from "../../playlists.ts";

export default function Playlist() {
    return (
        <>
            {playlists.map((playlist) => (
                <div className="gallery-item">
                    <div className="gallery-item-content">
                        <div className="playlist-image">{playlist.image}</div>
                        <div className="playlist-name">{playlist.name}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}