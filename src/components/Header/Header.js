import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const {user,googleSignOut} = useAuth();
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink className="a" to="/shop">Shop</NavLink>
                <NavLink className="a" to="/orders">Order Review</NavLink>
                <NavLink className="a" to="/inventory">Manage Inventory</NavLink>
                <span style={{color:'white'}}>{user.displayName} </span>
                {
                    user.email?
                    <button onClick={googleSignOut}>Sign Out</button>
                    :
                    <NavLink className="a" to="/login">Log-In</NavLink>
                }
            </nav>
        </div>
    );
};

export default Header;