import { useState } from "react";
import "./registration.css";

function RegistrationPage(props) {
  const [name, setName] = useState({ value: "", error: null }); //{value, error}
  const [email, setEmail] = useState({ value: "", error: null });
  const [password, setPassword] = useState({ value: "", error: null });
  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    error: null,
  });

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
      submitForm(name.value, email.value, password.value);
    }
  };

  return (
    <div className="registration">
      <br />
      Create your account:
      <form onSubmit={handleValidation}>
        <div>
          <br />
          <lable>Name: </lable>
          <input name="name" type="text" onChange={handleNameChange} />
          {name.error}
        </div>
        <div>
          <br />
          <lable>Email: </lable>
          <input name="email" type="email" onChange={handleEmailChange} />
          {email.error}
        </div>
        <div>
          <br />
          <lable>Password: </lable>
          <input
            name="password"
            type="password"
            onChange={handlePasswordChange}
          />
          {password.error}
        </div>
        <div>
          <br />
          <lable>Confirm password: </lable>
          <input type="password" onChange={handleConfirmPasswordChange} />
          {confirmPassword.error}
        </div>
        <br />
        <input type="submit" className="submit" />
      </form>
    </div>
  );
}

function submitForm(name, email, password) {
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
      if (!response.ok) {
        console.log(response);
        return Promise.reject(response.status);
      }
      console.log("Success!");
    })
    .catch((error) => {
      console.error("Error!", error);
    });
}

export default RegistrationPage;
