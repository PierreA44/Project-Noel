import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import logo from "../assets/logos/logo1.jpg";

export default function Navbar({ user, setUser }) {
  const navlinks = [
    {
      id: 1,
      path: "/products",
      link: "Produits",
    },
    {
      id: 2,
      path: "/manufacturers",
      link: "Fabricants",
    },
    {
      id: 3,
      path: "/santalist",
      link: "Liste au Père-Noël",
    },
  ];

  const auth = [
    {
      id: 1,
      path: "/login",
      link: "Se connecter",
    },
    {
      id: 2,
      path: "/register",
      link: "Créer un compte",
    },
  ];

  return (
    <nav className="flex flex-row justify-around items-center p-2 bg-color3">
      <NavLink to="">
        <img src={logo} alt="logo" id="logo" className="w-32 rounded-full" />
      </NavLink>
      <h1 className="text-color4 text-4xl font-bold">La hotte du Père-Noël</h1>

      {user ? (
        <div className="flex flex-row justify-between items-center text-xl gap-5">
          {navlinks.map((e) => (
            <NavLink
              key={e.id}
              to={e.path}
              className="bg-color1 text-color4 p-2 rounded-md hover:bg-color2"
            >
              {e.link}
            </NavLink>
          ))}
          <button
            className="bg-color1 text-color4 p-2 rounded-md hover:bg-color2"
            type="button"
            onClick={() => setUser(null)}
          >
            Se déconnecter
          </button>
        </div>
      ) : (
        <div className="flex flex-row justify-between text-xl gap-5">
          {auth.map((e) => (
            <NavLink
              key={e.id}
              to={e.path}
              className="bg-color1 text-color4 p-2 rounded-md hover:bg-color2"
            >
              {e.link}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

Navbar.propTypes = {
  user: PropTypes.shape.isRequired,
  setUser: PropTypes.func.isRequired,
};
