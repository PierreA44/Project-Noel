import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import SingleProduct from "./SingleProduct";
import CreateProduct from "./CreateProduct";

export default function ProductList({ products, manufacturers, categories }) {
  const [filteredData, setFilteredData] = useState(products);
  const [categorySelected, setCategorySelected] = useState("All");
  const [manufacturerSelected, setManufacturerSelected] = useState("All");
  const [searchValue, setSearchValue] = useState("");
  const [isUpdated, setIsUpdated] = useState(false);

  const handleChangeCategory = (e) => {
    const category = e.target.value;
    setCategorySelected(category);
    setFilteredData(
      products.filter(
        (p) =>
          (category === "All" || p.category === category) &&
          (manufacturerSelected === "All" ||
            p.category === manufacturerSelected) &&
          p.name.toLowerCase().includes(searchValue)
      )
    );
  };

  const handleChangeManufacturer = (e) => {
    const manufacturer = e.target.value;
    setManufacturerSelected(manufacturer);
    setFilteredData(
      products.filter(
        (p) =>
          (manufacturer === "All" || p.category === manufacturer) &&
          (categorySelected === "All" || p.category === categorySelected) &&
          p.name.toLowerCase().includes(searchValue)
      )
    );
  };

  const handleSearch = (e) => {
    const searchInput = e.target.value.toLowerCase();

    setSearchValue(searchInput);

    setFilteredData(
      products.filter(
        (p) =>
          p.name.toLowerCase().includes(searchInput) &&
          (categorySelected === "All" || p.category === categorySelected) &&
          (manufacturerSelected === "All" ||
            p.category === manufacturerSelected)
      )
    );
  };

  useEffect(() => {
    if (isUpdated) {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/products`)
        .then((res) => {
          setFilteredData(res.data);
          setIsUpdated(false);
        })
        .catch((e) => console.error(e));
    }
  }, [isUpdated]);

  return (
    <div className="product-list">
      <h3>Produits en stock :</h3>
      <div className="filters">
        <input type="text" onChange={handleSearch} />
        <label htmlFor="category">Choose a category</label>
        <select name="category" onChange={handleChangeCategory}>
          <option value="All">All</option>
          {categories.map((c) => (
            <option value={c.name} key={c.id}>
              {c.name}
            </option>
          ))}
        </select>
        <label htmlFor="manufacturer">Choose a manufacturer</label>
        <select name="manufacturer" onChange={handleChangeManufacturer}>
          <option value="All">All</option>
          {manufacturers.map((m) => (
            <option value={m.name} key={m.id}>
              {m.name}
            </option>
          ))}
        </select>
        <button type="button" onClick={() => setFilteredData(products)}>
          reset
        </button>
      </div>
      <div className="products">
        {filteredData
          .filter((e) => e.quantity > 0)
          .map((e) => (
            <SingleProduct
              nameProduct={e.name}
              price={e.price}
              quantityProduct={e.quantity}
              category={e.category}
              manufacturer={e.manufacturer}
              isFavorite={e.is_fav}
              id={e.id}
              key={e.id}
              isUpdated={isUpdated}
              setIsUpdated={setIsUpdated}
            />
          ))}
      </div>
      <CreateProduct
        manufacturers={manufacturers}
        categories={categories}
        setIsUpdated={setIsUpdated}
      />
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.oneOfType([
    PropTypes.shape,
    () => null,
    PropTypes.instanceOf(Error),
  ]).isRequired,
  manufacturers: PropTypes.oneOfType([
    PropTypes.shape,
    () => null,
    PropTypes.instanceOf(Error),
  ]).isRequired,
  categories: PropTypes.oneOfType([
    PropTypes.shape,
    () => null,
    PropTypes.instanceOf(Error),
  ]).isRequired,
};
