import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <ul className="fonts">
        <li><a href="dontkno"><i className="fa fa-solid fa-bold fa-lg"></i></a></li>
        <li><a href="dontkno"><i class="fas fa-italic fa-lg"></i></a></li>
        <li><a href="dontkno"><i class="fa-solid fa-underline fa-lg"></i></a></li>
        <li><a style={{color:"var(--purple)"}} href="dontkno"><i class="fa-solid fa-list fa-lg"></i></a></li>
        <li><a style={{color:"var(--green)"}} href="dontkno"><i class="fa fa-duotone fa-list-ol fa-lg"></i></a></li>
        <li><a style={{color:"var(--orange)"}} href="dontkno"><i class="fa-solid fa-paperclip fa-lg"></i></a></li>
        <li><a style={{color:"var(--blue-dark)"}} href="dontkno"><i class="fa-solid fa-pencil fa-lg"></i></a></li>
        <li><a href="dontkno"><i class="fa-sharp fa-solid fa-chart-simple"></i></a></li>
        <li><a style={{color:"var(--red)"}} href="dontkno"><i class="fa-solid fa-image fa-lg"></i></a></li>
    </ul>
  )
}

export default Navbar
