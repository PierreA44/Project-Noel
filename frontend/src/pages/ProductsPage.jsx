import { useLoaderData } from "react-router-dom";
import ProductList from "../components/ProductList";

export default function ProductsPage() {
  const { data } = useLoaderData();
  return (
    <div className="product-page">
      <h2>Notre Catalogue</h2>
      <ProductList data={data} />
    </div>
  );
}
