import React from 'react';
import { Link ,useLocation,useHistory} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './LogIn.css';

const LogIn = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const redirect_url = location.state?.from || '/shop'

    const history = useHistory()

    const handleGoogleLogIn = () => {
        signInUsingGoogle()
        .then(res => {
            history.push(redirect_url);
        })
    }

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Log In</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your email" /><br />
                    <input type="password" name="" id="" /><br />
                    <input type="submit" value="Submit" />
                </form>
                <p>new to ema-john <Link to="/register">Create New account</Link></p>
                <br />
                <br />
                <button className="btn-regular" onClick={handleGoogleLogIn}>sign-in with google</button>
            </div>
        </div>
    );
};

export default LogIn;