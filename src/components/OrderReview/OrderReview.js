import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProduct';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products] = useProducts([]);
    const [cart , setCart] = useCart(products);
    const handleRemove = key => {
        const newCart = cart.filter(pd => pd.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem
                    key={product.key}
                    handleRemove = {handleRemove}
                    product={product}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                    <Cart cart={cart}>
                    <Link to="/shipping"><button className="btn-regular">Procced to Order</button></Link>
                    </Cart>
            </div>
        </div>
    );
};

export default OrderReview;