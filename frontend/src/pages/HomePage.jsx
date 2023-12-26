import { Outlet } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <h1>Bienvenue</h1>
      <Outlet />
    </>
  );
}
