import React from "react";
import logo from "../assets/amazon-white.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img className="header--logo" src={logo} alt="" />
      </Link>

      <div className="header--search">
        <input type="text" className="header--searchInput" />
        <SearchIcon className="header--searchIcon" />
      </div>

      <div className="header--nav">
        <div className="header--option">
          <span className="header--optionLineOne">Hello Guest</span>
          <span className="header--optionLineTwo">Sign in</span>
        </div>

        <div className="header--option">
          <span className="header--optionLineOne">Returns</span>
          <span className="header--optionLineTwo">& Orders</span>
        </div>

        <div className="header--option">
          <span className="header--optionLineOne">Your</span>
          <span className="header--optionLineTwo">Prime</span>
        </div>

        <Link className="checkout--link" to="/checkout">
          <div className="header--optionBasket">
            <ShoppingBasketIcon />
            <span className="header--optionLineTwo header--basketCount">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
