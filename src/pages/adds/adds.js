import { useParams } from "react-router-dom";
import AddList from "../../components/add_list/add_list";
import "./adds.css";

function AddsPage(props) {
  const params = useParams();

  return (
    <div>
      <AddList userId={params.id} />
    </div>
  );
}

export default AddsPage;
