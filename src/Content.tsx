import './Content.css'
import PlaylistBar from "./components/PlaylistBar/PlaylistBar.tsx";
import {Outlet} from "react-router-dom";

export default function Content() {
    return (
        <div className="content-container">
            <div className="right-bar">
                <PlaylistBar />
            </div>
            <div className="middle-bar">
                <Outlet/>
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
