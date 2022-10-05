import "./make_add.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function MakeAddPage(props) {
  const navigate = useNavigate();
  const [image, setImage] = useState();
  const [title, setTitle] = useState();
  const [city, setCity] = useState();
  const [description, setDescription] = useState();
  const [otherErrors, setOtherErrors] = useState("");

  const handleImageChange = (event) => {
    setImage({ value: event.target.files[0] });
  };
  const handleTitleChange = (event) => {
    setTitle({ value: event.target.value.trim() });
  };
  const handleCityChange = (event) => {
    setCity({ value: event.target.value.trim() });
  };
  const handleDescriptionChange = (event) => {
    setDescription({ value: event.target.value.trim() });
  };

  const handleValidation = (event) => {
    setOtherErrors("");
    let isValid = true;
    event.preventDefault();
    if (title.value.length < 1 || title.value.length > 20) {
      isValid = false;
      setTitle({
        value: title.value,
        error: "The title should be min 1 letter and max 20 letters.",
      });
    }
    if (city.value == "") {
      isValid = false;
      setCity({
        value: city.value,
        error: "Please, write the city.",
      });
    }

    if (image.value == null) {
      isValid = false;
      setImage({
        value: image.value,
        error: "Please, provide a picture of your item.",
      });
    }

    event.currentTarget.submit();
  };

  return (
    <div className="make-add">
      <h4>Make your add:</h4>
      <form
        method="POST"
        action="/api/make-add"
        enctype="multipart/form-data"
        onSubmit={handleValidation}
      >
        <div className="input-group">
          <span className="input-group-text">Picture:</span>
          <input
            type="file"
            id="add-image"
            onChange={handleImageChange}
            name="image"
          />
        </div>
        <div className="input-group">
          <span className="input-group-text">Title:</span>
          <input
            type="text"
            className="form-control"
            onChange={handleTitleChange}
            name="title"
          />
        </div>

        <div className="input-group">
          <span className="input-group-text">City:</span>
          <input
            type="text"
            className="form-control"
            onChange={handleCityChange}
            name="city"
          />
        </div>

        <div className="input-group">
          <span className="input-group-text">Description:</span>
          <input
            type="text"
            className="form-control"
            onChange={handleDescriptionChange}
            name="description"
          />
        </div>

        <button variant="success" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
}

export default MakeAddPage;
