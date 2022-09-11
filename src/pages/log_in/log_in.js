import { Link } from "react-router-dom";
import "./log_in.css";

function LogInPage(props) {
  return (
    <div className="log_in">
      Enter your account:
      <form>
        <div>
          <lable>Email: </lable>
          <input type="email" />
        </div>
        <div>
          <lable>Password: </lable>
          <input type="password" />
          <Link to="/recover-password">I forgot my password.</Link>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default LogInPage;
