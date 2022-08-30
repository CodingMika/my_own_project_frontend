import { Link } from "react-router-dom";
import "./footer.css";

function Footer(props) {
  return (
    <div className="footer">
      <Link to="/information">Information</Link>
      <Link to="/social_media">Social Media</Link>
      <Link to="/contacts">Contacts</Link>
    </div>
  );
}

export default Footer;
