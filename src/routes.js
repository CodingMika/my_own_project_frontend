import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/home";
import LoginPage from "./pages/login/login";
import RegistrationPage from "./pages/registration/registration";
import ProfilePage from "./pages/profile/profile";
import EditProfilePage from "./pages/edit_profile/edit_profile";
import DeleteAccount from "./pages/delete_account/delete_account";
import Information from "./pages/information/information";
import SocialMedia from "./pages/social_media/social_media";
import Contacts from "./pages/contacts/contacts";
import RecoverPassword from "./pages/recover_password/recover_password";
import AddPage from "./pages/add/add";
import AddsPage from "./pages/adds/adds";
import MakeAddPage from "./pages/make_add/make_add";

function MakeRoutes(props) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registation" element={<RegistrationPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/edit-profile" element={<EditProfilePage />} />
        <Route path="/delete-account" element={<DeleteAccount />} />
        <Route path="/information" element={<Information />} />
        <Route path="/social-media" element={<SocialMedia />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/recover-password" element={<RecoverPassword />} />
        <Route path="/add/:id" element={<AddPage />} />
        <Route path="/adds/:id" element={<AddsPage />} />
        <Route path="/make-add" element={<MakeAddPage />} />
      </Routes>
    </div>
  );
}

export default MakeRoutes;
