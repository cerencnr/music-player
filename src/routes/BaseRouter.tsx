import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "../Layout.tsx";
import Gallery from "../Gallery.tsx";
import PlaylistDetail from "../pages/PlaylistDetail/PlaylistDetail.tsx";

export default function BaseRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route
                        path="/"
                        element={<Gallery />}
                    />
                    <Route
                        path="/playlist/:playlistId"
                        element={
                            <PlaylistDetail />
                        }
                    />
                    <Route path="*" element={<Navigate to="/" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
