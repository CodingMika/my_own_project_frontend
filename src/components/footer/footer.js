import { Button, ButtonGroup } from "react-bootstrap";
import "./footer.css";

function Footer(props) {
  return (
    <div className="footer">
      <ButtonGroup>
        <Button href="/information" variant="success">
          Information
        </Button>
        <Button href="/social-media" variant="success">
          Social Media
        </Button>
        <Button href="/contacts" variant="success">
          Contacts
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default Footer;
