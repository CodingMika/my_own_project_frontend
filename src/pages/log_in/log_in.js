import { Button } from "react-bootstrap";
import "./log_in.css";

function LogInPage(props) {
  return (
    <div className="log_in">
      Log in:
      <form>
        <div>
          <br />
          <lable>Email: </lable>
          <input type="email" />
        </div>
        <div>
          <br />
          <lable>Password: </lable>
          <input type="password" />
          <br />
        </div>
        <br />
        <Button className="btn-success">Submit</Button>
      </form>
      <br />
      <Button href="/recover-password" size="sm" className="btn-warning">
        I forgot my password.
      </Button>
    </div>
  );
}

export default LogInPage;
