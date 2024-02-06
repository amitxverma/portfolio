import React from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';



function Header() {
    const location = useLocation();
    useEffect(() => {
        let bodyelem = document.body;
        if (location.pathname === "/") {
            bodyelem.classList.add("landing");
        } else {
            bodyelem.classList.remove("landing");
        }

        let menu = document.querySelector(".navbar-collapse");
        let navbtn = document.querySelector(".navbar-toggler");
        if(menu.classList.contains("show")){
            navbtn.click();
        }

    }, [location]);

    return (
        <>
            <header className="py-3">
                <div className="container-lg d-flex flex-md-row flex-wrap align-items-center justify-content-between">
                    <div className="col-auto landing-text-wrapper">
                        <p className="landing-text">Hi, my name is</p>
                    </div>
                    <div className="col-auto landing-title-wrapper">
                        <h1 className="landing-title"><Link data-target="home" to="/">Amit Kumar</Link></h1>
                    </div>
                    <div className="col-auto landing-subtitle-wrapper">
                        <h2 className="landing-subtitle">I'm a passionate <span className="portfolio-role">Frontend Developer</span> from India</h2>
                    </div>
                    <nav className="navbar navbar-expand-lg navbar-dark main-navbar ms-lg-0 ms-auto" aria-label="main navbar">
                        <button className="navbar-toggler p-0 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-label="Toggle navigation" aria-expanded="false">
                            <i className="bi bi-list text-light fs-3 position-relative"></i>
                            <i className="bi bi-x text-light fs-3 position-relative"></i>
                        </button>
                        <div className="navbar-collapse collapse" id="mainNav">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-lg-0 pe-3">
                                <li><NavLink to="/" className="nav-link" data-target="home">Home</NavLink></li>
                                <li><NavLink to="/about" className="nav-link" data-target="about">About</NavLink></li>
                                <li><NavLink to="/resume" className="nav-link" data-target="resume">Resume</NavLink></li>
                                // <li><NavLink to="/projects" className="nav-link" data-target="projects">Projects</NavLink></li>
                                <li><NavLink to="/contact" className="nav-link" data-target="contact">Contact</NavLink></li>
                            </ul>
                        </div>
                    </nav>
                    <div className="col-auto landing-social-links">
                        <a href="https://www.linkedin.com/in/amitverma7595" rel="noopener noreferrer" target="_blank" className="social-links-item" aria-label="Go to Linkedin profile"><i className="bi bi-linkedin text-light"></i></a>
                        <a href="https://github.com/amitxverma" rel="noopener noreferrer" target="_blank" className="social-links-item" aria-label="Go to Github profile"><i className="bi bi-github text-light"></i></a>
                        <a href="mailto:amitverma7595@outlook.com" className="social-links-item" aria-label="Send mail"><i className="bi bi-envelope-fill text-light"></i></a>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
