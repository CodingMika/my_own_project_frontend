import { Link } from "react-router-dom";
import "./account.css";

function AccountPage(props) {
  return (
    <div className="account">
      My account:
      <form
        method="postT"
        action="/upload-avatar"
        enctype="multipart/form-data"
      >
        <div>
          <br />
          <label>Profile Picture:</label>
          <input type="file" name="avatar" />
        </div>
        <div>
          <br />
          <input type="submit" value="Upload" className="submit" />
        </div>
      </form>
      <form>
        <div>
          <br />
          <lable>Name: </lable>
          <input type="text" />
        </div>
        <div>
          <br />
          <lable>City:</lable>
          <input type="search" />
        </div>
        <div>
          <br />
          <lable>Phone Number: </lable>
          <input type="tel" />
        </div>
        <div>
          <br />
          <lable>Email: </lable>
          <input type="email" />
        </div>
        <div>
          <br />
          <lable>Password:</lable>
          <input type="password" />
        </div>
        <br />
        <input type="submit" className="submit" />
      </form>
    </div>
  );
}

export default AccountPage;
