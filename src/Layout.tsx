import './Layout.css'
import Content from "./Content.tsx";
import Header from "./components/Header/Header.tsx";

export default function Layout() {
    return (
        <div className="container">
            <Header />
            <div className="content">
                <Content />
            </div>
            <div className="footer">Footer</div>
        </div>
    );
}
