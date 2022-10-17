import React from 'react';
import "./Navbar.css"
import logo from "../../../images/Logo.svg";
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className='nav-bar'>
            <div>
                <a href="ema-john"><img className='nav-logo' src={logo} alt="" /></a>
            </div>
            <div>
                <ul className='list-container'>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/orders">Orders</Link></li>
                    <li><Link to="/inventory">Inventory</Link></li>
                    <li><Link to="login">Login</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;