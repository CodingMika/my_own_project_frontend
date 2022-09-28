import { Button } from "react-bootstrap";
import "./edit_account.css";

function EditAccount(props) {
  return (
    <div className="account">
      <h4>Edit my account:</h4>
      <form>
        <div class="input-group">
          <span class="input-group-text">Profile picture:</span>
          <Button type="file" name="avatar" className="btn-success">
            Choose your profile picture
          </Button>
          <Button className="btn-success">Upload</Button>
        </div>
      </form>
      <form>
        <div class="input-group">
          <span class="input-group-text">Name:</span>
          <input type="text" class="form-control" />
        </div>
        <div class="input-group">
          <span class="input-group-text">City:</span>
          <input type="search" class="form-control" />
        </div>
        <div class="input-group">
          <span class="input-group-text">Phone Number:</span>
          <input type="tel" class="form-control" />
        </div>
        <div class="input-group">
          <span class="input-group-text">Email:</span>
          <input type="email" class="form-control" />
        </div>
        <div class="input-group">
          <span class="input-group-text">Password:</span>
          <input type="password" class="form-control" />
        </div>

        <Button className="btn-success">Submit</Button>
      </form>
    </div>
  );
}
export default EditAccount;
