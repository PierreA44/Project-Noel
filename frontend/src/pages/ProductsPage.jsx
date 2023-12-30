import { useLoaderData } from "react-router-dom";
import ProductList from "../components/ProductList";

export default function ProductsPage() {
  const { products, manufacturers, categories } = useLoaderData();
  return (
    <div className="flex flex-col bg-color4 text-center h-auto">
      <h2 className="text-color3 text-3xl p-4">Notre Catalogue</h2>
      <ProductList
        products={products.data}
        manufacturers={manufacturers.data}
        categories={categories.data}
      />
    </div>
  );
}
