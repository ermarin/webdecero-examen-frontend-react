import { Routes, Route } from "react-router-dom";
import Login from "./Views/Login/Login";
import Profile from "./Views/Profile/Profile";
import ProtectedRoute from "./router/ProtectedRoute";
import SessionChecker from "./components/SessionChecker";

const AppRouter = () => {
  return (
    <>
      <SessionChecker />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Login />} />
      </Routes>
    </>
  );
};

export default AppRouter;
