import { useLoaderData } from "react-router-dom";
import ManufacturerList from "../components/ManufacturerList";

export default function ManufacturersPage() {
  const { data } = useLoaderData();

  return (
    <>
      <h2>Nos fabricants référencés</h2>
      <ManufacturerList data={data} />
    </>
  );
}
