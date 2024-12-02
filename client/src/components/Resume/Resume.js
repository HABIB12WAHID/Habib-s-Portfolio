import React from "react";
import "./Resume.css";

const Resume = () => {
    return (
        <div className="resume-section container py-5">
            <h2 className="text-center mb-4">Resume</h2>

            {/* Work Experience */}
            <div className="resume-part mb-5">
                <h4 className="mb-3">Work Experience</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <strong>Front-End Mentor</strong> - Nugortech IT (6 Month)
                    </li>
                    <li className="list-group-item">
                        Successfully developed e-commerce websites like Product selling on online market place.
                    </li>
                </ul>
            </div>

            {/* Educational Qualification */}
            <div className="resume-part mb-5">
                <h4 className="mb-3">Educational Qualification</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        SSC: Sherpur Government Victoria Academy, GPA: 5.00
                    </li>
                    <li className="list-group-item">
                        HSC: Sherpur Government College, GPA: 5.00
                    </li>
                    <li className="list-group-item">
                        IUBAT (Civil Engineering, 2 Semesters Completed)
                    </li>
                    <li className="list-group-item">
                        Current: Computer Engineering, Uttara University
                    </li>
                </ul>
            </div>

            <div className="development-details">
                {/* How I Learned Web Development */}
                <div className="resume-part mb-5">
                    <h4 className="mb-3">How I Learned Web Development</h4>
                    <p>
                        I started learning web development through YouTube tutorials, online
                        courses, and practical projects. Later, I enhanced my skills through
                        a professional course at Creative IT Institute and self-study on
                        advanced frameworks like React and Node.js.
                    </p>
                </div>
            </div>

            <div className="development-details">
                {/* Feelings About Work */}
                <div className="resume-part mb-5">
                    <h4 className="mb-3">My Feelings About Work</h4>
                    <p>
                        I am deeply passionate about web development. Solving real-world
                        problems through coding gives me immense satisfaction. I thrive on
                        challenges and enjoy continuously improving my skills.
                    </p>
                </div>
            </div>

            <div className="development-details">
                {/* Goals */}
                <div className="resume-part">
                    <h4 className="mb-3">My Goals</h4>
                    <p>
                        My primary goal is to establish myself as a full-stack developer and
                        contribute to impactful projects. In the future, I also aspire to
                        transition into data science and create innovative solutions that
                        make a difference.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Resume;
