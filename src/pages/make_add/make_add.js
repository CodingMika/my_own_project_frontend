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

    if (true) {
      submitForm(
        image.value,
        title.value,
        city.value,
        description.value,
        () => {
          navigate("/add");
        },
        (errors) => setOtherErrors(JSON.stringify(errors))
      );
    }
  };

  return (
    <div className="make-add">
      <h4>Make your add:</h4>
      <form>
        <div className="input-group">
          <span className="input-group-text">Picture:</span>
          <input
            type="file"
            id="add-image"
            onChange={handleImageChange}
            required
          />
        </div>
        <div className="input-group">
          <span className="input-group-text">Title:</span>
          <input
            type="text"
            className="form-control"
            onChange={handleTitleChange}
            required
          />
        </div>

        <div className="input-group">
          <span className="input-group-text">City:</span>
          <input
            type="text"
            className="form-control"
            onChange={handleCityChange}
            required
          />
        </div>

        <div className="input-group">
          <span className="input-group-text">Description:</span>
          <input
            type="text"
            className="form-control"
            onChange={handleDescriptionChange}
            required
          />
        </div>

        <Button variant="success">Submit</Button>
      </form>
    </div>
  );
}

function submitForm(image, title, city, description, onSuccess, onError) {
  const formData = new FormData();
  formData.append("file", image);
  formData.append("body", {
    title: title,
    city: city,
    description: description,
  });

  const requestOptions = {
    method: "POST",
    body: formData,
  };
  fetch("/api/make-add", requestOptions)
    .then(async (response) => {
      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        return Promise.reject(data.error ?? response.status);
      }
      onSuccess(data);
    })
    .catch(onError);
}

export default MakeAddPage;
