import { useLoaderData } from "react-router-dom";

export default function ManufacturersPage() {
  const { data } = useLoaderData();

  return (
    <>
      <h1>Manufacturers</h1>
      <ul>
        {data.map((m) => (
          <li key={m.id}>{m.name}</li>
        ))}
      </ul>
    </>
  );
}
