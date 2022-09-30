import { Button } from "react-bootstrap";
import "./header.css";
import { useCookies } from "react-cookie";

function Header(props) {
  const [cookies, setCookies, removeCookie] = useCookies(["user"]);
  const user = cookies.user;

  const elements = [];
  console.log(user);
  if (user != null) {
    elements.push(
      <HeaderEmail key="headerEmail" email={user.email} />,
      <Button key="button2" href="/profile" variant="success">
        My profile
      </Button>,
      <Button key="button3" href="/make-add" variant="success">
        Make your add
      </Button>,
      <Button
        key="button1"
        href="/api/logout"
        variant="success"
        onClick={() => removeCookie("user")}
      >
        Log out
      </Button>
    );
  } else {
    elements.push(
      <Button key="button4" href="/login" variant="success">
        I already have an account
      </Button>,
      <Button key="button5" href="/registation" variant="success">
        I'm a new user
      </Button>
    );
  }
  return (
    <div className="header">
      <Button href="/" variant="success">
        Home
      </Button>
      {elements}
    </div>
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
