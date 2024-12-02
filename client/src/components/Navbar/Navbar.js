import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <div className="container navbar-container py-2 sticky-top">
            <nav className="navbar navbar-expand-lg bg-body-red">
                <div className="container-fluid">
                    <div className="navbar-name">
                        <h3>HABIB</h3>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/about">About</Link>
                            <Link className="nav-link" to="/work">Work</Link>
                            <Link className="nav-link" to="/services">Services</Link>
                            <Link className="nav-link" to="/resume">Resume</Link>
                            <Link className="nav-link" to="/contact">Contact</Link>
                            <Link className="nav-link" to="/blog">Blogs</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
