import "./delete_account.css";
import { Button } from "react-bootstrap";
import { useCookies } from "react-cookie";

function DeleteAccount(props) {
  const [cookies, setCookies, removeCookie] = useCookies(["user"]);

  return (
    <div className="delete">
      Are you sure you want to delete your account?
      <Button
        href="/api/delete-account"
        className="btn-danger"
        onClick={() => removeCookie("user")}
      >
        Yes
      </Button>
      <Button href="/account" className="btn-success">
        No
      </Button>
    </div>
  );
}
export default DeleteAccount;
