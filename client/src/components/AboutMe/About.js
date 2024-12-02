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
                                <h5 className="text-center text-headline">Skill Details</h5>
                                <hr />
                                <ul>
                                    <li className="mt-3"><strong>Front-End Development:</strong> HTML, CSS, JavaScript and framework Bootstrap, React/Angular & version control Git and GitHub.</li>
                                    <li className="mt-3"><strong>Backend Development:</strong> Node.js, Express.js, NoSQL Databases: MongoDB, GraphQL APIs, JWT Auth</li>
                                    <li className="mt-3"><strong>DevOps & Deployment:</strong> Hosting Services: AWS,  CI/CD (Continuous Integration/Deployment): GitHub Actions,</li>
                                    <li className="mt-3"><strong>Final Project Development:</strong> Developed full-stack applications that included user authentication, payment integration, and dynamic data handling. Focused on performance optimization and user experience (UX)</li>
                                    <li className="mt-3"><strong>Hobbies:</strong> Problem-solving, exploring new technologies, and reading tech blogs.</li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="col-sm-6 mb-3 mt-4 additional-card">
                        {showMore && (
                            <div className="mt-4">
                                <h5 className="text-center text-headline">Training Summery</h5>
                                <hr />
                                <ul>
                                    <li className="mt-3"><strong>Self-Study and Online Resources:</strong> YouTube Tutorials: Followed channels like Traversy Media, Academind, and Programming Hero for hands-on learning. Documentation: Regularly referred to official documentation for React.js, Node.js, and MongoDB. </li>
                                    <li className="mt-3"><strong> Peer and Mentor Support:</strong>Group Discussions: Participated in forums, online groups, and local communities for coding challenges. Mentorship: Learned advanced concepts through guidance from experienced professionals at Creative IT Institute.</li>
                                    <li className="mt-3"><strong>Practical Hands-On Work:</strong> Mini Projects: Built small apps like calculators, to-do lists, and weather apps to practice skills. Debugging Practice: Focused on troubleshooting errors to improve problem-solving skills. </li>                       
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="col-sm-6 mb-3 mt-4 additional-card">
                        {showMore && (
                            <div className="mt-4">
                                <h5 className="text-center text-headline">Work Overflow</h5>
                                <hr />
                                <ul>
                                    <li className="mt-2"><strong>Requirement Gathering::</strong> Collaborating with clients or stakeholders to define project scope.</li>
                                    <li className="mt-2"><strong>UI/UX Design:</strong> Creating responsive and user-friendly layouts using Figma and CSS frameworks.</li>
                                    <li className="mt-2"><strong>Development Workflow:</strong> Front-End: Building components with React.js.
                                    Back-End: Setting up APIs using Node.js and Express.</li>
                                    <li className="mt-2"><strong>Testing & Debugging:</strong> Ensuring cross-browser compatibility and bug-free performance.</li>
                                    <li className="mt-2"><strong>Deployment:</strong> Hosting sites on GitHub Pages, Netlify, or Heroku for live production.</li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="col-sm-6 mb-3 mt-4 additional-card">
                        {showMore && (
                            <div className="mt-4">
                                <h5 className="text-center text-headline">Certifications/Achievements</h5>
                                <hr />
                                <ul>
                                    <li className="mt-3"><strong>Front-End:</strong> Front-End Development by Creative IT Institute.</li>
                                    <li className="mt-3"><strong>Backend:</strong> JavaScript and React.js Certification from FreeCodeCamp. MongoDB for Developers (Online Certification)</li>
                                    <li className="mt-3"><strong>Successfully delivered:</strong> Multiple full-stack web applications for clients.</li>
                                    <li className="mt-3"><strong>Ranked in Coding Challenges:</strong> HackerRank/Codewars competitions.</li>
                                    <li className="mt-3"><strong>Full-Stack:</strong> Full-Stack certification from w3school.com.</li>
                                    <li className="mt-3"><strong>Internship Experience:</strong> Front-End Mentor at Nugortech IT. Worked on dynamic website interfaces and optimized performance.</li>
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


