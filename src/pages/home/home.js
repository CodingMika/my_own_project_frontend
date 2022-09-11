import "./home.css";
import giver from "./giver.jpg";
import { Button, ButtonGroup } from "react-bootstrap";

function HomePage(props) {
  return (
    <div className="homepage">
      <ButtonGroup>
        <Button href="/sign-in" variant="info">
          I already have an account.
        </Button>
        <Button href="/sign-up" variant="info">
          I'm a new user.
        </Button>
      </ButtonGroup>

      <img src={giver} alt="giver" className="homeimage" />
    </div>
  );
}

export default HomePage;
