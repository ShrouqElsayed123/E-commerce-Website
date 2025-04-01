// import { Container, Nav } from 'react-bootstrap'

import { NavLink } from 'react-router-dom'
import logo from '../../assets/imgs/freshcart-logo.svg'
import './Navbar.css'
import { useContext } from 'react'
import { tokenContext } from '../context/User.context'
export default function Navbar() {
  const {token,logOut}=useContext(tokenContext)
  return (
   <>
 <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <NavLink className="navbar-brand" to="#"><img src={logo} alt='cart logo'/></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     {token && <>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className={function({isActive}){return isActive?"nav-link text-white bg-success":"nav-link";}}  to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={function({isActive}){return isActive?"nav-link text-white bg-success":"nav-link";}} to="/login">Cart</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={function({isActive}){return isActive?"nav-link text-white bg-success":"nav-link";}} to="/signup">Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={function({isActive}){return isActive?"nav-link text-white bg-success":"nav-link";}} to="/signup">Categories</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={function({isActive}){return isActive?"nav-link text-white bg-success":"nav-link";}} to="/signup">Brands</NavLink>
        </li>
      </ul>

      <div className='nav-cart'>
      <i className="fa-solid fa-cart-shopping "></i>
      <p className='cart-number'>0</p>
      </div>
     </>}

      <ul className={`d-flex navbar-nav justify-content-between align-items-center ms-5 ${!token && "ms-auto"}`}>
        <li className="nav-item"><i className="nav-icon fa-brands fa-instagram"></i></li>
        <li className="nav-item"><i className="nav-icon fa-brands fa-facebook"></i></li>
        <li className="nav-item"><i className="nav-icon fa-brands fa-tiktok"></i></li>
        <li className="nav-item"><i className="nav-icon fa-brands fa-twitter"></i></li>
        <li className="nav-item"><i className="nav-icon fa-brands fa-linkedin"></i></li>
        <li className="nav-item"><i className="nav-icon fa-brands fa-youtube"></i></li>
        {!token && <>
          <li><NavLink className="nav-link" to="/login">Log In </NavLink></li>
          <li><NavLink className="nav-link" to="/signup">Sign Up </NavLink></li>
        </>}
        {token && <>
          <li className="nav-item" onClick={logOut}> <i className="fa-solid fa-right-from-bracket"></i></li>
        </>}
       
      </ul>
    </div>
  </div>
</nav>
   </>
  )
}
