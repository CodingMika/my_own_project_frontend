import "./add_list.css";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";

function AddList({ userId, page, limit }) {
  const [list, setList] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    fetch("/api/adds", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: userId, page: page, limit: limit }),
    })
      .then(async (response) => {
        const data = await response.json();
        console.log(data);
        if (!response.ok) {
          return Promise.reject(data.error ?? response.status);
        }
        setList(data);
      })
      .catch(setErr);
  }, [userId, page, limit]);

  if (err != null) {
    return <div>{JSON.stringify(err)}</div>;
  }
  if (list == null) {
    return <div>Loading...</div>;
  }
  if (list.length == 0) {
    return <div>Nothing is found.</div>;
  }

  return (
    <div>
      {list.map((add) => {
        return (
          <Button variant="link" key={add._id} href={"/add/" + add._id}>
            <img key="image" src={add.image} className="image" />
            <h4 key="title">Title: {add.title}</h4>
            <h4 key="city">City: {add.city}</h4>
          </Button>
        );
      })}
    </div>
  );
}

export default AddList;
