
import React from 'react'
import { Link, NavLink } from 'react-router-dom'; 

import '../assets/css/navBar.css'
import Lupa from '../assets/images/lupa.svg'

export default function NavBar() {

    return (
    <>
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <form className="d-flex" action="">
                    <input className="form-control buscador" type="search" placeholder="¿Qué buscas?" aria-label="Search" />
                    <img className="lupa" src={Lupa} alt=""></img>
                </form>
                <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="links" to="/"></Link>
                            </li>
                            <li className="nav-item">
                                <NavLink className="links" exact to="/entertainment">ENTRETENIMIENTO</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="links" exact to="/general">GENERAL</NavLink>
                            </li>
                            <li className="nav-item">
                                 <NavLink className="links" exact to="/health">SALUD</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="links" exact to="/science">CIENCIAS</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="links" exact to="/sports">DEPORTES</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="links" exact to="/technology">TECNOLOGIA</NavLink>
                            </li>
                        </ul>
                        <button className="btn btn-light cerrar-sesion" >que tal</button>
                        </div>
                </div>
            </nav>
        </div>  
    </>
    )
}