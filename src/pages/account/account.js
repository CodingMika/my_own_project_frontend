import { Button } from "react-bootstrap";
import "./account.css";

function AccountPage(props) {
  return (
    <div className="account">
      <div>
        <lable></lable>
      </div>
      <Button href="/edit-account" className="btn-success">
        Edit my account.
      </Button>
      <br />
      <Button href="/delete-account" className="btn-danger">
        Delete my account.
      </Button>
    </div>
  );
}

export default AccountPage;
