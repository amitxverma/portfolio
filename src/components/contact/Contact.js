import React from 'react'

function Contact() {
    return (
        <>
            <div className="container-lg">
                <section className="contact">
                    <div className="section-title">
                        <h2>Contact</h2>
                        <p>Get In Touch</p>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 card-wrapper">
                            <div className="card">
                                <div className="card-icon"><i className="bi bi-envelope"></i></div>
                                <div className="card-content">
                                    <h3 className="card-title">Email Me</h3>
                                    <p className="card-detail"><a href="mailto:amitverma7595@outlook.com">amitverma7595@outlook.com</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 card-wrapper">
                            <div className="card">
                                <div className="card-icon"><i className="bi bi-telephone"></i></div>
                                <div className="card-content">
                                    <h3 className="card-title">Call Me</h3>
                                    <p className="card-detail"><a href="tel:+9779805146">+91-97798-05146</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 card-wrapper">
                            <div className="card">
                                <div className="card-icon"><i className="bi bi-geo-alt"></i></div>
                                <div className="card-content">
                                    <h3 className="card-title">My Address</h3>
                                    <p className="card-detail">Ludhiana, Punjab, IN 141116</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 card-wrapper">
                            <div className="card">
                                <div className="card-icon"><i className="bi bi-share"></i></div>
                                <div className="card-content">
                                    <h3 className="card-title">Social Profiles</h3>
                                    <div className="social-profiles">
                                        <a href="https://www.linkedin.com/in/amitverma7595" rel="noopener noreferrer" target="_blank" className="social-profiles-item"><i className="bi bi-linkedin"></i></a>
                                        <a href="https://github.com/amitxverma" rel="noopener noreferrer" target="_blank" className="social-profiles-item"><i className="bi bi-github"></i></a>
                                        <a href="mailto:amitverma7595@outlook.com" className="social-profiles-item"><i className="bi bi-envelope-fill"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-12">
                            <div className="card">
                                <form className="contact-form">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-control-wrapper mb-3">
                                                <label htmlFor="nameInputControl" className="form-label" hidden>Your Name</label>
                                                <input type="text" className="form-control" id="nameInputControl" name="nameInput" placeholder="Your Name" required />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-control-wrapper mb-3">
                                                <label htmlFor="emailInputControl" className="form-label" hidden>Email address</label>
                                                <input type="email" className="form-control" id="emailInputControl" name="emailInput" placeholder="Your Email" required />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-control-wrapper mb-3">
                                                <label htmlFor="subjectInputControl" className="form-label" hidden>Subject</label>
                                                <input type="text" className="form-control" id="subjectInputControl" name="subjectInput" placeholder="Subject" required />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-control-wrapper mb-3">
                                                <label htmlFor="messageInputControl" className="form-label" hidden>Message</label>
                                                <textarea className="form-control" id="messageInputControl" name="messageInput" placeholder="Message" rows="5" required></textarea>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button type="submit" className="btn btn-primary submitBtn">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div> */}
                    </div>
                </section>
            </div>
        </>
    )
}

export default Contact
