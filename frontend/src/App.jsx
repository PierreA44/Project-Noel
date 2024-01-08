import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [user, setUser] = useState("");
  return (
    <div className="bg-color4 text-color3">
      <Navbar user={user} setUser={setUser} />
      <Outlet context={{ user, setUser }} />
    </div>
  );
}

export default App;
