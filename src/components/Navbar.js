import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#e3f2fd"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><i className="fa fa-book" aria-hidden="true"></i> Happy reading</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" to='/'>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/read'>Currentliy reading</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/fev'>Fevorite books</NavLink>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="button">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
