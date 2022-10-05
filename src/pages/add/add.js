import "./add.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useCookies } from "react-cookie";

function AddPage(props) {
  const params = useParams();
  const navigate = useNavigate();
  const [add, setAdd] = useState(null);
  const [err, setErr] = useState(null);
  const addId = params.id;
  const [cookies] = useCookies(["user"]);
  const user = cookies.user;

  useEffect(() => {
    fetch("/api/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ addId: addId }),
    })
      .then(async (response) => {
        const data = await response.json();
        console.log(data);
        if (!response.ok) {
          return Promise.reject(data.error ?? response.status);
        }
        setAdd(data);
      })
      .catch(setErr);
  }, []);

  function deleteAdd() {
    fetch("/api/delete-add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ addId: addId }),
    })
      .then(async (response) => {
        let data = await response.json();
        console.log(data);
        navigate("/");
      })
      .catch(setErr);
  }

  if (err != null) {
    return <div>{JSON.stringify(err)}</div>;
  }
  if (add == null) {
    return <div>Loading...</div>;
  }

  let controls = [];
  if (user != null && user._id == add.userId) {
    controls.push(
      <Button key="editButton" variant="success">
        edit
      </Button>,
      <Button key="deleteButton" onClick={(e) => deleteAdd()} variant="danger">
        delete
      </Button>
    );
  }

  return (
    <div>
      <img key="image" src={add.image} className="add-image" />
      <h4 key="userName">
        Owner:{" "}
        <Button
          variant="link"
          href={"/adds/" + add.userId}
          className="owner-name"
        >
          {add.user.name} (see all person's adds)
        </Button>
      </h4>
      <h4 key="title">Title: {add.title}</h4>
      <h4 key="city">City: {add.city}</h4>
      <h4 key="description">Description: {add.description}</h4>
      {controls}
    </div>
  );
}

export default AddPage;
