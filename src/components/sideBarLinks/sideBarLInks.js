import React from 'react';
import "./sideBarLinks.css";
import { Link, useNavigation} from 'react-router-dom'

import {FaHome, FaBell, FaUsers, FaCommentAlt, FaBookmark} from 'react-icons/fa'
import { FaBook, FaPaperPlane, FaCalendarAlt, FaSignOutAlt} from 'react-icons/fa';
import { IconContext } from 'react-icons';



//should add booked marked questions

const SideBarlinks = () => { 
  
    return (
      <div className="side-links">
        <IconContext.Provider value={{size: 40}}>
          <Link to={"/"} className="link-item">
            <FaHome  className="icon-1" />
            <h3>Dashboard</h3>
          </Link>
          <Link to={"notifications"} className="link-item">
            <FaBell  className="icon-2" />
            <h3>Notifications</h3>
          </Link>
          <Link to={"manage-students"} className="link-item">
            <FaUsers  className="icon-3" />
            <h3>Manage Students</h3>
          </Link>
          <Link to={"manage-answers"} className="link-item">
            <FaCommentAlt  className="icon-4" />
            <h3>Manage Answers</h3>
          </Link>
          <Link to={"bookemarked-questions"} className="link-item">
            <FaBookmark  className="icon-5" />
            <h3>Booked Marked Questions</h3>
          </Link>
          <Link to={"create-questions"} className="link-item">
            <FaBook  className="icon-6" />
            <h3>Create Questions</h3>
          </Link>
          <Link to={"questions"} className="link-item">
            <FaPaperPlane  className="icon-7" />
            <h3>Answer Questions</h3>
          </Link>
          <Link to={"schedule"} className="link-item">
            <FaCalendarAlt  className="icon-8" />
            <h3>Schedule</h3>
          </Link>
          <Link className="link-item" to={"auth/sign-in"}>
            <FaSignOutAlt style={{ color: "white" }}  className="icon-9" />
            <h3>Log Out</h3>
          </Link>
        </IconContext.Provider>
      </div>
    );

}



export default SideBarlinks;