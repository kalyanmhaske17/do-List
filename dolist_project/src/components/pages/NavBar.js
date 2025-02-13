import React from 'react'
import { NavLink } from 'react-router-dom'
function NavBar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <NavLink
            className="navbar-brand rounded-pill border p-2 px-3 fw-bold bg-light shadow-sm"to="#">do List</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
      <li className="nav-item">
          <NavLink  className="nav-link active" aria-current="page" to="/home">Home</NavLink> 
        </li>
        <li className="nav-item">
          <NavLink  className="nav-link "  to="/about">About</NavLink> 
        </li>
        <li className="nav-item">
          <NavLink  className="nav-link" to="/features">Features</NavLink> 
        </li>
        <li className="nav-item">
          <NavLink  className="nav-link" to="#">More Options</NavLink> 
        </li>
        <li className="nav-item">
          <NavLink  className="nav-link me-5" to="/contact">Contact</NavLink> 
        </li>
     
    
        <li className="nav-item">
          <NavLink  className="btn btn-outline-success me-2" to="/login">Login</NavLink> 
        </li>
        <li className="nav-item">
          <NavLink  className="btn btn-outline-danger me-2" to="/signup">Sign Up</NavLink> 
        </li>
        </ul>
    </div>
  </div>
</nav>

    
    </>
  )
}

export default NavBar