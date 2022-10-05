import "./header.css";
import { Button } from "react-bootstrap";
import { useCookies } from "react-cookie";

function Header(props) {
  const [cookies, setCookies, removeCookie] = useCookies(["user"]);
  const user = cookies.user;

  const elements = [];
  console.log(user);
  if (user != null) {
    elements.push(
      <h5 key="headerEmail" className="logged">
        You logged in as {user.email}
      </h5>,
      <Button key="btn1" href="/profile" variant="success" className="btn">
        My profile
      </Button>,
      <Button
        key="btn2"
        href={"/adds/" + user._id}
        variant="success"
        className="btn"
      >
        My adds
      </Button>,
      <Button key="btn3" href="/make-add" variant="success" className="btn">
        Make a new add
      </Button>,
      <Button
        key="btn4"
        href="/api/logout"
        variant="success"
        className="btn"
        onClick={() => removeCookie("user")}
      >
        Log out
      </Button>
    );
  } else {
    elements.push(
      <Button key="btn5" href="/login" variant="success">
        I already have an account
      </Button>,
      <Button key="btn6" href="/registation" variant="success">
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

export default Header;
