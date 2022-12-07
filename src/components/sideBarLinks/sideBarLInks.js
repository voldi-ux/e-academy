import React from 'react';
import "./sideBarLinks.css";
import { ReactComponent as Icon1 } from '../../resources/icons/home.svg';
import { ReactComponent as Icon2 } from '../../resources/icons/notification.svg';
import { ReactComponent as Icon3 } from '../../resources/icons/students.svg';
import { ReactComponent as Icon4 } from '../../resources/icons/chat.svg';
import { ReactComponent as Icon5 } from '../../resources/icons/bookmark.svg';
import { ReactComponent as Icon6 } from "../../resources/icons/create-question.svg";
import { ReactComponent as Icon7 } from '../../resources/icons/question.svg';
import { ReactComponent as Icon8 } from '../../resources/icons/calendar.svg';
import { ReactComponent as Icon9 } from '../../resources/icons/logout.svg';

import { Link} from 'react-router-dom'

import {FaHome, FaBell, FaUsers, FaCommentAlt, FaBookmark} from 'react-icons/fa'
import { FaBook, FaPaperPlane, FaCalendarAlt, FaSignOutAlt} from 'react-icons/fa';




//should add booked marked questions


const SideBarlinks = () => { 
  
    return (
      <div className="side-links">
        <Link to={"/"} className="link-item">
          <FaHome fontSize="40px" className="icon-1" />
          <h3>Dashboard</h3>
        </Link>
        <Link to={"notifications"} className="link-item">
          <FaBell fontSize="40px" className="icon-2" />
          <h3>Notifications</h3>
        </Link>
        <Link to={"manage-students"} className="link-item">
          <FaUsers fontSize="40px" className="icon-3" />
          <h3>Manage Students</h3>
        </Link>
        <Link to={"manage-answers"} className="link-item">
          <FaCommentAlt fontSize="40px" className="icon-4" />
          <h3>Manage Answers</h3>
        </Link>
        <Link to={"bookemarked-questions"} className="link-item">
          <FaBookmark fontSize="50px" className="icon-5" />
          <h3>Booked Marked Questions</h3>
        </Link>
        <Link to={"create-questions"} className="link-item">
          <FaBook fontSize='40px' className="icon-6" />
          <h3>Create Questions</h3>
        </Link>
        <Link to={"questions"} className="link-item">
          <FaPaperPlane fontSize="40px" className="icon-7" />
          <h3>Answer Questions</h3>
        </Link>
        <Link to={"schedule"} className="link-item">
          <FaCalendarAlt fontSize="40px" className="icon-8" />
          <h3>Schedule</h3>
        </Link>
        <Link className="link-item" to={"auth/sign-in"}>
          <FaSignOutAlt fontSize="40px" className="icon-9" />
          <h3>Log Out</h3>
        </Link>
      </div>
    );

}



export default SideBarlinks;