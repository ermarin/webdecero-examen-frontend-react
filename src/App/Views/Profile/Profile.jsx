import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";

const Profile = () => {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("user");
    navigate("/");
  };

  if (!user) return <div className="text-white">Cargando datos del usuario...</div>

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center px-4">
      <div className="relative bg-white rounded-xl shadow-md p-8 pt-16 w-full max-w-2xl text-center">
        <div className="absolute -top-16 left-1/2 -translate-x-1/2">
          <img
            src={user?.image || "/fallback.png"}
            alt={user?.firstName || "Perfil"}
            className="w-32 h-32 rounded-full border-4 border-secondary shadow-lg bg-primary"
            style={{boxShadow: "0 0 15px #ea4d88"}}
          />
        </div>
        <h2 className="mt-4 text-2xl font-semibold text-secondary">{user?.firstName} {user?.lastName}</h2>
        <p className="text-gray-600">{user?.email}</p>
        <div className="flex items-center justify-center mt-2 space-x-2 text-sm font-medium text-gray-800">
          <FaMapMarkerAlt className="text-secondary" />
          <span>{user?.address?.city} - {user?.address?.state}</span>
        </div>
        <div className="mt-6 flex justify-around text-gray-800 font-semibold">
          <div>
            <p className="text-lg">{user?.birthDate}</p>
            <p className="text-sm">Cumpleaños</p>
          </div>
          <div>
            <p className="text-lg">{user?.age}</p>
            <p className="text-sm">Edad</p>
          </div>
          <div>
            <p className="text-lg">{user?.phone}</p>
            <p className="text-sm">Teléfono</p>
          </div>
        </div>
        <div className="mt-6 text-sm text-gray-600 space-y-1 text-left">
          <p><strong>Información personal 1:</strong> {user?.username}</p>
          <p><strong>Información personal 2:</strong> {user?.gender}</p>
          <p><strong>Información personal 3:</strong> {user?.company?.name}</p>
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
