import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink className="a" to="/shop">Shop</NavLink>
                <NavLink className="a" to="/orders">Order Review</NavLink>
                <NavLink className="a" to="/inventory">Manage Inventory</NavLink>
            </nav>
        </div>
    );
};

export default Header;