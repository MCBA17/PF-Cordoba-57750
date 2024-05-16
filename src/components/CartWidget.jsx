import React from 'react'
import cart from "../images/cart.png"

const CartWidget = ({NumeroDeObjetos}) => {
  return (
    <div className="nav-cart-container" alt="carrito">
    <img className="nav-cart" src={cart} alt="logo"/>
    <span className="cart-number">{NumeroDeObjetos}</span>
    </div>
  )
}

export default CartWidget