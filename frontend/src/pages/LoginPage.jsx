/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from "react-hook-form";
import { useNavigate, useOutletContext } from "react-router-dom";
import axios from "axios";

export default function LoginPage() {
  const { register, handleSubmit } = useForm();

  const { setUser } = useOutletContext();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/auth`, data)
      .then((res) => setUser(res.data));
    navigate("/");
  };
  return (
    <div className="bg-color4 h-screen text-center p-8">
      <h1>Se connecter</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <input type="text" name="email" {...register("email")} />
        <input type="password" name="password" {...register("password")} />
        <button type="submit">Valider</button>
      </form>
    </div>
  );
}
