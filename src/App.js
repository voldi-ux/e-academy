/** @format */

import { useEffect } from "react";
import TopNav from "./components/topNav/topNav.js";
import SideNav from "./components/sideNav/sideNav.js";

import "./main.css";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext/AuthProvider.js";
import { useAuth } from "./contexts/AuthContext/useAuth.js";

const closeMenu = (e) => {
  const menu = document.getElementById("nav-menu");
  const element = e.target;
  if (element.classList.contains("nav-menu") || element.classList.contains("link-item") || element.parentElement.classList.contains("link-item")) {
    menu.style.display = "none";
  }
};
function App() {
  const auth = useAuth();

  return (
    <div className="main-container">
      <div className="nav1">
        <SideNav />
      </div>
      <div className="main">
        <div className="nav2">
          <TopNav />
        </div>
        <div className="main-outlets">
          <Outlet />
        </div>
      </div>
      <div id="nav-menu" className="nav-menu" onClick={closeMenu}>
        <div className="nav-menu-container">
          <SideNav />
        </div>
      </div>
    </div>
  );
}

export default App;
