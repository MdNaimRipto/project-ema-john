import React from 'react';
import "./Navbar.css"
import logo from "../../../images/Logo.svg";

const Navbar = () => {
    return (
        <nav className='nav-bar'>
            <div>
                <a href="ema-john"><img className='nav-logo' src={logo} alt="" /></a>
            </div>
            <div>
                <ul className='list-container'>
                    <li><a href="/order">Order</a></li>
                    <li><a href="/order-review">Order Review</a></li>
                    <li><a href="/manage-inventory">Manage Inventory</a></li>
                    <li><a href="login">Login</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;