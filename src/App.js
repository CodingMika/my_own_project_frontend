import "./App.css";
import HomePage from "./pages/home/home";
import { Routes, Route } from "react-router-dom";
import Header from "./layouts/header/header";
import SignInPage from "./pages/sign_in/sign_in";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
    </div>
  );
}

export default App;