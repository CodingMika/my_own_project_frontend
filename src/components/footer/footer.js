import { Button, ButtonGroup } from "react-bootstrap";
import "./footer.css";

function Footer(props) {
  return (
    <div className="footer">
      <ButtonGroup aria-label="Footer">
        <Button href="/information" variant="info">
          Information
        </Button>
        <Button href="/social-media" variant="info">
          Social Media
        </Button>
        <Button href="/contacts" variant="info">
          Contacts
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default Footer;
