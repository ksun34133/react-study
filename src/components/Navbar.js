import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link" activeClassName="nav-active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/category" className="nav-link" activeClassName="nav-active">
              Category
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/products" className="nav-link" activeClassName="nav-active">
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
