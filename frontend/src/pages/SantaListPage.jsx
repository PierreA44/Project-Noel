import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function SantalistPage() {
  const { data } = useLoaderData();

  const [favoriteData, setFavoriteData] = useState(data);

  const [isUpdated, setIsUpdated] = useState(false);

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
    axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`, {
      name: nameProduct,
      quantity: quantityProduct + 1,
      is_fav: 0,
    });
    setIsUpdated(true);
  };
  return (
    <div>
      <h1>Santalist</h1>
      <div>
        {favoriteData
          .filter((e) => e.is_fav === 1)
          .map((e) => (
            <div key={e.id}>
              <h3>{e.name}</h3>
              <button
                type="button"
                onClick={() => handleClick(e.name, e.quantity, e.id)}
              >
                supprimer de la liste
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
