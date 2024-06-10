import React from 'react'
import logo from "../../images/goldenpalace1.png"
import CartWidget from '../CartWidget/CartWidget';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link to={"/"}><img className="nav-logo" src={logo} alt="logo"/></Link>
    <Link to={"/"} className="navbar-brand golden-palace">Golden Palace</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
        <Link to={"/"} className="btn btn-dark" aria-current="page" href="#">Inicio</Link>
        </li>
        <li class="nav-item dropdown">
          <button class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Género
          </button>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><Link to={"/genre/Masculino"} class="dropdown-item" href="#">Masculino</Link></li>
            <li><Link to={"/genre/Femenino"} class="dropdown-item" href="#">Femenino</Link></li>
            <li><Link to={"/genre/Genderless"} class="dropdown-item" href="#">Unisex</Link></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <button class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Marca
          </button>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><Link to={"/brand/Rabanne"} class="dropdown-item" href="#">Rabanne</Link></li>
            <li><Link to={"/brand/Dior"} class="dropdown-item" href="#">Dior</Link></li>
            <li><Link to={"/brand/Jean Paul Gaultier"} class="dropdown-item" href="#">Jean Paul Gaultier</Link></li>
            <li><Link to={"/brand/Calvin Klein"} class="dropdown-item" href="#">Calvin Klein</Link></li>
            <li><Link to={"/brand/Carolina Herrera"} class="dropdown-item" href="#">Carolina Herrera</Link></li>
          </ul>
        </li>
      </ul>
      <CartWidget />
    </div>
  </div>
</nav>
  )
}

export default NavBar