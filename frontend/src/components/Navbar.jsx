import { NavLink } from "react-router-dom";
import logo from "../assets/logos/logo1.jpg";

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-around items-center p-2 bg-color3">
      <NavLink to="">
        <img src={logo} alt="logo" id="logo" className="w-32 rounded-full" />
      </NavLink>
      <h1 className="text-color4 text-4xl font-bold">La hotte du Père-Noël</h1>
      <div className="flex flex-row justify-between text-xl gap-5">
        <NavLink
          to="/products"
          className="bg-color1 text-color4 p-2 rounded-md hover:bg-color2"
        >
          Produits
        </NavLink>
        <NavLink
          to="/manufacturers"
          className="bg-color1 text-color4 p-2 rounded-md hover:bg-color2"
        >
          Fabricants
        </NavLink>
        <NavLink
          to="/santalist"
          className="bg-color1 text-color4 p-2 rounded-md hover:bg-color2"
        >
          Liste au Père-Noël
        </NavLink>
      </div>
    </nav>
  );
}
