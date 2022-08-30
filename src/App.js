import "./App.css";
import HomePage from "./pages/home/home";
import { Routes, Route } from "react-router-dom";
import Header from "./layouts/header/header";
import Footer from "./layouts/footer/footer";
import SignInPage from "./pages/sign_in/sign_in";
import SignUpPage from "./pages/sign_up/sign_up";
import AccountPage from "./pages/account/account";
import Information from "./pages/information/information";
import SocialMedia from "./pages/social_media/social_media";
import Contacts from "./pages/contacts/contacts";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
      <Footer />
      <Routes>
        <Route path="/information" element={<Information />} />
        <Route path="/social-media" element={<SocialMedia />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
