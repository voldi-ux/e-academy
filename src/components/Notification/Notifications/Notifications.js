/** @format */

import "./Notifications.css";
import Notification from "../Notification/Notification";
import Search from "../../Search/Search";
import Filter from "../../filter/filter";

const Notifications = () => {
  return (
    <div className="notifications">
      <div className="header">
        <h1>Notification Board</h1>
      </div>
      <div className="search">
        <Search />
      </div>
      <div className="notification-filers-container">
        <Filter title={"Time"} defaultSelect={"New"} />
        <Filter title={"Seen"} defaultSelect={"false"} />
        <Filter title={"Grade"} defaultSelect={"All"} />
        <Filter title={"Subject"} defaultSelect={"All"} />
      </div>
      <div className="quest">
        <Notification name="Axel" question="Eh, what is trig?" />
        <Notification name="Benjamin" question="What is the integration of the following question?" />
        <Notification name="Hope" question="f(x) is the tangent in this example right?" />
        <Notification name="Imani" question="Sequence and series are part of the section 'Patterns' right?" />

        <Notification name="Voldi" question="Ah Sir! What is a function???" />
        <Notification />
        <Notification />
      </div>
    </div>
  );
};

export default Notifications;
