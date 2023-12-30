import { NavLink } from "react-router-dom";
import logo from "../assets/logos/logo1.jpg";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="">
        <img src={logo} alt="logo" id="logo" />
      </NavLink>
      <h1>La hotte du Père-Noël</h1>
      <div className="navlinks">
        <NavLink to="/products">Produits</NavLink>
        <NavLink to="/manufacturers">Fabricants</NavLink>
        <NavLink to="/santalist">Liste au Père-Noël</NavLink>
      </div>
    </nav>
  );
}
