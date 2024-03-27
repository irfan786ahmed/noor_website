import React from 'react'
import { ReactComponent as CloseMenu } from "../assets/x.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Header.css"

const Header = () => {
  const navigate = useNavigate()
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
    <div className="header">
          <div className="logo-nav">
            <div className="logo-container" style={{cursor:"pointer"}} onClick={() => navigate("/home")}>
              <img src="/dentalLogo.png" alt="dentalLogo" width="100%" height="50px" />
            </div>
            <div>
              <ul className={click ? "nav-options active" : "nav-options"}>
                <li className="option" onClick={closeMobileMenu}>
                  <p onClick={() => navigate("/home")}>Home</p>
                </li>
                <li className="option" onClick={closeMobileMenu}>
                  <p onClick={() => navigate("/about")}>About Us</p>
                  
                </li>
                <li className="option" onClick={closeMobileMenu}>
                  <p onClick={() => navigate("/services")}>Services</p>
                </li>
                
                <li className="last-btn" onClick={closeMobileMenu}>
                <p onClick={() => navigate("/contact")}>Book Appointment</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="mobile-menu" onClick={handleClick}>
            {click ? (
              <CloseMenu className="menu-icon" />
            ) : (
              <MenuIcon className="menu-icon" />
            )}
          </div>
        </div>
    </>
  )
}

export default Header