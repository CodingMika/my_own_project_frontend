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
    event.preventDefault();
    if (name.value.length < 1 || name.value.length > 10) {
      setName({
        value: name.value,
        error: "Your name should be min 1 letter and max 10 letters.",
      });
    }
    if (email.value == "") {
      setEmail({
        value: email.value,
        error: "Please provide your email.",
      });
    }
    if (password.value.length < 6 || password.value.length > 12) {
      setPassword({
        value: password.value,
        error: "Please enter a password that contains from 6 to 12 characters.",
      });
    } else {
      const regex = /(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/;
      if (!regex.test(password.value)) {
        setPassword({
          value: password.value,
          error:
            "Please enter a password that contains numbers, uppercase and lowercase letters and special characters.",
        });
      }
    }
    if (password.value != confirmPassword.value) {
      setConfirmPassword({
        value: confirmPassword.value,
        error: "These passwords must be the same.",
      });
    }
    return false;
  };

  return (
    <div className="registration">
      Create your account:
      <form onSubmit={handleValidation}>
        <div>
          <lable>Name: </lable>
          <input type="text" onChange={handleNameChange} />
          {name.error}
        </div>
        <div>
          <lable>Email: </lable>
          <input type="email" onChange={handleEmailChange} />
          {email.error}
        </div>
        <div>
          <lable>Password: </lable>
          <input type="password" onChange={handlePasswordChange} />
          {password.error}
        </div>
        <div>
          <lable>Confirm password: </lable>
          <input type="password" onChange={handleConfirmPasswordChange} />
          {confirmPassword.error}
        </div>

        <input type="submit" />
      </form>
    </div>
  );
}

export default RegistrationPage;
