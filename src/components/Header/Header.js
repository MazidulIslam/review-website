import './Header.css';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    
    return (
        <div className="navMenu">
            <div>
                <Link className="logo" to="/">e<span>Learning</span></Link>
            </div>
            <div className="menu">
                <NavLink className="navLink" to="/home">Home</NavLink>
                <NavLink className="navLink" to="/services">Services</NavLink>
                <NavLink className="navLink" to="/about-us">About Us</NavLink>
                <NavLink className="navLink" to="/contact">Contact</NavLink>
            </div>
        </div>
    );
};

export default Header;