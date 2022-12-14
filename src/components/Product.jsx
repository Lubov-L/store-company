import React from 'react';
import Counter from "./Counter";

const Product = (props) => {
    return (
        <a href="#" id="product">
            <div className="product__image">
                <img src="http://195.133.75.184/images/top-1.jpg" alt="Product"></img>
            </div>
            <div className="product__foot">
                <div>
                    <p className="product__name">{props.product.title}</p>
                    <p className="product__price">{props.product.price}</p>
                </div>
                <div>
                    <Counter/>
                    <img className="product__cart" src="http://195.133.75.184/images/cart.png" alt="Cart"/>
                </div>
            </div>
        </a>
    );
};

export default Product;