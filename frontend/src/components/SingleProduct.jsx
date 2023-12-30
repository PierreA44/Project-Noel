import axios from "axios";
import PropTypes from "prop-types";

export default function SingleProduct({
  nameProduct,
  price,
  category,
  quantityProduct,
  manufacturer,
  isFavorite,
  id,
  setIsUpdated,
}) {
  const handleFav = () => {
    axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`, {
      name: nameProduct,
      quantity: quantityProduct - 1,
      is_fav: 1,
    });
    setIsUpdated(true);
  };

  const handleNotFav = () => {
    axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`, {
      name: nameProduct,
      quantity: quantityProduct + 1,
      is_fav: 0,
    });
    setIsUpdated(true);
  };

  return (
    <div className="border-4 border-color2 bg-color1 text-color4 p-2 rounded-md">
      <h4 className="text-2xl">{nameProduct}</h4>
      <div className="product-info">
        <p>Catégorie : {category}</p>
        <p>Fabricant : {manufacturer}</p>
      </div>
      <div className="product-merch">
        <p>stock : {quantityProduct}</p>
        <p>prix : {price} €</p>
      </div>
      <div>
        {isFavorite === 0 ? (
          <button
            type="button"
            onClick={handleFav}
            className="bg-color2 px-2 py-1 mt-1 rounded-lg hover:bg-color4 hover:text-color2"
          >
            Ajouter à ta liste de souhaits
          </button>
        ) : (
          <button
            type="button"
            onClick={handleNotFav}
            className="bg-color2 px-2 py-1 mt-1 rounded-lg hover:bg-color4 hover:text-color2"
          >
            Retirer de la liste
          </button>
        )}
      </div>
    </div>
  );
}

SingleProduct.propTypes = {
  nameProduct: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  quantityProduct: PropTypes.number.isRequired,
  manufacturer: PropTypes.string.isRequired,
  isFavorite: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  setIsUpdated: PropTypes.func.isRequired,
};
