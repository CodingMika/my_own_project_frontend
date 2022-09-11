import { Link } from "react-router-dom";
import "./home.css";

function HomePage(props) {
  return (
    <div className="homepage">
      homepage
      <br />
      <Link to="/sign-in">I already have an account.</Link>
      <br />
      <Link to="/sign-up">I'm a new user.</Link>
      <br />
    </div>
  );
}

export default HomePage;
