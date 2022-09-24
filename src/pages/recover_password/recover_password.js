import { Button } from "react-bootstrap";
import "./recover_password.css";

function RecoverPassword(props) {
  return (
    <div className="recover">
      Recover your password:
      <form>
        <div>
          <lable>Email: </lable>
          <input type="email" />
        </div>
        <Button className="btn-success">Submit</Button>
      </form>
    </div>
  );
}

export default RecoverPassword;
