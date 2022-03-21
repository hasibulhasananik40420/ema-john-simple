import React from 'react';
import './Product.css'
const Product = (props) => {
    const {img,name,seller,price,ratings} = props.product
    const {handleAddToCart} = props
    return (
        <div className='product'>
           
            <img src={img} alt="" />
            <div className="product-details">
            <p className='name'> {name}</p>
            <p>Price: ${price}</p>
            <p><small>Manufacturer : {seller}</small></p>
            <p><small>Rating : {ratings} star</small></p>
          </div>
           <button onClick={()=>props.handleAddToCart(props.product)} className='btn-cart'> <p>Add to Cart</p></button>
        </div>
    );
};

export default Product;