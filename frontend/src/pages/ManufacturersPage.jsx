import { useLoaderData } from "react-router-dom";
import ManufacturerList from "../components/ManufacturerList";

export default function ManufacturersPage() {
  const { data } = useLoaderData();

  return (
    <div className="flex flex-col bg-color4 text-center h-screen">
      <h2 className="text-color3 text-3xl p-4">Nos fabricants référencés</h2>
      <ManufacturerList data={data} />
    </div>
  );
}
