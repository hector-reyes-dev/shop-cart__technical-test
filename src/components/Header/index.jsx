import React from "react";
import Search from "@components/Search";
import logo from "@logos/logo.svg";
import menuIcon from "@icons/icon_menu.svg";
import cartIcon from "@icons/icon_shopping_cart.svg";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="header-info-container">
        <img className="header-logo" src={logo} alt="Logotipo Chedraui" />
        <img className="header-menu-icon" src={menuIcon} alt="Menú" />
        <h1>Departamentos</h1>
      </div>
      <div className="header-search-container">
        <Search />
      </div>
      <div className="header-actions-container">
        <h4 className="header-location-button">Agregar mi ubicación</h4>
        <div className="header-cart-button">
          <img src={cartIcon} alt="Icono de carrito" />
        </div>
      </div>
      <div className="nav-container">
        <nav>
          <ul>
            <li>Selecto</li>
            <li>Martimiércoles</li>
            <li>Chedrauilandia</li>
            <li>Mundial</li>
            <li>Colecciones navideñas</li>
          </ul>
        </nav>
        <div className="login-container">
          <a className="login" href="/">
            Ingresar
          </a>
          <a className="help" href="/">
            Ayuda
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
