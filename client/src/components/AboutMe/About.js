import React, { useState } from "react";
import "./About.css";

const About = () => {
    const [showMore, setShowMore] = useState(false);

    const handleToggleDetails = () => {
        setShowMore(!showMore);
    };

    return (
        <div className="container about-container p-3">
            <div className="row align-items-center mb-3">
                <div className="col-md-5 text-center mb-4 mb-md-0">
                    <img
                        src="https://img.freepik.com/premium-photo/ai-generated-illustration-cloud-computing-concept-pastel-color_441362-3624.jpg?ga=GA1.1.1286098228.1732528457&semt=ais_hybrid"
                        alt="Profile"
                        className="img-fluid shadow-sm"
                    />
                </div>
                <div className="col-md-7">
                    <div className="text-center">
                        <button className="btn btn-classic">About Me</button>
                    </div>
                    <hr className="hr" />
                    <p className="lead text-muted">
                        Hello! I'm <strong className="semi-bold">`Md Habib`</strong>, a passionate web developer with expertise in Front-end
                        <strong className="bold"> JavaScript, React/React Native, Bootstrap </strong> and Backend <strong className="bold">Node Js, Express Js, MongoDB</strong>. I love solving complex problems and building dynamic, responsive websites.
                    </p>
                    <p>
                        With over 3 years of experience, I have successfully worked on e-commerce projects, collaborating with clients to achieve their business goals. I'm always eager to learn new technologies and bring creative solutions to the table.
                    </p>
                    <div className="text-center mb-1">
                        <button onClick={handleToggleDetails} className="btn btn-primary mt-3 highlighted-btn">
                            {showMore ? "Show Less" : "Get More"}
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 mb-3 mt-4 additional-card">
                        {showMore && (
                            <div className="mt-4">
                                <h5 className="text-center">Skill Details</h5>
                                <ul>
                                    <li className="mt-3"><strong>Front-End Development:</strong> HTML, CSS, JavaScript and framework Bootstrap, React/Angular & version control Git and GitHub.</li>
                                    <li className="mt-3"><strong>Backend Development:</strong> Node.js, Express.js, NoSQL Databases: MongoDB, GraphQL APIs, JWT Auth</li>
                                    <li className="mt-3"><strong>DevOps & Deployment:</strong> Hosting Services: AWS,  CI/CD (Continuous Integration/Deployment): GitHub Actions,</li>
                                    <li className="mt-3"><strong>Hobbies:</strong> Problem-solving, exploring new technologies, and reading tech blogs.</li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="col-sm-6 mb-3 mt-4 additional-card">
                        {showMore && (
                            <div className="mt-4">
                                <h5 className="text-center">Training Summery</h5>
                                <ul>
                                    <li className="mt-3"><strong>Institute:</strong> Creative It institute </li>
                                    <li className="mt-3"><strong>Key Skills:</strong> HTML, CSS, JavaScript, Responsive Design</li>
                                    <li className="mt-3"><strong>Institute:</strong> Creative It institute </li>
                                    <li className="mt-3"><strong>Key Skills:</strong> HTML, CSS, JavaScript, Responsive Design</li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="col-sm-6 mb-3 mt-4 additional-card">
                        {showMore && (
                            <div className="mt-4">
                                <h5 className="text-center">Additional Details</h5>
                                <ul>
                                    <li><strong>Skills:</strong> HTML, CSS, JavaScript, React, Node.js, MongoDB, Express.js</li>
                                    <li><strong>Experience:</strong> 3+ years in web development, focusing on e-commerce and dynamic websites.</li>
                                    <li><strong>Education:</strong> Currently pursuing Computer Engineering at Uttara University.</li>
                                    <li><strong>Hobbies:</strong> Problem-solving, exploring new technologies, and reading tech blogs.</li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="col-sm-6 mb-3 mt-4 additional-card">
                        {showMore && (
                            <div className="mt-4">
                                <h5 className="text-center">Additional Details</h5>
                                <ul>
                                    <li><strong>Skills:</strong> HTML, CSS, JavaScript, React, Node.js, MongoDB, Express.js</li>
                                    <li><strong>Experience:</strong> 3+ years in web development, focusing on e-commerce and dynamic websites.</li>
                                    <li><strong>Education:</strong> Currently pursuing Computer Engineering at Uttara University.</li>
                                    <li><strong>Hobbies:</strong> Problem-solving, exploring new technologies, and reading tech blogs.</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;


