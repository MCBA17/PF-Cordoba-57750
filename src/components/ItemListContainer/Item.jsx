import React from 'react'

const Item = ({ product }) => {
  return (
    <div className="item">
      <img
        className="image-item"
        src={product.image1}
        style={{ width: "200px" }}
      />
      <div className="content-item">
        <p>{product.name}</p>
      </div>
    </div>
  );
};
export default Item;
