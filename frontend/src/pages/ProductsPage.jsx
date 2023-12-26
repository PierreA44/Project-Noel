import { useLoaderData } from "react-router-dom";

export default function ProductsPage() {
  const { data } = useLoaderData();
  return (
    <>
      <h1>Products</h1>
      <ul>
        {data.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </>
  );
}
