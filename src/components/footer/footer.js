import { Button, ButtonGroup } from "react-bootstrap";
import "./footer.css";

function Footer(props) {
  return (
    <div className="footer">
      <Button href="/information" variant="success" className="btn">
        Information
      </Button>
      <Button href="/social-media" variant="success" className="btn">
        Social Media
      </Button>
      <Button href="/contacts" variant="success" className="btn">
        Contacts
      </Button>
    </div>
  );
}

export default Footer;
