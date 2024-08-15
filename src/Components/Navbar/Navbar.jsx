import React from 'react'
import '../Navbar/Navbar.css'

function Navbar() {
  return (
    <div>
     <header>
        <a href="Logo" class="logo">Add Logo</a>

        <ul className="navbar">
            <li><a href="">Home</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Service</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Contact</a></li>
        </ul>
        <div className="bx bx-menu" id="menu-icon"></div> 

        <div className="main">
            <a href="" className="user"><i className="fa-regular fa-user"></i>Sign In</a>
            <a href="">Register</a>
           
        </div>
    </header>
    </div>
  )
}

export default Navbar