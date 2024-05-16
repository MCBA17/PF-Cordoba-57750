import React from 'react'
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <Link to={`/detail/${product.id}`}>
    <div className="item">
      <img
        className="image-item"
        src={product.image1}
        alt='img'
      />
      <div className="content-item">
        <p>{product.name}</p>
      </div>
    </div>
    </Link>
  );
};
export default Item;
