import { useLoaderData, NavLink, useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function SantalistPage() {
  const { data } = useLoaderData();

  const [favoriteData, setFavoriteData] = useState(data);

  const [isUpdated, setIsUpdated] = useState(false);
  const { user } = useOutletContext();

  useEffect(() => {
    if (isUpdated) {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/products`)
        .then((res) => {
          setFavoriteData(res.data);
          setIsUpdated(false);
        })
        .catch((e) => console.error(e));
    }
  }, [isUpdated]);

  const handleClick = (nameProduct, quantityProduct, id) => {
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`, {
        name: nameProduct,
        quantity: quantityProduct + 1,
        is_fav: 0,
      })
      .then(setIsUpdated(true));
  };
  return (
    <div>
      {user ? (
        <div className="flex flex-col bg-color4 text-center h-screen">
          <h2 className="text-color3 text-3xl p-4">Ma liste au Père-Noël</h2>
          <div>
            {favoriteData
              .filter((e) => e.is_fav === 1)
              .map((e) => (
                <div key={e.id} className="flex flex-row items-center gap-6">
                  <h3 className="text-2xl p-4">- {e.name}</h3>
                  <button
                    type="button"
                    className="bg-color2 text-color4 w-auto px-2 py-1 mt-1 rounded-lg hover:bg-color1"
                    onClick={() => handleClick(e.name, e.quantity, e.id)}
                  >
                    supprimer de la liste
                  </button>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <div className="bg-color4 h-screen text-center p-8 flex flex-col gap-4 text-xl">
          <h1>Vous devez être authentifié pour accéder à cette page !</h1>
          <NavLink to="/login">Se connecter</NavLink>
          <NavLink to="/register">Créer un compte</NavLink>
        </div>
      )}
    </div>
  );
}
