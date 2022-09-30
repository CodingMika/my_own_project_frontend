import { Button } from "react-bootstrap";
import "./edit_profile.css";

function EditProfilePage(props) {
  return (
    <div className="profile">
      <h4>Edit my profile:</h4>
      <form>
        <div className="input-group">
          <span className="input-group-text">Profile picture:</span>
          <Button type="image" name="avatar" className="btn-success">
            Choose your profile picture
          </Button>
          <Button className="btn-success">Upload</Button>
        </div>
        <div className="input-group">
          <span className="input-group-text">Name:</span>
          <input type="text" className="form-control" />
        </div>
        <div className="input-group">
          <span className="input-group-text">City:</span>
          <input type="search" className="form-control" />
        </div>
        <div className="input-group">
          <span className="input-group-text">Phone Number:</span>
          <input type="tel" className="form-control" />
        </div>
        <div className="input-group">
          <span className="input-group-text">Email:</span>
          <input type="email" className="form-control" />
        </div>
        <div className="input-group">
          <span className="input-group-text">Password:</span>
          <input type="password" className="form-control" />
        </div>
        <Button className="btn-success">Submit</Button>
      </form>
    </div>
  );
}
export default EditProfilePage;
