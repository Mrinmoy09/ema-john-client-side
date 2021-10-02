import React from 'react';
import img from '../../images/giphy.gif';

const PlaceOrder = () => {
    const style = {
        textAlign:"center",
        color:"red",
    }
    return (
        <div style={style}>
            <h1>Order Done</h1>
            <br />
            <img src={img} alt="" />
        </div>
    );
};

export default PlaceOrder;