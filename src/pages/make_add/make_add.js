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
          <input type="file" id="add-image" />
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

        <Button variant="success">Submit</Button>
      </form>
    </div>
  );
}

export default MakeAddPage;
