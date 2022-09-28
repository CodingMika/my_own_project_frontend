import { useState } from "react";
import { Button } from "react-bootstrap";
import UserService from "../../services/user/user_service";
import "./header.css";

function Header(props) {
  const [user, setUser] = useState(UserService.getUser());

  UserService.setHeaderUpdate((user) => {
    setUser(user);
  });

  const elements = [];

  if (user != null) {
    elements.push(
      <HeaderEmail key="headerEmail" email={user.email} />,
      <Button key="button1" href="/logout" variant="success">
        Log out
      </Button>
    );
  } else {
    elements.push(
      <Button key="button2" href="/login" variant="success">
        I already have an account
      </Button>,
      <Button key="button3" href="/registation" variant="success">
        I'm a new user
      </Button>
    );
  }
  return (
    <>
      <Button href="/" variant="success">
        Home
      </Button>
      {elements}
    </>
  );
}

function HeaderEmail(props) {
  return (
    <>
      <h5>You logged in as {props.email}</h5>
    </>
  );
}

export default Header;
