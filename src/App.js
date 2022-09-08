import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import MakeRoutes from "./routes";

function App() {
  return (
    <div className="App">
      <Header />
      <MakeRoutes />
      <Footer />
    </div>
  );
}

export default App;
