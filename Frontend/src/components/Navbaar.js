import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbaar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">FTF APPLICATION</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="pdefaite" href="#">Acceuil</a>
                            </li>
                          
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Rechercher ici" aria-label="Search" />
                            <button className ="btn btn-outline-success" type ="submit">Recherche</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbaar
