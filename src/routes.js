import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/home";
import LoginPage from "./pages/login/login";
import RegistrationPage from "./pages/registration/registration";
import AccountPage from "./pages/account/account";
import EditAccount from "./pages/edit_account/edit_account";
import DeleteAccount from "./pages/delete_account/delete_account";
import Information from "./pages/information/information";
import SocialMedia from "./pages/social_media/social_media";
import Contacts from "./pages/contacts/contacts";
import RecoverPassword from "./pages/recover_password/recover_password";

function MakeRoutes(props) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registation" element={<RegistrationPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/edit-account" element={<EditAccount />} />
        <Route path="/delete-account" element={<DeleteAccount />} />
        <Route path="/information" element={<Information />} />
        <Route path="/social-media" element={<SocialMedia />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/recover-password" element={<RecoverPassword />} />
      </Routes>
    </div>
  );
}

export default MakeRoutes;
