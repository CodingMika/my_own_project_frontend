import { Button } from "react-bootstrap";
import "./make_add.css";

function MakeAddPage(props) {
  return (
    <div className="make-add">
      <form>
        <div class="input-group-lg">
          <span class="input-group-text" id="inputGroupFileAddon01">
            Upload the picture:
          </span>
          <div class="custom-file">
            <input
              type="file"
              class="custom-file-input"
              id="inputGroupFile01"
              aria-describedby="inputGroupFileAddon01"
            />
          </div>
        </div>
        <div className="input-group mb-3 input-group-lg">
          <span className="input-group-text">Title:</span>
          <input type="text" className="form-control" />
        </div>
        <div className="input-group mb-3 input-group-lg">
          <span className="input-group-text">Description:</span>
          <input type="text" className="form-control" />
        </div>
        <Button className="btn-success">Submit</Button>
      </form>
    </div>
  );
}

export default MakeAddPage;
