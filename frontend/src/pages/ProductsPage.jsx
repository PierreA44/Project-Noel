import { useLoaderData } from "react-router-dom";
import ProductList from "../components/ProductList";

export default function ProductsPage() {
  const { data } = useLoaderData();
  return (
    <>
      <h1>Products</h1>
      <ProductList />
      <ul>
        {data.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </>
  );
}
