import { useState } from "react";
// import axios from "axios";

export default function CreateProduct() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleSubmitForm = () => {
    // axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/products`, {
    //   name: e.target[0].value,
    //   quantity: e.target[1].value,
    //   price: e.target[2].value,
    // });
    setIsFormVisible(false);
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
          <form>
            <input type="text" name="name" placeholder="name" />
            <input type="number" name="quantity" placeholder="quantity" />
            <input type="number" name="price" placeholder="price" />
            <button type="submit" onClick={() => handleSubmitForm()}>
              Valider
            </button>
          </form>
        </>
      ) : null}
    </div>
  );
}
