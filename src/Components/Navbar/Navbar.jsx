import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from '../../assets/Img/logo.png';


export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
  <React.Fragment>
    <nav>
      


     <div className="logo-container">
            <img className="logo" src={logo} alt="Logo"  />
          </div>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        
       <li>
          <NavLink to="/"  exact>ໜ້າຫຼັກ</NavLink>
        </li> 

       <li>
          <NavLink to="/about">ກ່ຽວກັບພວກເຮົາ</NavLink>
        </li>
        
        <li>
          <NavLink to="/contactus">ຕິດຕໍ່ພວກເຮົາ</NavLink>
        </li>

      </ul>
    </nav>
  </React.Fragment>
  );
};