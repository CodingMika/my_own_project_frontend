import { Button } from "react-bootstrap";
import "./home.css";

function HomePage(props) {
  return (
    <div className="home">
      <Button href="/account">My account</Button>
      <Button href="/make-add">Make your add</Button>
    </div>
  );
}

export default HomePage;
