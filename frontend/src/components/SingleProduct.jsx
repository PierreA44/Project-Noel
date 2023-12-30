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
    <div className="single-product">
      <h4>{nameProduct}</h4>
      <div className="product-info">
        <p>{category}</p>
        <p>{manufacturer}</p>
      </div>
      <div className="product-merch">
        <p>{quantityProduct}</p>
        <p>{price} €</p>
      </div>
      <div>
        {isFavorite === 0 ? (
          <button type="button" onClick={handleFav}>
            Ajouter à ta liste de souhaits
          </button>
        ) : (
          <button type="button" onClick={handleNotFav}>
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
