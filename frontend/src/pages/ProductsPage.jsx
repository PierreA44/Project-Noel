import { useLoaderData } from "react-router-dom";
import ProductList from "../components/ProductList";

export default function ProductsPage() {
  const { products, manufacturers, categories } = useLoaderData();
  return (
    <div className="product-page">
      <h2>Notre Catalogue</h2>
      <ProductList
        products={products.data}
        manufacturers={manufacturers.data}
        categories={categories.data}
      />
    </div>
  );
}
