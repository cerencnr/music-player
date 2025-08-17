import './Content.css'
import Gallery from "./Gallery.tsx";
import PlaylistBar from "./components/PlaylistBar/PlaylistBar.tsx";

export default function Content() {
    return (
        <div className="content-container">
            <div className="right-bar">
                <PlaylistBar />
            </div>
            <div className="middle-bar">
            <Gallery />
            </div>
            <div className="left-bar">
                <div>l</div>
                <div>l</div>
                <div>l</div>
                <div>l</div>
                <div>l</div>

                <div>l</div>
                <div>l</div>
                <div>l</div>
                <div>l</div>
                <div>l</div>
                <div>l</div>
            </div>
        </div>
    );
}
