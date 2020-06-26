import React from 'react';
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
            <div className="container">
                <h2>
                    <Link to={"/"} className="text-light">
                        CRUD - REACT, REDUX, API REST & AXIOS
                    </Link>
                </h2>
            </div>

            <Link to={"/products/new"}
                className="btn btn-danger nuevo-post d-block d-md-inline-block"
            >
                Agregar Producto &#43;
            </Link>
        </nav>
    )
}

export default Header;