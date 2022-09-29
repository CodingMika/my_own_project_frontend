import "./login.css";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";
import { useCookies } from "react-cookie";

function LoginPage(props) {
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies(["user"]);
  const [email, setEmail] = useState({ value: "", error: null });
  const [password, setPassword] = useState({ value: "", error: null });
  const [otherErrors, setOtherErrors] = useState("");

  const handleEmailChange = (event) => {
    setEmail({ value: event.target.value.trim() });
  };
  const handlePasswordChange = (event) => {
    setPassword({ value: event.target.value.trim() });
  };

  const handleValidation = (event) => {
    setOtherErrors("");
    let isValid = true;
    event.preventDefault();
    if (email.value == "") {
      isValid = false;
      setEmail({
        value: email.value,
        error: "Please, write your email.",
      });
    }
    if (password.value == "") {
      isValid = false;
      setPassword({
        value: password.value,
        error: "Please, write your password.",
      });
    }
    if (isValid) {
      submitForm(
        email.value,
        password.value,
        (user) => {
          setCookies("user", user);
          navigate("/");
        },
        (errors) => setOtherErrors(JSON.stringify(errors))
      );
    }
  };

  return (
    <div className="login">
      <h4>Log in:</h4>
      <form>
        <div className="input-group">
          <span className="input-group-text">Email:</span>
          <input
            type="email"
            className="form-control"
            onChange={handleEmailChange}
          />
          {email.error}
        </div>
        <div className="input-group">
          <span className="input-group-text">Password:</span>
          <input
            type="password"
            className="form-control"
            onChange={handlePasswordChange}
          />
          {password.error}
        </div>
        <Button className="btn-success" onClick={handleValidation}>
          Submit
        </Button>
        <div>{otherErrors}</div>
      </form>
      <Button href="/recover-password" size="sm" className="btn-warning">
        I forgot my password.
      </Button>
    </div>
  );
}

function submitForm(email, password, onSuccess, onError) {
  password = CryptoJS.SHA256(password).toString();
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  };
  fetch("/api/login", requestOptions)
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

export default LoginPage;
