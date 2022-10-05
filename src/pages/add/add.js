import "./add.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function AddPage(props) {
  const params = useParams();
  const navigate = useNavigate();
  const [add, setAdd] = useState(null);
  const [err, setErr] = useState(null);
  const addId = params.id;

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
  if (err != null) {
    return <div>{err}</div>;
  }
  if (add == null) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <img key="image" src={add.image} className="image" />
      <h4 key="userName">
        Owner:{" "}
        <Button variant="link" href={"/adds/" + add.userId}>
          {add.user.name}
        </Button>
      </h4>
      <h4 key="title">Title: {add.title}</h4>
      <h4 key="city">City: {add.city}</h4>
      <h4 key="description">Description: {add.description}</h4>
    </div>
  );
}

export default AddPage;
