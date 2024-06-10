import React from 'react'
import { Link } from "react-router-dom";
import cart from "../../images/cart.png"
import { CartContext } from '../../context/CartContext';
import { useContext } from "react";

const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext)

  let cantidad = cantidadTotal()
  return (
    <Link to="/cart">
    <div className="nav-cart-container" alt="carrito">
    <img className="nav-cart" src={cart} alt="logo"/>
    <p className="cart-number"> { cantidad } </p>
    </div>
    </Link>
  )
}

export default CartWidget