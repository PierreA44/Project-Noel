/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

export default function CreateProduct({
  setIsUpdated,
  categories,
  manufacturers,
}) {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/products`, data);
    setIsFormVisible(false);
    setIsUpdated(true);
  };

  return (
    <div className="creation">
      {isFormVisible ? null : (
        <button type="button" onClick={() => setIsFormVisible(true)}>
          Ajouter un produit
        </button>
      )}
      {isFormVisible ? (
        <>
          <h3>Mon nouveau produit:</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              name="name"
              placeholder="product name"
              {...register("name", { required: "product must have a name" })}
            />
            {errors.name && <p role="alert">{errors.name.message}</p>}
            <input
              type="number"
              name="quantity"
              placeholder="quantity"
              {...register("quantity", {
                required: "You must define a quantity",
              })}
            />
            {errors.quantity && <p role="alert">{errors.quantity.message}</p>}
            <input
              type="number"
              name="price"
              placeholder="price"
              {...register("price", { required: "You must define a price" })}
            />
            {errors.price && <p role="alert">{errors.price.message}</p>}
            <select
              name="category"
              {...register("category_id", {
                required: "You must select a category",
              })}
            >
              <option value="">--</option>
              {categories.map((c) => (
                <option value={c.id} key={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
            {errors.category_id && (
              <p role="alert">{errors.category_id.message}</p>
            )}
            <select name="manufacturer" {...register("manufacturer_id")}>
              <option value="">--</option>
              {manufacturers.map((m) => (
                <option value={m.id} key={m.id}>
                  {m.name}
                </option>
              ))}
            </select>
            {errors.manufacturer_id && (
              <p role="alert">{errors.manufacturer_id.message}</p>
            )}
            <button type="submit">Valider</button>
          </form>
        </>
      ) : null}
    </div>
  );
}

CreateProduct.propTypes = {
  setIsUpdated: PropTypes.func.isRequired,
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
