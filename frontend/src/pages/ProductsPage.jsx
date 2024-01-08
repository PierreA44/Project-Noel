import { useLoaderData, NavLink, useOutletContext } from "react-router-dom";
import ProductList from "../components/ProductList";

export default function ProductsPage() {
  const { products, manufacturers, categories } = useLoaderData();
  const { user } = useOutletContext();
  return (
    <div>
      {user ? (
        <div className="flex flex-col bg-color4 text-center h-auto">
          <h2 className="text-color3 text-3xl p-4">Notre Catalogue</h2>
          <ProductList
            products={products.data}
            manufacturers={manufacturers.data}
            categories={categories.data}
          />
        </div>
      ) : (
        <div className="bg-color4 h-screen text-center p-8 flex flex-col gap-4 text-xl">
          <h1>Vous devez être authentifié pour accéder à cette page !</h1>
          <NavLink to="/login">Se connecter</NavLink>
          <NavLink to="/register">Créer un compte</NavLink>
        </div>
      )}
    </div>
  );
}
