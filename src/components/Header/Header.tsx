import './Header.css'
import {useNavigate} from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    return (
      <div className="header-container">
          <button onClick={() => navigate(-1)}>back</button>
          <button onClick={() => navigate(1)}>forward</button>
      </div>
    );
}
