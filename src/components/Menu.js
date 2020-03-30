import React from 'react';
import {Link } from 'react-router-dom';


function Menu() {
  return (
    <div className="header_nav_wrapper">
        <div className="header_nav">
            <div className="container">
                <div className="site_branding">
                    <h1 className="text_logo"><Link to="/" rel="home">Zee Blog <span
                                className="logo_dot"></span> </Link></h1>
                </div>
               
                <div className="main_menu">
                    <ul id="top-menu" className="navbar">
                        <li id="menu-item-23"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-23 dropdown default_menu">
                            <Link to="/" data-hover="dropdown"
                                className="dropdown-toggle mobile_menu_parent mobile_menu_closed">About</Link>
                        </li>
                        <li id="menu-item-58"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-58 dropdown default_menu">
                            <Link to="/blog" data-hover="dropdown"
                                className="dropdown-toggle mobile_menu_parent mobile_menu_closed">Blog</Link>
                        </li>
                        <li id="menu-item-176"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-176 dropdown default_menu">
                                
                            <a  target="_blank" href="https://drive.google.com/file/d/1LVihv93Q4XzPjuhOxWHv3gBFw2awq62G/view?usp=sharing" 
                                className="dropdown-toggle mobile_menu_parent mobile_menu_closed"  >Resume</a>
                            
                        </li>
                    
                    </ul> 
                </div> 
            </div>
        </div>
    </div>
  );
}

export default Menu;