import "./profile.css";
import { Button } from "react-bootstrap";

function ProfilePage(image, name, city, phoneNumber, email) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name,
      city: city,
      phoneNumber: phoneNumber,
      email: email,
    }),
  };
  fetch("/api/profile", requestOptions).then(async (response) => {
    const data = await response.json();
    console.log(data);
    if (!response.ok) {
      return Promise.reject(data.error ?? response.status);
    }
  });

  return (
    <div className="account">
      <h4>Your profile:</h4>

      <dl>
        <dt>My profile picture:</dt>
        <dd></dd>
        <dt>My name:</dt>
        <dd></dd>
        <dt>My city:</dt>
        <dd></dd>
        <dt>My phone number:</dt>
        <dd></dd>
        <dt>My email:</dt>
        <dd></dd>
      </dl>
      <Button href="/edit-profile" className="btn-success">
        Edit my profile.
      </Button>
      <br />
      <Button href="/delete-account" className="btn-danger">
        Delete my account.
      </Button>
    </div>
  );
}

export default ProfilePage;
