import { Button } from "react-bootstrap";
import "./recover_password.css";

function RecoverPassword(props) {
  return (
    <div className="recover">
      <h4>Recover your password:</h4>
      <form>
        <div class="input-group">
          <span class="input-group-text">Email:</span>
          <input type="email" class="form-control" />
        </div>
        <Button className="btn-success">Submit</Button>
      </form>
    </div>
  );
}

export default RecoverPassword;
