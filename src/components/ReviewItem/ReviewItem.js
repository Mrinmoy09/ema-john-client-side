import React from 'react';

const ReviewItem = (props) => {
    const {handleRemove} = props;
    const {name ,price , quantity , img , key} = props.product;
    return (
        <div className="product">
          <div>
              <img src={img} alt="" />
          </div>
          <div>
          <h3 className="product-name">{name}</h3>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <button className="btn-regular" onClick={()=>handleRemove(key)}>Remove Itme</button>
          </div>
        </div>
    );
};

export default ReviewItem;