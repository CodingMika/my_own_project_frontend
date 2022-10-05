import "./add_list.css";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";

function AddList({ userId, page, limit, canPagination = false }) {
  const [list, setList] = useState(null);
  const [err, setErr] = useState(null);

  const [pagination, setPagination] = useState({
    page: page ?? 1,
    canLoadMore: true,
  });

  function load() {
    fetch("/api/adds", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: userId,
        page: pagination.page,
        limit: limit,
      }),
    })
      .then(async (response) => {
        const data = await response.json();
        console.log(data);
        if (!response.ok) {
          return Promise.reject(data.error ?? response.status);
        }
        let newList = list ?? [];
        if (data.length == 0) {
          setPagination({ page: pagination.page, canLoadMore: false });
        } else {
          newList.push(...data);
          setPagination({ page: pagination.page + 1, canLoadMore: true });
        }
        setList(newList);
      })
      .catch(setErr);
  }

  useEffect(load, [userId, page, limit]);

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
    <div className="add-list-container">
      <div className="add-list">
        {list.map((add) => {
          return (
            <Button
              variant="link"
              key={add._id}
              href={"/add/" + add._id}
              className="add-list-item"
            >
              <img key="image" src={add.image} className="add-list-image" />
              <div className="btn" key="title">
                Title: {add.title}
              </div>
              <div className="btn" key="city">
                City: {add.city}
              </div>
            </Button>
          );
        })}
      </div>
      {pagination.canLoadMore ? (
        <Button onClick={(e) => load()} variant="success">
          Load more adds
        </Button>
      ) : null}
    </div>
  );
}

export default AddList;
