import { Button } from "react-bootstrap";
import "./home.css";

function HomePage(props) {
  return (
    <div className="home">
      <Button href="/account">My account</Button>
    </div>
  );
}

export default HomePage;
