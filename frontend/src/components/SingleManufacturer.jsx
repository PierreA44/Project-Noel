import axios from "axios";
import { useState } from "react";
import PropTypes from "prop-types";

export default function SingleManufacturer({ name, productionCountry, id }) {
  const [isClick, setIsClick] = useState(false);
  const [productList, setIsProductList] = useState([]);

  const handleClick = async (i) => {
    setIsClick(true);
    await axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/manufacturers/${i}`)
      .then((res) => setIsProductList(res.data));
  };

  return (
    <div className="border-4 border-color2 bg-color1 text-color4 w-64 p-2 rounded-md">
      <h4 className="text-2xl">{name}</h4>
      <h5 className="text-xl">Pays : {productionCountry}</h5>
      {isClick ? (
        <>
          <div className="my-2 border-color2 border-2">
            <ul>
              {productList.map((p) => (
                <li key={p.id}>{p.name}</li>
              ))}
            </ul>
          </div>
          <button
            type="button"
            onClick={() => {
              setIsClick(false);
              setIsProductList([]);
            }}
            className="bg-color2 px-2 py-1 mt-1 rounded-lg hover:bg-color4 hover:text-color2"
          >
            cacher
          </button>
        </>
      ) : (
        <button
          type="button"
          onClick={() => handleClick(id)}
          className="bg-color2 px-2 py-1 mt-3 rounded-lg hover:bg-color4 hover:text-color2"
        >
          Voir leurs produits
        </button>
      )}
    </div>
  );
}

SingleManufacturer.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  productionCountry: PropTypes.string.isRequired,
};
