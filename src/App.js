/** @format */

import TopNav from "./components/topNav/topNav.js";
import SideNav from "./components/sideNav/sideNav.js";

import "./main.css";
import { Outlet } from "react-router-dom";

function App() {
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
    </div>
  );
}

export default App;
