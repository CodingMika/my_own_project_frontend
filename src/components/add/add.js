import "./add.css";

const Add = ({ name, category }) => (
  <div className="add-container">
    <div>
      <span className="add-label">Name:</span>
      {name}
    </div>
    <div>
      <span className="add-label">Category:</span>
      {category}
    </div>
  </div>
);

export default Add;
