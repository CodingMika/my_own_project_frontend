import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/sign-in">Sign In</Link>
      <Link to="/sign-up">Sign Up</Link>
    </div>
  );
}

export default Header;
