import './Header.css'
import {useNavigate} from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    return (
      <div className="header-container">
          <div className="header-content">
              <button onClick={() => navigate(-1)}>
                  <img src="/caret_left.svg" alt="caret_left" />
              </button>
              <button onClick={() => navigate(1)}>
                  <img src="/caret_right.svg" alt="caret_right" />
              </button>
          </div>
      </div>
    );
}
