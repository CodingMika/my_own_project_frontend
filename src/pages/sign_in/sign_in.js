import { Link } from "react-router-dom";
import "./sign_in.css";

function SignInPage(props) {
  return (
    <div className="sign_in">
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

export default SignInPage;
