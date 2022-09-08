import { Link } from "react-router-dom";
import "./account.css";

function AccountPage(props) {
  return (
    <div className="account">
      <Link to="/sign-in">I already have an account.</Link>
      <br />
      <Link to="/sign-up">I'm a new user.</Link>
      <br />
      My account:
      <form
        method="postT"
        action="/upload-avatar"
        enctype="multipart/form-data"
      >
        <div>
          <label>Your profile picture:</label>
          <input type="file" name="avatar" />
        </div>
        <div>
          <input type="submit" value="Upload" />
        </div>
      </form>
      <form>
        <input type="file" />
        <div>
          <lable>Name: </lable>
          <input type="text" />
        </div>
        <div>
          <lable>City:</lable>
          <input type="search" />
        </div>
        <div>
          <lable>Phone Number: </lable>
          <input type="tel" />
        </div>
        <div>
          <lable>Email: </lable>
          <input type="email" />
        </div>
        <div>
          <lable>Password: </lable>
          <input type="password" />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default AccountPage;
