import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import MakeRoutes from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <MakeRoutes />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
