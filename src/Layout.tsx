import './Layout.css'
import Content from "./Content.tsx";

export default function Layout() {
    return (
        <div className="container">
            <div className="header">Header</div>
            <div className="content">
                <Content />
            </div>
            <div className="footer">Footer</div>
        </div>
    );
}
