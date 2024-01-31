import React from 'react'
import featureImage1 from "../../images/feature-project-1.webp"
import featureImage2 from "../../images/feature-project-2.webp"
function Projects() {
    return (
        <>
            <div className="container-lg">
                <section className="projects">
                    <div className="section-title">
                        <h2>Projects</h2>
                        <p>Things I've Built</p>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="projects-sec">
                                <div className="feature-project">
                                    <div className="project-content">
                                        <p className="project-heading">Featured Project</p>
                                        <h4 className="project-title"><a href="https://ipiyushchaudhary.github.io/Theshadehome" rel="noopener noreferrer" target="_blank">The Shade Home</a></h4>
                                        <p className="project-summary">This redesign project aims to not only enhance the visual appeal of the website but also to improve user engagement through a responsive and user-friendly design.</p>
                                        <ul className="project-stack">
                                            <li>HTML5</li>
                                            <li>CSS3</li>
                                            <li>JavaScript</li>
                                            <li>Bootstrap</li>
                                            <li>jQuery</li>
                                        </ul>
                                        <div className="project-links">
                                            <a href="https://github.com/ipiyushchaudhary/Theshadehome" rel="noopener noreferrer" target="_blank"><i className="bi bi-github"></i></a>
                                            <a href="https://ipiyushchaudhary.github.io/Theshadehome" rel="noopener noreferrer" target="_blank"><i className="bi bi-box-arrow-up-right"></i></a>
                                        </div>
                                    </div>
                                    <div className="project-cover">
                                        <a href="https://ipiyushchaudhary.github.io/Theshadehome" rel="noopener noreferrer" target="_blank">
                                            <img className="img-fluid" src={featureImage1} alt="project cover"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="feature-project feature-project--right">
                                    <div className="project-content">
                                        <p className="project-heading">Featured Project</p>
                                        <h4 className="project-title"><a href="https://ipiyushchaudhary.github.io/edge-dashboard/" rel="noopener noreferrer" target="_blank">Edge Dashboard</a></h4>
                                        <p className="project-summary">This web dashboard project aims to deliver a desktop-oriented solution that empowers users with advanced data management capabilities, leveraging HTML, CSS, JavaScript, and the DataTables library.</p>
                                        <ul className="project-stack">
                                            <li>HTML5</li>
                                            <li>CSS3</li>
                                            <li>JavaScript</li>
                                            <li>DataTables</li>
                                        </ul>
                                        <div className="project-links">
                                            <a href="https://github.com/ipiyushchaudhary/edge-dashboard/" rel="noopener noreferrer" target="_blank"><i className="bi bi-github"></i></a>
                                            <a href="https://ipiyushchaudhary.github.io/edge-dashboard/" rel="noopener noreferrer" target="_blank"><i className="bi bi-box-arrow-up-right"></i></a>
                                        </div>
                                    </div>
                                    <div className="project-cover">
                                        <a href="https://ipiyushchaudhary.github.io/edge-dashboard/" rel="noopener noreferrer" target="_blank">
                                            <img className="img-fluid" src={featureImage2} alt="project cover"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="projects-sec">
                                <h3 className="projects-title">Other Projects</h3>
                                <div className="row row-gap-4">
                                    <div className="col-lg-4 col-sm-6 col-12">
                                        <div className="project-card">
                                            <div className="card-header">
                                                <span className="folder-icon"><i className="bi bi-folder"></i></span>
                                                <div className="project-links">
                                                    <a href="https://github.com/ipiyushchaudhary/Food4you" rel="noopener noreferrer" target="_blank"><i className="bi bi-github"></i></a>
                                                    <a href="https://ipiyushchaudhary.github.io/Food4you/" rel="noopener noreferrer" target="_blank"><i className="bi bi-box-arrow-up-right"></i></a>
                                                </div>
                                            </div>
                                            <h4 className="project-title"><a href="https://ipiyushchaudhary.github.io/Food4you/" rel="noopener noreferrer" target="_blank">Food4you </a></h4>
                                            <p className="project-summary">This Fully Responsive HTML5 Food Website project aims to deliver a visually appealing and user-friendly online presence for a food business, combining HTML5, CSS, and Bootstrap v4.6 to create a seamless and delightful experience for visitors on all devices.</p>
                                            <ul className="project-stack">
                                                <li>HTML</li>
                                                <li>CSS</li>
                                                <li>JS</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 col-12">
                                        <div className="project-card">
                                            <div className="card-header">
                                                <span className="folder-icon"><i className="bi bi-folder"></i></span>
                                                <span className="project-links">
                                                    <a href="https://github.com/ipiyushchaudhary/stacks-fiscal-v2" rel="noopener noreferrer" target="_blank"><i className="bi bi-github"></i></a>
                                                    <a href="https://ipiyushchaudhary.github.io/stacks-fiscal-v2/" rel="noopener noreferrer" target="_blank"><i className="bi bi-box-arrow-up-right"></i></a>
                                                </span>
                                            </div>
                                            <h4 className="project-title"><a href="https://ipiyushchaudhary.github.io/stacks-fiscal-v2/" rel="noopener noreferrer" target="_blank">Stacks Fiscal v2</a></h4>
                                            <p className="project-summary">This Admin Dashboard aims to deliver a responsive, visually appealing, and feature-rich interface by utilizing HTML, CSS, JavaScript, and the Highcharts library. The focus is on creating a powerful tool that simplifies data analysis and decision-making, enhancing the overall efficiency of administrative tasks.</p>
                                            <ul className="project-stack">
                                                <li>HTML</li>
                                                <li>CSS</li>
                                                <li>JS</li>
                                                <li>HighChart</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 col-12">
                                        <div className="project-card">
                                            <div className="card-header">
                                                <span className="folder-icon"><i className="bi bi-folder"></i></span>
                                                <span className="project-links">
                                                    <a href="https://github.com/ipiyushchaudhary/stacks-fiscal-v1" rel="noopener noreferrer" target="_blank"><i className="bi bi-github"></i></a>
                                                    <a href="https://ipiyushchaudhary.github.io/stacks-fiscal-v1/" rel="noopener noreferrer" target="_blank"><i className="bi bi-box-arrow-up-right"></i></a>
                                                </span>
                                            </div>
                                            <h4 className="project-title"><a href="https://ipiyushchaudhary.github.io/stacks-fiscal-v1/" rel="noopener noreferrer" target="_blank">Stacks Fiscal v1</a></h4>
                                            <p className="project-summary">This Admin Dashboard aims to deliver a responsive, visually appealing, and feature-rich interface by utilizing HTML, CSS, JavaScript, and the Highcharts library. The focus is on creating a powerful tool that simplifies data analysis and decision-making, enhancing the overall efficiency of administrative tasks.</p>
                                            <ul className="project-stack">
                                                <li>HTML</li>
                                                <li>CSS</li>
                                                <li>JS</li>
                                                <li>HighChart</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="project-card">
                                            <div className="card-header">
                                                <span className="folder-icon"><i className="bi bi-folder"></i></span>
                                                <span className="project-links">
                                                    <a href="https://github.com/ipiyushchaudhary/upload-panel" rel="noopener noreferrer" target="_blank"><i className="bi bi-github"></i></a>
                                                    <a href="https://ipiyushchaudhary.github.io/upload-panel/" rel="noopener noreferrer" target="_blank"><i className="bi bi-box-arrow-up-right"></i></a>
                                                </span>
                                            </div>
                                            <h4 className="project-title"><a href="https://ipiyushchaudhary.github.io/upload-panel/" rel="noopener noreferrer" target="_blank">Upload Panel</a></h4>
                                            <p className="project-summary">This small-scale Upload Panel project aims to provide a simple and effective solution for file uploads, leveraging HTML, CSS, and JavaScript.</p>
                                            <ul className="project-stack">
                                                <li>HTML</li>
                                                <li>CSS</li>
                                                <li>JS</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="project-card">
                                            <div className="card-header">
                                                <span className="folder-icon"><i className="bi bi-folder"></i></span>
                                                <span className="project-links">
                                                    <a href="https://github.com/ipiyushchaudhary/Hotel" rel="noopener noreferrer" target="_blank"><i className="bi bi-github"></i></a>
                                                    <a href="https://ipiyushchaudhary.github.io/Hotel/" rel="noopener noreferrer" target="_blank"><i className="bi bi-box-arrow-up-right"></i></a>
                                                </span>
                                            </div>
                                            <h4 className="project-title"><a href="https://ipiyushchaudhary.github.io/Hotel/" rel="noopener noreferrer" target="_blank">Hotel</a></h4>
                                            <p className="project-summary">This Fully Responsive Hotel Single Web Page project aims to provide an immersive and convenient experience for potential guests, combining HTML, CSS, and JavaScript to showcase the hotel's offerings and encourage bookings.</p>
                                            <ul className="project-stack">
                                                <li>HTML</li>
                                                <li>CSS</li>
                                                <li>JS</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Projects
