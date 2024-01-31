import React from 'react'

function Resume() {
    return (
        <>
            <div className="container-lg">
                <section className="resume">
                    <div className="section-title">
                        <h2>Resume</h2>
                        <p>Check my resume</p>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="resume-sec">
                                <h3 className="resume-title">Summary</h3>
                                <p className="fst-italic">Innovative, task-driven Frontend Developer with 3 years of experience in developing and implementing engaging user interfaces. Proficient in HTML, CSS, and JavaScript, with a strong focus on responsive web development, cross-browser compatibility, and performance enhancement.</p>
                            </div>
                            <div className="resume-sec">
                                <h3 className="resume-title">Education & Certifications</h3>
                                <div className="resume-item">
                                    <h4>Bachelor of Computer Applications</h4>
                                    <p className="d-flex justify-content-between align-items-center fst-italic">IGNOU University<span className="tag">2019 - 2022</span></p>
                                </div>
                                <div className="resume-item">
                                    <h4>Intermediate(12th)</h4>
                                    <p className="d-flex justify-content-between align-items-center fst-italic">Punjab University<span className="tag">2018 - 2019</span></p>
                                </div>
                                <div className="resume-item">
                                    <h4>Matriculation(10th)</h4>
                                    <p className="d-flex justify-content-between align-items-center fst-italic">Punjab University<span className="tag">2013 - 2014</span></p>
                                </div>
                                
                                {/* <div className="resume-item">
                                    <h4><a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20Nordics/PxenP4rHNE6Bh4nQz_Accenture%20Nordics_FTz3DdCfP3AqEYDpG_1673691863221_completion_certificate.pdf" rel="noopener noreferrer" target="_blank">Developer Virtual Experience Program<i className="bi bi-arrow-up-short"></i></a></h4>
                                    <p className="d-flex justify-content-between align-items-center fst-italic">Accenture Nordics - Forage<span className="tag">Jan 2023</span></p>
                                </div> */}
                                {/* <div className="resume-item">
                                    <h4><a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/JPMorgan%20Chase%20%26%20Co./5QiaMtZ4k8ngYKn4D_JPMorgan%20Chase%20%26%20Co._FTz3DdCfP3AqEYDpG_1687531989001_completion_certificate.pdf" rel="noopener noreferrer" target="_blank">Agile Virtual Experience Program<i className="bi bi-arrow-up-short"></i></a></h4>
                                    <p className="d-flex justify-content-between align-items-center fst-italic">JPMorgan Chase & Co. - Forage<span className="tag">Jun 2023</span></p>
                                </div> */}
                            </div>
                            <div className="resume-sec">
                                <h3 className="resume-title">TECHNOLOGY STACK</h3>
                                <p className="d-flex flex-wrap fst-italic techstack-items">
                                    <span className="tag mb-1">HTML</span>
                                    <span className="tag mb-1">HTML5</span>
                                    <span className="tag mb-1">CSS</span>
                                    <span className="tag mb-1">CSS3</span>
                                    <span className="tag mb-1">CSS FLEX</span>
                                    <span className="tag mb-1">Flexbox</span>
                                    <span className="tag mb-1">CSS GRID</span>
                                    <span className="tag mb-1">SCSS</span>
                                    <span className="tag mb-1">JavaScript</span>
                                    <span className="tag mb-1">jQuery</span>
                                    <span className="tag mb-1">Bootstrap</span>
                                    <span className="tag mb-1">Wordpress</span>
                                    <span className="tag mb-1">Figma</span>
                                    <span className="tag mb-1">Xd</span>
                                    <span className="tag mb-1">Github</span>
                                    <span className="tag mb-1">React JS</span>
                                    <span className="tag mb-1">Adobe Target</span>
                                    <span className="tag mb-1">DOM manipulation</span>
                                    <span className="tag mb-1">Responsive web design</span>
                                    <span className="tag mb-1">Cross-browser compatibility</span>
                                    <span className="tag mb-1">Site troubleshooting</span>
                                    <span className="tag mb-1">Performance optimization</span>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="resume-sec">
                                <h3 className="resume-title">Professional Experience</h3>
                                <div className="resume-item">
                                    <h4>Frontend Developer</h4>
                                    <p className="d-flex justify-content-between align-items-center fst-italic">Sandvok Softwares<span>2021 - Present</span></p>
                                    <ul className="ps-3">
                                        <li>Implemented HTML, CSS, and JavaScript to create visually appealing and interactive user interfaces, resulting in a 15% increase in user engagement and a 10% decrease in bounce rate.</li>
                                        <li>Ensured cross-browser compatibility by employing best practices and conducting thorough testing across multiple browsers and devices, achieving a 99% compatibility rate.</li>
                                        <li>Identified and resolved frontend bugs and issues, resulting in a 20% reduction in frontend problems.</li>
                                        <li>Optimized website performance through efficient coding practices, including minification and compression techniques, resulting in a 30% improvement in load times and a 25% increase in page speed score.</li>
                                        <li>Actively participated in code reviews, providing constructive feedback and suggestions to enhance code quality and maintainability, resulting in a 15% decrease in code-related bugs.</li>
                                        <li>Actively engaged in project planning and estimation, providing valuable insights into frontend development efforts and timelines, resulting in a 95% accuracy rate in project completion estimations and a 20% increase in project delivery efficiency.</li>
                                    </ul>
                                </div>
                                <div className="resume-item">
                                    <h4>Frontend Developer(Intern)</h4>
                                    <p className="d-flex justify-content-between align-items-center fst-italic">Teamoxio Technologies Private Limited<span>2020 - 2021</span></p>
                                    <ul className="ps-3">
                                        <li>Maintain and improve the aesthetic and functionality of client's websites.</li>
                                        <li>Translated wireframes and mockups into fully functional web pages, delivering projects with a 98% accuracy rate.</li>
                                        <li>Designed banners and posters for businesses, resulting in a 20% increase in brand visibility and a 25% improvement in customer engagement.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Resume
