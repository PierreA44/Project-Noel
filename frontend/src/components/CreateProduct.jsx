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
    <div className="my-4">
      {isFormVisible ? null : (
        <button
          type="button"
          onClick={() => setIsFormVisible(true)}
          className="bg-color2 text-color4 px-2 py-1 mt-1 rounded-lg hover:bg-color1"
        >
          Ajouter un produit
        </button>
      )}
      {isFormVisible ? (
        <>
          <h3 className="text-2xl p-4">Mon nouveau produit :</h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="border-color1 border-2 rounded-md p-2 mx-6 flex flex-col justify-center"
          >
            <div className="flex justify-center gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="product name"
                  className="border-color2 border-2 rounded-md placeholder:pl-2"
                  {...register("name", {
                    required: "product must have a name",
                    minLength: {
                      value: 4,
                      message:
                        "Product name must be contain at least 4 characters",
                    },
                  })}
                />
                {errors.name && <p role="alert">{errors.name.message}</p>}
              </div>
              <div>
                <input
                  type="number"
                  name="quantity"
                  placeholder="quantity"
                  className="border-color2 border-2 rounded-md placeholder:pl-2"
                  {...register("quantity", {
                    required: "You must define a quantity",
                    min: {
                      value: 1,
                      message: "The product quantity must be at least 1",
                    },
                  })}
                />
                {errors.quantity && (
                  <p role="alert">{errors.quantity.message}</p>
                )}
              </div>
              <div>
                <input
                  type="number"
                  name="price"
                  placeholder="price"
                  className="border-color2 border-2 rounded-md placeholder:pl-2"
                  {...register("price", {
                    required: "You must define a price",
                    min: { value: 1, message: "Price must be greater than 0" },
                  })}
                />
                {errors.price && <p role="alert">{errors.price.message}</p>}
              </div>
              <div>
                <select
                  name="category"
                  className="border-color2 border-2 rounded-md placeholder:pl-2"
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
              </div>
              <div>
                <select
                  name="manufacturer"
                  className="border-color2 border-2 rounded-md placeholder:pl-2"
                  {...register("manufacturer_id", {
                    required: "You must select a manufacturer",
                  })}
                >
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
              </div>
            </div>
            <div className="flex flex-row justify-center gap-8 my-2">
              <button
                type="submit"
                className="bg-color1 px-2 py-1 mt-1 rounded-lg w-32 hover:bg-color2 text-color4"
              >
                Valider
              </button>
              <button
                type="button"
                onClick={() => setIsFormVisible(false)}
                className="bg-color1 px-2 py-1 mt-1 rounded-lg w-32 hover:bg-color2 text-color4"
              >
                Annuler
              </button>
            </div>
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
