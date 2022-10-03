import "./edit_profile.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function EditProfilePage(props) {
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies(["user"]);
  const [image, setImage] = useState({ value: "", error: null });
  const [name, setName] = useState({ value: "", error: null });
  const [city, setCity] = useState({ value: "", error: null });
  const [phoneNumber, setPhoneNumber] = useState({ value: "", error: null });
  const [email, setEmail] = useState({ value: "", error: null });
  const [otherErrors, setOtherErrors] = useState("");
  const user = cookies.user;

  const elements = [];
  console.log(user);
  if (user != null) {
    elements.push(
      <h4 key="image">Picture: {user.image}</h4>,
      <h4 key="name">Name: {user.name}</h4>,
      <h4 key="city">City: {user.city}</h4>,
      <h4 key="phoneNumber">Phone number: {user.phoneNumber}</h4>,
      <h4 key="email">Email: {user.email}</h4>
    );
  }

  const handleImageChange = (event) => {
    console.log(event.target.files[0]);
    setImage({ value: event.target.files[0] });
  };
  const handleNameChange = (event) => {
    setName({ value: event.target.value.trim() });
  };
  const handleCityChange = (event) => {
    setCity({ value: event.target.value.trim() });
  };
  const handlePhoneNumberChange = (event) => {
    setPhoneNumber({ value: event.target.value.trim() });
  };
  const handleEmailChange = (event) => {
    setEmail({ value: event.target.value.trim() });
  };

  const handleValidation = (event) => {
    event.preventDefault();

    setOtherErrors("");
    let isValid = true;
    event.preventDefault();
    if (name.value.length < 1 || name.value.length > 10) {
      isValid = false;
      setName({
        value: name.value,
        error: "Your name should be min 1 letter and max 10 letters.",
      });
    }
    if (email.value == "") {
      isValid = false;
      setEmail({
        value: email.value,
        error: "Please, provide your email.",
      });
    }

    // if (true) {
    //   submitForm(
    //     image.value,
    //     name.value,
    //     city.value,
    //     phoneNumber.value,
    //     email.value,
    //     (user) => {
    //       setCookies("user", user);
    //       navigate("/profile");
    //     },
    //     (errors) => setOtherErrors(JSON.stringify(errors))
    //   );
    // }

    event.currentTarget.submit();
  };

  return (
    <div className="profile">
      <h4>Edit my profile:</h4>
      <form
        method="POST"
        action="/api/edit-profile"
        enctype="multipart/form-data"
        onSubmit={handleValidation}
      >
        <div className="input-group">
          <span className="input-group-text">Profile picture:</span>
          <input
            type="file"
            id="add-image"
            onChange={handleImageChange}
            name="image"
          />
        </div>
        <div className="input-group">
          <span className="input-group-text">Name: {user.name}</span>
          <input
            type="text"
            className="form-control"
            onChange={handleNameChange}
            name="name"
          />
        </div>
        <div className="input-group">
          <span className="input-group-text">City: {user.city}</span>
          <input
            type="search"
            className="form-control"
            onChange={handleCityChange}
            name="city"
          />
        </div>
        <div className="input-group">
          <span className="input-group-text">
            Phone Number: {user.phoneNumber}
          </span>
          <input
            type="tel"
            className="form-control"
            onChange={handlePhoneNumberChange}
            name="phoneNumber"
          />
        </div>
        <div className="input-group">
          <span className="input-group-text">Email: {user.email}</span>
          <input
            type="email"
            className="form-control"
            onChange={handleEmailChange}
            name="email"
          />
        </div>
        <button variant="success" className="submitbtn">
          Submit
        </button>
      </form>
    </div>
  );
}

function submitForm(image, name, city, phoneNumber, email, onSuccess, onError) {
  const formData = new FormData();
  formData.append("file", image);
  formData.append("body", {
    name: name,
    city: city,
    phoneNumber: phoneNumber,
    email: email,
  });

  const requestOptions = {
    method: "POST",
    body: formData,
  };
  fetch("/api/edit-profile", requestOptions)
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

export default EditProfilePage;
