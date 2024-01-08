/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function RegisterPage() {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user`, data);
    navigate("/login");
  };

  return (
    <div className="bg-color4 h-screen text-center p-8">
      <h1>Création de compte</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <input type="text" name="email" {...register("email")} />
        <input type="password" name="password" {...register("password")} />
        <input
          type="password"
          name="confirmPassword"
          {...register("confirmPassword")}
        />
        <button type="submit">Valider</button>
      </form>
    </div>
  );
}
