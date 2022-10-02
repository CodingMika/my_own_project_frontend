import "./edit_profile.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function EditProfilePage(props) {
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies(["user"]);
  const [picture, setPicture] = useState({ value: "", error: null });
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
      <h4 key="picture">Picture: {user.picture}</h4>,
      <h4 key="name">Name: {user.name}</h4>,
      <h4 key="city">City: {user.city}</h4>,
      <h4 key="phoneNumber">Phone number: {user.phoneNumber}</h4>,
      <h4 key="email">Email: {user.email}</h4>
    );
  }
  const handlePictureChange = (event) => {
    setPicture({ value: event.target.value.trim() });
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

    if (isValid) {
      submitForm(
        picture.value,
        name.value,
        city.value,
        phoneNumber.value,
        email.value,
        (user) => {
          setCookies("user", user);
          navigate("/profile");
        },
        (errors) => setOtherErrors(JSON.stringify(errors))
      );
    }
  };

  return (
    <div className="profile">
      <h4>Edit my profile:</h4>
      <form>
        <div className="input-group">
          <span className="input-group-text">
            Profile picture:{user.picture}
          </span>
          <input type="file" id="add-image" />
        </div>
        <div className="input-group">
          <span className="input-group-text">Name: {user.name}</span>
          <input
            type="text"
            className="form-control"
            onChange={handleNameChange}
          />
        </div>
        <div className="input-group">
          <span className="input-group-text">City: {user.city}</span>
          <input
            type="search"
            className="form-control"
            onChange={handleCityChange}
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
          />
        </div>
        <div className="input-group">
          <span className="input-group-text">Email: {user.email}</span>
          <input
            type="email"
            className="form-control"
            onChange={handleEmailChange}
          />
        </div>
        <Button variant="success" onClick={handleValidation}>
          Submit
        </Button>
      </form>
    </div>
  );
}

function submitForm(
  picture,
  name,
  city,
  phoneNumber,
  email,
  onSuccess,
  onError
) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      picture: picture,
      name: name,
      city: city,
      phoneNumber: phoneNumber,
      email: email,
    }),
  };
  fetch("/api/edit_profile", requestOptions)
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
