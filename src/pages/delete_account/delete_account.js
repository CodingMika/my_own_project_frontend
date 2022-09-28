import { Button } from "react-bootstrap";
import "./delete_account.css";

function DeleteAccount(props) {
  return (
    <div className="delete">
      Are you sure you want to delete your account?
      <Button href="/api/delete-account" className="btn-danger">
        Yes
      </Button>
      <Button href="/account" className="btn-success">
        No
      </Button>
    </div>
  );
}
export default DeleteAccount;
