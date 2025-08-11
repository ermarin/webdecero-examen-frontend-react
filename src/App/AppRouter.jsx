import {  BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Views/Login/Login";
import Profile from "./Views/Profile/Profile";


const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;