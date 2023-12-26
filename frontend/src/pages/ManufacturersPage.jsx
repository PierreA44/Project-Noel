import { useLoaderData } from "react-router-dom";
import ManufacturerList from "../components/ManufacturerList";

export default function ManufacturersPage() {
  const { data } = useLoaderData();

  return (
    <>
      <h1>Manufacturers</h1>
      <ManufacturerList />
      <ul>
        {data.map((m) => (
          <li key={m.id}>{m.name}</li>
        ))}
      </ul>
    </>
  );
}
