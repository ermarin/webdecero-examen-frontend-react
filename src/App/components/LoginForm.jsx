import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const { login } = useAuth();
  const navigate = useNavigate();
  const { error } = useSelector(state => state.auth);

  const onSubmit = async (data) => {
    const result = await login(data);
    if (result.success) navigate("/profile");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-sm space-y-4"
    >
      <input
        type="text"
        placeholder="Usuario"
        {...register("username")}
        className="w-full bg-[#2c2f36] text-white placeholder-gray-400 px-4 py-3 rounded focus:outline-none"
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        {...register("password")}
        className="w-full bg-[#2c2f36] text-white placeholder-gray-400 px-4 py-3 rounded focus:outline-none"
        required
      />
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      <button
        type="submit"
        className="bg-secondary hover:bg-pink-600 text-white py-3 px-4 rounded w-full font-semibold uppercase tracking-wider"
      >Autenticar</button>
    </form>
  );
};

export default LoginForm;
