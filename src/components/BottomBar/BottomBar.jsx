import React from 'react';
import "./styles.css";
import { useNavigate, useLocation } from 'react-router';

const BottomBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const route = location.pathname.split("/");

  return (
    <div className='bottomBar-container' data-testid="bottomBar">
      <ul className='bottomBar-list'>
        <li className={route[1] === "home" ? 'bottomBar-selected' : ""} onClick={() => navigate("/home")}>
          <i className="material-icons-outlined">home</i>
          Home
        </li>
        <li className={route[1] === "search" ? 'bottomBar-selected' : ""} onClick={() => navigate("/search")}>
          <i className="material-icons-outlined">search</i>
          Search 
        </li>
        <li className={route[1] === "category" ? 'bottomBar-selected' : ""} onClick={() => navigate("/category")}>
          <i className="material-icons-outlined">grid_view</i>
          Category
        </li>
        <li className={route[1] === "cart" ? 'bottomBar-selected' : ""} onClick={() => navigate("/cart")}>
          <i className="material-icons-outlined">shopping_bag</i>
          Cart
        </li>
        <li className={route[1] === "account" ? 'bottomBar-selected' : ""} onClick={() => navigate("/account")}>
          <i className="material-icons-outlined">person</i>
          Account
        </li>
      </ul>
    </div>
  )
}

export default BottomBar