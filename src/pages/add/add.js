import "./app.css";
import { Button } from "react-bootstrap";

function AppPage(props) {

  const elements = [
      <h4 key="image">Picture: {add.image}</h4>,
      <h4 key="title">Title: {add.title}</h4>,
      <h4 key="city">City: {add.city}</h4>,
      <h4 key="description">Description: {add.description}</h4>,
];
  if (user._id = add._id) {
    elements.push(
      <div>
      <Button href="edit-add" variant="success">
        edit
      </Button>
      <br />
      <Button href="delete-add" variant="success">
        delete
      </Button>
    </div>
);
    } else {
      <Button key="btn5" href="" variant="success">
        Log in or register to write a message to the owner.
      </Button>,
    }

      
    
  
  return (
    <div>
      {elements}
    </div>
  );
}

export default AppPage;
