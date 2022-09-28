import { useState } from "react";
import "./registration.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";
import UserService from "../../services/user/user_service";

function RegistrationPage(props) {
  const navigate = useNavigate();
  const [name, setName] = useState({ value: "", error: null }); //{value, error}
  const [email, setEmail] = useState({ value: "", error: null });
  const [password, setPassword] = useState({ value: "", error: null });
  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    error: null,
  });
  const [otherErrors, setOtherErrors] = useState("");

  const handleNameChange = (event) => {
    setName({ value: event.target.value.trim() });
  };
  const handleEmailChange = (event) => {
    setEmail({ value: event.target.value.trim() });
  };
  const handlePasswordChange = (event) => {
    setPassword({ value: event.target.value.trim() });
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword({ value: event.target.value.trim() });
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
    if (password.value.length < 6 || password.value.length > 12) {
      isValid = false;
      setPassword({
        value: password.value,
        error: "Please enter a password that contains from 6 to 12 characters.",
      });
    } else {
      const regex = /(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/;
      if (!regex.test(password.value)) {
        isValid = false;
        setPassword({
          value: password.value,
          error:
            "Please, enter a password that contains numbers, uppercase and lowercase letters, special characters.",
        });
      }
    }
    if (password.value != confirmPassword.value) {
      isValid = false;
      setConfirmPassword({
        value: confirmPassword.value,
        error: "These passwords must be the same.",
      });
    }
    if (isValid) {
      submitForm(
        name.value,
        email.value,
        password.value,
        () => navigate("/"),
        (errors) => setOtherErrors(JSON.stringify(errors))
      );
    }
  };

  return (
    <div className="registration">
      <h4>Create your account:</h4>
      <form>
        <div className="input-group">
          <span class="input-group-text">Name:</span>
          <input
            type="name"
            className="form-control"
            onChange={handleNameChange}
          />
          {name.error}
        </div>
        <div className="input-group">
          <span class="input-group-text">Email:</span>
          <input
            type="email"
            className="form-control"
            onChange={handleEmailChange}
          />
          {email.error}
        </div>
        <div className="input-group">
          <span class="input-group-text">Password:</span>
          <input
            type="password"
            className="form-control"
            onChange={handlePasswordChange}
          />
          {password.error}
        </div>
        <div className="input-group">
          <span class="input-group-text">Confirm password:</span>
          <input
            type="password"
            className="form-control"
            onChange={handleConfirmPasswordChange}
          />
          {confirmPassword.error}
        </div>
        <Button className="btn-success" onClick={handleValidation}>
          Submit
        </Button>
        <div>{otherErrors}</div>
      </form>
    </div>
  );
}

function submitForm(name, email, password, onSuccess, onError) {
  password = CryptoJS.SHA256(password).toString();

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
    }),
  };
  fetch("/api/registration", requestOptions)
    .then(async (response) => {
      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        return Promise.reject(data.error ?? response.status);
      }
      UserService.setUser(data);
      onSuccess();
    })
    .catch(onError);
}

export default RegistrationPage;
