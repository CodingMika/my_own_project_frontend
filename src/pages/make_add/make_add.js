import "./make_add.css";
import { useState } from "react";
import { Button } from "react-bootstrap";

function MakeAddPage(props) {
  const [image, setImage] = useState();
  const [title, setTitle] = useState();
  const [city, setCity] = useState();
  const [description, setDescription] = useState();

  const handleImageChange = (event) => {
    setImage();
  };
  const handleTitleChange = (event) => {
    setTitle();
  };
  const handleCityChange = (event) => {
    setCity();
  };
  const handleDescriptionChange = (event) => {
    setDescription();
  };

  return (
    <div className="make-add">
      <h4>Make your add:</h4>
      <form>
        <div className="input-group">
          <span className="input-group-text">Picture:</span>
          <Button type="image" name="avatar" className="btn-success">
            Choose a picture
          </Button>
          <Button className="btn-success">Upload</Button>
        </div>
        <div className="input-group">
          <span className="input-group-text">Title:</span>
          <input type="text" className="form-control" />
        </div>

        <div className="input-group">
          <span className="input-group-text">City:</span>
          <input type="text" className="form-control" />
        </div>

        <div className="input-group">
          <span className="input-group-text">Description:</span>
          <input type="text" className="form-control" />
        </div>

        <Button className="btn-success">Submit</Button>
      </form>
    </div>
  );
}

export default MakeAddPage;
