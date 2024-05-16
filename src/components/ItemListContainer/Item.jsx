import React from 'react'
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <Link to={`/detail/${product.name}/${product.id}`} className='link-style'>
    <div className="item">
      <img
        className="image-item"
        src={product.image1}
        alt='img'
      />
      <div className="content-item">
        <p className='item-name'>{product.name}</p>
        <p className='item-brand'>{product.brand}</p>
      </div>
    </div>
    </Link>
  );
};
export default Item;
