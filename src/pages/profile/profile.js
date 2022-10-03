import "./profile.css";
import { Button } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";

function ProfilePage(props) {
  const [cookies, setCookies, removeCookie] = useCookies(["user"]);
  const [user, setUser] = useState(cookies.user);
  useEffect(() => {
    fetch("/api/profile")
      .then(async (response) => {
        const data = await response.json();
        console.log(data);
        if (!response.ok) {
          return Promise.reject(data.error ?? response.status);
        }
        setCookies("user", data);
        setUser(data);
      })
      .catch((errors) => console.log(JSON.stringify(errors)));
  }, []);

  const elements = [];
  console.log(user);
  if (user != null) {
    elements.push(
      <img src={user.image} className="image" />,
      <h4 key="name" className="data">
        Name: {user.name}
      </h4>,
      <h4 key="city" className="data">
        City: {user.city ?? "not selected"}
      </h4>,
      <h4 key="phoneNumber" className="data">
        Phone number: {user.phoneNumber}
      </h4>,
      <h4 key="email" className="data">
        Email: {user.email}
      </h4>
    );
  }
  return (
    <div>
      {elements}
      <Button href="/edit-profile" variant="success" className="button1">
        edit
      </Button>
      <Button href="/delete-account" variant="danger" className="button1">
        delete
      </Button>
    </div>
  );
}
export default ProfilePage;
