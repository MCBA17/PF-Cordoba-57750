import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { carrito, vaciarCarrito, borrarProductoPorId, precioTotal } = useContext(CartContext);

  if (carrito.length === 0) {
    return (
      <div className="cart-empty">
        <h1>Aún no hay productos en el Carrito...</h1>
        <Link className="link-1" to="/">Ver catálogo</Link>
      </div>
    );
  }

  return (
    <div className="cart">
      <h1>Carrito de compras</h1>
      {carrito.map((productoCarrito) => (
        <div className="cart-item" key={productoCarrito.id}>
          <img className="cart-img" src={productoCarrito.image1} alt={productoCarrito.name} />
          <h3> {productoCarrito.name} </h3>
          <h3> Cantidad: {productoCarrito.quantity} </h3>
          <h3> Precio c/u: {productoCarrito.price} </h3>
          <button className="delete-button" onClick={() => borrarProductoPorId(productoCarrito.id)}>Eliminar</button>
        </div>
      ))}
      <h2>Total de la compra : ${precioTotal()}</h2>
      <Link to="/checkout" className="button-link">Continuar con mi compra</Link>
      <div className="button-delete" onClick={vaciarCarrito}>Vaciar carrito</div>
    </div>
  );
};

export default Cart;
