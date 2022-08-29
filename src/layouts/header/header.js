import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/account">My account</Link>
    </div>
  );
}

export default Header;
