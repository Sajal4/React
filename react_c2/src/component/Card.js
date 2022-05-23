import React from 'react'
import Button from './Button';

const Card =(props)=> {
    const {image, productName, price}= props;
  return (
    <div className='product_card'>
        <img src={image} alt={productName}/>
        <h4>{productName}</h4>
        <p>price</p>
        <Button buttonText="Buy Now" />
    </div>
  );
};

export default Card