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
    <div className="manufacturer-alone">
      <h4>{name}</h4>
      <h5>Pays : {productionCountry}</h5>
      {isClick ? (
        <div>
          <ul>
            {productList.map((p) => (
              <li key={p.id}>{p.name}</li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => {
              setIsClick(false);
              setIsProductList([]);
            }}
          >
            cacher
          </button>
        </div>
      ) : (
        <button type="button" onClick={() => handleClick(id)}>
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
