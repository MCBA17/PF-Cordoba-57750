import React from 'react'
import logo from "../../images/goldenpalace1.png"
import CartWidget from "../CartWidget"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a href="#"><img className="nav-logo" src={logo} alt="logo"/></a>
    <a className="navbar-brand golden-palace" href="#">Golden Palace</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Shop</a>
        </li>
      </ul>
      <CartWidget NumeroDeObjetos="2" />
    </div>
  </div>
</nav>
  )
}

export default NavBar