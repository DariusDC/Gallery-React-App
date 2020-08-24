import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";

const Header = ({ optionalBtn, route }) => {
  return (
    <div className="header">
      <h1 className="title">My Gallery</h1>
      <Link to={route}>
        <button>{optionalBtn}</button>
      </Link>
    </div>
  );
};

export default Header;
