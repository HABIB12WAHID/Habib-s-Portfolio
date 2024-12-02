import React from 'react'
import './Navbar.css'

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
                            <a className="nav-link active" href="/">Home</a>
                            <a className="nav-link" href="/">About</a>
                            <a className="nav-link" href="/">Work</a>
                            <a className="nav-link" href="/">Services</a>
                            <a className="nav-link" href="/">Resume</a>
                            <a className="nav-link" href="/">Contact</a>
                            <a className="nav-link" href="/">Blogs</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
