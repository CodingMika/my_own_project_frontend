import { Link } from "react-router-dom";
import "./header.css";

function Header(props) {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <br />
      <Link to="/account">My account</Link>
    </div>
  );
}

export default Header;
