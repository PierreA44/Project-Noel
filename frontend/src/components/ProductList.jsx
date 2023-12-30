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
  const [priceValue, setPriceValue] = useState(0);
  const [isUpdated, setIsUpdated] = useState(false);

  const handleChangeCategory = (e) => {
    const category = e.target.value;
    setCategorySelected(category);
    setFilteredData(
      products.filter(
        (p) =>
          (category === "All" || p.category === category) &&
          (manufacturerSelected === "All" ||
            p.manufacturer === manufacturerSelected) &&
          p.name.toLowerCase().includes(searchValue) &&
          p.price < priceValue
      )
    );
  };

  const handleChangeManufacturer = (e) => {
    const manufacturer = e.target.value;
    setManufacturerSelected(manufacturer);
    setFilteredData(
      products.filter(
        (p) =>
          (manufacturer === "All" || p.manufacturer === manufacturer) &&
          (categorySelected === "All" || p.category === categorySelected) &&
          p.name.toLowerCase().includes(searchValue) &&
          p.price < priceValue
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
            p.manufacturer === manufacturerSelected) &&
          p.price < priceValue
      )
    );
  };

  const handleChangePrice = (e) => {
    const price = Number(e.target.value);

    setPriceValue(price);

    setFilteredData(
      products.filter(
        (p) =>
          p.price < price &&
          p.name.toLowerCase().includes(searchValue) &&
          (categorySelected === "All" || p.category === categorySelected) &&
          (manufacturerSelected === "All" ||
            p.manufacturer === manufacturerSelected)
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
    <div>
      <h3 className="text-2xl p-4">Produits en stock :</h3>
      <div className="border-color2 border-2 rounded-md p-2 mx-6">
        <h4>Rechercher un produit :</h4>
        <div className="flex flex-row justify-center gap-4 items-center">
          <label htmlFor="product-name">Par son nom</label>
          <input
            type="text"
            name="product-name"
            onChange={handleSearch}
            className="border-color1 border-2 rounded-md"
          />
          <label htmlFor="category">Par catégorie</label>
          <select
            name="category"
            onChange={handleChangeCategory}
            className="border-color1 border-2 rounded-md"
          >
            <option value="All">All</option>
            {categories.map((c) => (
              <option value={c.name} key={c.id}>
                {c.name}
              </option>
            ))}
          </select>
          <label htmlFor="manufacturer">Par fabricant</label>
          <select
            name="manufacturer"
            onChange={handleChangeManufacturer}
            className="border-color1 border-2 rounded-md"
          >
            <option value="All">All</option>
            {manufacturers.map((m) => (
              <option value={m.name} key={m.id}>
                {m.name}
              </option>
            ))}
          </select>
          <label htmlFor="price">Par prix</label>
          <input
            type="range"
            name="price"
            min="0"
            step="5"
            className="border-color1 border-2 rounded-md"
            onChange={handleChangePrice}
          />
          <button
            type="button"
            onClick={() => setFilteredData(products)}
            className="bg-color2 text-color4 w-24 px-2 py-1 mt-1 rounded-lg hover:bg-color1"
          >
            Reset
          </button>
        </div>
      </div>
      <CreateProduct
        manufacturers={manufacturers}
        categories={categories}
        setIsUpdated={setIsUpdated}
      />
      <div className="flex flex-row flex-wrap justify-center gap-4 m-4">
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
