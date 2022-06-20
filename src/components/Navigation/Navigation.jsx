import React, {useState, useEffect} from 'react';
import './styles.css';
import ButtomBar from '../BottomBar/BottomBar';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = ({Child}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const user = JSON.stringify(sessionStorage.getItem("user"))

  const route = location.pathname.split("/");

  useEffect(() => {
    if(!user){
      navigate("/auth")
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[user])

  const handleMenu = (e) => {
    setMenuOpen(e.target.checked)
  }

  const handleNav = (path) => {
    navigate(path)
    setMenuOpen(false)
  }

  const logoutHandler = () => {
    setMenuOpen(false)
    sessionStorage.clear();
    navigate("/auth")
  }

  return (
    <div className='navigation-container'>
      <div className='navBar-container'>
        <div className='navBar-content-lg'>
          <div className='navBar-logo'>
            LOGO
          </div>
          <ul className='navBar-list'>
            <li onClick={() => handleNav("home")}
              className={route[1] === "home" ? 'navBar-selected' : ""}>Home</li>
            <li onClick={() => handleNav("search")}
              className={route[1] === "search" ? 'navBar-selected' : ""}>Search</li>
            <li onClick={() => handleNav("category")}
              className={route[1] === "category" ? 'navBar-selected' : ""}>Category</li>
            <li onClick={() => handleNav("cart")}
              className={route[1] === "cart" ?  'navBar-selected' : ""}>Cart</li>
          </ul>
        </div>
        <div className='navBar-content-sm'>
          <div>
            <input type="checkbox" id="openSidebarMenu" 
              checked={menuOpen}
              onClick={handleMenu}
              onChange={(e) => {setMenuOpen(e.target.checked)}}/>
            <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
              <div className="spinner top"></div>
              <div className="spinner middle"></div>
              <div className="spinner bottom"></div>
            </label>

            <div id="sidebarMenu">
              <ul className="sidebarMenu-item">
                <li onClick={() => handleNav("home")}>Home</li>
                <li onClick={() => handleNav("search")}>Search</li>
                <li onClick={() => handleNav("category")}>Category</li>
                <li onClick={() => handleNav("about")}> About us</li>
                <li onClick={() => handleNav("account")}>Account</li>
                <li onClick={logoutHandler}>Log out</li>
              </ul>
            </div>
          </div>
          <div>
            <i className="material-icons-outlined" onClick={() => handleNav("search")}>search</i>
            <i className="material-icons-outlined" onClick={() => handleNav("about")}>notifications</i>
            <i className="material-icons-outlined" onClick={() => handleNav("cart")}>shopping_bag</i>
          </div>
        </div>
      </div>
        <Child />
        <ButtomBar />
    </div>
  )
}

export default Navigation