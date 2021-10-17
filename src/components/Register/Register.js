import React from 'react';
import { Link } from 'react-router-dom';
import "./Register.css";

const Register = () => {
    return (
        <div className="regi-container">
            <div>
                <h2>Create Account</h2>
                <form onSubmit="">
                <h4>Your Name:</h4>
                <input type="text" /><br />
                <h4>Your Email:</h4>
                <input type="email" name="" id="" /><br />
                <h4>Password</h4>
                <input type="password" name="" id="" />
                <h4>Re-enter Password</h4>
                <input type="password" name="" id="" />
                <br />
                <input type="submit" value="Submit" />
                </form>
                <p>Already Have a account?<Link to="/login">Log-In</Link></p>
                <br />
                <div>-----or-----</div>
                <button className="btn-regular">sign-in with google</button>
            </div>
        </div>
    );
};

export default Register;