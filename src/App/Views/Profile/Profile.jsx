import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center px-4">
      <div className="relative bg-white rounded-xl shadow-md p-8 pt-16 w-full max-w-2xl text-center">
        <div className="absolute -top-16 left-1/2 -translate-x-1/2">
          <img
            src="{}"
            alt=""
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
            style={{boxShadow: "0 0 15px #ea4d88"}}
          />
        </div>
        <h2 className="mt-4 text-2xl font-semibold text-secondary">firstName LastName</h2>
        <p className="text-gray-600">email</p>
        <div className="flex items-center justify-center mt-2 space-x-2 text-sm font-medium text-gray-800">
          <span>city state</span>
        </div>
        <div className="mt-6 flex justify-around text-gray-800 font-semibold">
          <div>
            <p className="text-lg">birthDate</p>
            <p className="text-sm">Cumpleaños</p>
          </div>
          <div>
            <p className="text-lg">age</p>
            <p className="text-sm">Edad</p>
          </div>
          <div>
            <p className="text-lg">phone</p>
            <p className="text-sm">Teléfono</p>
          </div>
        </div>
        <div className="mt-6 text-sm text-gray-600 space-y-1 text-left">
          <p><strong>Información personal 1:</strong>username</p>
          <p><strong>Información personal 2:</strong>gender</p>
          <p><strong>Información personal 3:</strong>name</p>
        </div>
        <button
          onClick={handleLogout}
          className="mt-6 bg-secondary text-white px-6 py-2 rounded hover:bg-pink-600 transition"
        >Cerrar sesión</button>
      </div>
    </div>
  )
}

export default Profile;
