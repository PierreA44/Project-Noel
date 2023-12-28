import { useLoaderData } from "react-router-dom";

export default function SantalistPage() {
  const { data } = useLoaderData();

  const favoriteData = data.filter((e) => e.is_fav === 1);
  return (
    <div>
      <h1>Santalist</h1>
      <ul>
        {favoriteData.map((e) => (
          <li key={e.id}>{e.name}</li>
        ))}
      </ul>
    </div>
  );
}
