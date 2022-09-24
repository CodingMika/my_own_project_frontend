import { Button, ButtonGroup } from "react-bootstrap";
import "./header.css";

function Header(props) {
  return (
    <div className="header">
      <ButtonGroup>
        <Button href="/" variant="success">
          Home
        </Button>
        <Button href="/login" variant="success">
          I already have an account.
        </Button>
        <Button href="/registation" variant="success">
          I'm a new user.
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default Header;
