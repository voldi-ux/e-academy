import React from 'react'
import './Navbar.css'

import { FaBold, FaItalic, FaUnderline, FaListOl, FaPaperclip, FaPencilAlt, FaChartLine, FaImage } from 'react-icons/fa'

const Navbar = () => {
  return (
    <ul className="fonts">
        <li><a href="dontkno"><FaBold/></a></li>
        <li><a href="dontkno"><FaItalic/></a></li>
        <li><a href="dontkno"><FaUnderline/></a></li>
        <li><a style={{color:"var(--purple)"}} href="dontkno"><FaListOl/></a></li>
        <li><a style={{color:"var(--green)"}} href="dontkno"><FaListOl/></a></li>
        <li><a style={{color:"var(--orange)"}} href="dontkno"><FaPaperclip/></a></li>
        <li><a style={{color:"var(--blue-dark)"}} href="dontkno"><FaPencilAlt/></a></li>
        <li><a href="dontkno"><FaChartLine/></a></li>
        <li><a style={{color:"var(--red)"}} href="dontkno"><FaImage/></a></li>
    </ul>
  )
}

export default Navbar
