import {useParams} from "react-router-dom";
import {playlists} from "../../playlists.ts";
import './PlaylistDetail.css'

export default function PlaylistDetail() {
    const {playlistId} = useParams();
    const playlist = playlists.find((playlist) => {
        console.log("Checking playlist id:", playlist.id, "with param id:", playlistId);
        return playlist.id === playlistId;
    });

    if (!playlist) {
        return <div>Playlist not found</div>
    }

    return (
        <div className="playlist-detail-container">
            <div className="playlist-header">
                <div className="playlist-header-image">{playlist.image}</div>
                <div className="playlist-header-text">
                    <p>Public Playlist</p>
                    <div className="playlist-detail-playlist-name">{playlist.name}</div>
                    <p>description</p>
                    <div>song count</div>
                </div>
            </div>
            <div className="playlist-content">table</div>
        </div>
    )
}
