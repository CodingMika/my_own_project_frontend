import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/home";
import SignInPage from "./pages/log_in/log_in";
import SignUpPage from "./pages/registration/registration";
import AccountPage from "./pages/account/account";
import Information from "./pages/information/information";
import SocialMedia from "./pages/social_media/social_media";
import Contacts from "./pages/contacts/contacts";
import RecoverPassword from "./pages/recover_password/recover_password";

function MakeRoutes(props) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/information" element={<Information />} />
        <Route path="/social-media" element={<SocialMedia />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/recover-password" element={<RecoverPassword />} />
      </Routes>
    </div>
  );
}

export default MakeRoutes;
