import './PlaylistContainer.css'
import {playlists} from "../../playlists.ts";
import Playlist from "../Playlist/Playlist.tsx";

export default function PlaylistContainer() {
    return (
        <>
            {playlists.map((playlist) => (
                <div className="gallery-item">
                    <Playlist image={playlist.image} name={playlist.name} id={playlist.id} />
                </div>
            ))}
        </>
    );
}
