import { Button } from "react-bootstrap";
import "./header.css";

function Header(props) {
  return (
    <div className="navbar">
      <Button href="/" variant="light">
        Home
      </Button>
      <br />
      <Button href="/account" variant="light">
        My account
      </Button>
    </div>
  );
}

export default Header;
