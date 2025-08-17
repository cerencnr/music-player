import './Playlist.css'
import { useNavigate } from "react-router-dom";

interface PlaylistProps {
    image: string;
    name: string;
    id: string;
}

export default function Playlist({image, name, id}: PlaylistProps) {
    const navigate = useNavigate();

    return (
        <div
            className="gallery-item-content"
            onClick={() => navigate(`/playlist/${id}`)}
            style={{cursor: "pointer"}}
        >
            <div className="playlist-image">{image}</div>
            <div className="playlist-name">{name}</div>
        </div>
    );
}