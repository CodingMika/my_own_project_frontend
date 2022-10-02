import "./profile.css";
import { Button } from "react-bootstrap";
import { useCookies } from "react-cookie";

function ProfilePage(props) {
  const [cookies, setCookies, removeCookie] = useCookies(["user"]);
  const user = cookies.user;

  const elements = [];
  console.log(user);
  if (user != null) {
    elements.push(
      <h4 key="picture">Picture: {user.picture ?? "not selected"}</h4>,
      <h4 key="name">Name: {user.name}</h4>,
      <h4 key="city">City: {user.city ?? "not selected"}</h4>,
      <h4 key="phoneNumber">Phone number: {user.phoneNumber}</h4>,
      <h4 key="email">Email: {user.email}</h4>
    );
  }
  return (
    <div>
      {elements}
      <Button href="/edit-profile" variant="success">
        edit
      </Button>
      <br />
      <Button href="/delete-account" variant="success">
        delete
      </Button>
    </div>
  );
}
export default ProfilePage;
