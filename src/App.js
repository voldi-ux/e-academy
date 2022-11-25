/** @format */

import Home from "./pages/home/home.js";
import TopNav from "./components/topNav/topNav.js";
import SideNav from "./components/sideNav/sideNav.js";

import "./main.css";

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
           <Home />
        </div>
    </div>
  );
}

export default App;
