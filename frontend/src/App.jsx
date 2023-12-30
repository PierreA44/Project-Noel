import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="bg-color4 text-color3">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
