import React from 'react'
// import myPic from "../../images/me.webp"
import myPic from "../../images/myimage.jpeg"
import { useInView } from 'react-intersection-observer';

function About() {
    const { ref, inView } = useInView({
        root: null,
        rootMargin: "0px",
        threshold: 0.25,
    });
    return (
        <>
            <div className="container-lg">
                <section className="about">
                    <div className="section-title">
                        <h2>About</h2>
                        <p>Learn more about me</p>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <img src={myPic} className="img-fluid about-image" alt="user_image" />
                        </div>
                        <div className="col-sm-8">
                            <h3 className="mt-sm-0 mt-3 about-role">Frontend UI Developer</h3>
                            <p className="about-summary"><i>Innovative, task-driven professional with <strong>3 years of experience</strong> in frontend development across diverse industries. Proficient in creating user interfaces, writing and testing codes, troubleshooting issues, and implementing new features based on user feedback.</i></p>
                            <p className="about-summary"><i>Here are a few areas in which I've expertise:</i></p>
                            <div className="row about-details">
                                <div className="col-xl-6">
                                    <p>Frontend Development</p>
                                </div>
                                <div className="col-xl-6">
                                    <p>UI & UX Design</p>
                                </div>
                                <div className="col-xl-6">
                                    <p>Responsive Web Design</p>
                                </div>
                                <div className="col-xl-6">
                                    <p>Cross-Browser Compatibility</p>
                                </div>
                                <div className="col-xl-6">
                                    <p>Site Troubleshooting</p>
                                </div>
                                <div className="col-xl-6">
                                    <p>Performance optimization</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="skills-wrapper">
                        <div className="section-title">
                            <h2>Skills</h2>
                        </div>
                        <div className="row" ref={ref}>
                            <div className="col-md-6 skill-item">
                                <p className="skill-title">HTML <span className="skill-value">95%</span></p>
                                <div className="progress" role="progressbar" aria-label="html">
                                    <div className="progress-bar" style={inView ? { width: '95%' } : { width: '0' }} ></div>
                                </div>
                            </div>
                            <div className="col-md-6 skill-item">
                                <p className="skill-title">CSS & Preprocessor <span className="skill-value">90%</span></p>
                                <div className="progress" role="progressbar" aria-label="css">
                                    <div className="progress-bar" style={inView ? { width: '90%' } : { width: '0' }} ></div>
                                </div>
                            </div>
                            <div className="col-md-6 skill-item">
                                <p className="skill-title">Javascript <span className="skill-value">75%</span></p>
                                <div className="progress" role="progressbar" aria-label="javascript">
                                    <div className="progress-bar" style={inView ? { width: '75%' } : { width: '0' }} ></div>
                                </div>
                            </div>
                            <div className="col-md-6 skill-item">
                                <p className="skill-title">jQuery <span className="skill-value">60%</span></p>
                                <div className="progress" role="progressbar" aria-label="jquery">
                                    <div className="progress-bar" style={inView ? { width: '60%' } : { width: '0' }} ></div>
                                </div>
                            </div>
                            <div className="col-md-6 skill-item">
                                <p className="skill-title">Bootstrap <span className="skill-value">80%</span></p>
                                <div className="progress" role="progressbar" aria-label="bootstrap">
                                    <div className="progress-bar" style={inView ? { width: '80%' } : { width: '0' }} ></div>
                                </div>
                            </div>
                            <div className="col-md-6 skill-item">
                                <p className="skill-title">UX & UI Design <span className="skill-value">75%</span></p>
                                <div className="progress" role="progressbar" aria-label="UI Design">
                                    <div className="progress-bar" style={inView ? { width: '75%' } : { width: '0' }} ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default About
