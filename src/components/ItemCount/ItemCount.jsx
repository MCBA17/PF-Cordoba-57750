import { useState } from "react";
import Swal from "sweetalert2";

const ItemCount = ({ stock, addProduct }) => {
  const [count, setCount] = useState(1);

  const handleClickDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleClickIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleClickAddToCart = () => {
    addProduct(count);
    Swal.fire({
      title: "Se ha agreado al carrito!",
      icon: "success"
    });
  };

  return (
    <div className="itemcount">
      <div className="itemcount-button-container">
        <button className="itemcount-button" onClick={handleClickDecrement} >-</button>
        <p className="itemcount-number">{count}</p>
        <button className="itemcount-button" onClick={handleClickIncrement}>+</button>
      </div>
      <button className="itemcount-submit" onClick={handleClickAddToCart}>Agregar al carrito</button>
    </div>
  );
};
export default ItemCount;