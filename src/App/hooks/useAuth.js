import { useDispatch } from "react-redux";
import { loginSuccess, loginFailure } from "../redux/authSlice";

export const useAuth = () => {
  const dispatch = useDispatch();

  const login = async ({ username, password }) => {
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        dispatch(loginFailure(data.message));
        return { success: false, message: data.message };
      }

      const token = data.accessToken;

      const profileResponse = await fetch("https://dummyjson.com/auth/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
      });

      const profileData = await profileResponse.json();

      if (!profileResponse.ok) {
        dispatch(loginFailure(profileData.message));
        return { success: false, message: profileData.message };
      }
      
      const fullUserData = { ...profileData, token };
      localStorage.setItem("user", JSON.stringify(fullUserData));
      dispatch(loginSuccess(fullUserData));
      return { success: true, user: fullUserData };
    } catch (error) {
      dispatch(loginFailure("Error de red"));
      return { success: false, message: "Error de red o del servidor" };
    }
  };

  return { login };
};
