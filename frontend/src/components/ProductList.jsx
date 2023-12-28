import { useState } from "react";
import PropTypes from "prop-types";
import SingleProduct from "./SingleProduct";
import CreateProduct from "./CreateProduct";

export default function ProductList({ data }) {
  const inStock = data.filter((e) => e.quantity > 0);
  const [filteredData, setFilteredData] = useState(inStock);

  const handleFood = () => {
    const foodCategory = filteredData.filter((e) => e.category === "food");
    setFilteredData(foodCategory);
  };
  return (
    <div className="product-list">
      <h3>Produits en stock :</h3>
      <button type="button" onClick={handleFood}>
        food
      </button>
      <button type="button" onClick={() => setFilteredData(inStock)}>
        reset
      </button>
      <div className="products">
        {filteredData.map((e) => (
          <SingleProduct
            nameProduct={e.name}
            price={e.price}
            quantityProduct={e.quantity}
            category={e.category}
            manufacturer={e.manufacturer}
            isFavorite={e.is_fav}
            id={e.id}
            key={e.id}
          />
        ))}
      </div>
      <CreateProduct />
    </div>
  );
}

ProductList.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.shape,
    () => null,
    PropTypes.instanceOf(Error),
  ]).isRequired,
};
