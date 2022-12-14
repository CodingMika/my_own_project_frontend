import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import MakeRoutes from "./routes";

function App() {
  return (
    <div>
      <div className="app">
        <Header />
        <MakeRoutes />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
