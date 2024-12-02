import React from 'react'
import Typical from 'react-typical';
import './Profile.css';

function Profile() {
    return (
        <div className="profile-container container py-5 mt-1">
            <div className="profile-parent row align-items-center">
                <div className="col-md-5 text-center mb-4">
                    <img
                        src="https://images.unsplash.com/photo-1514543250559-83867827ecce?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbiUyMGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D" // Replace with your profile image URL
                        alt="Profile"
                        className="img-fluid rounded-circle"
                    />
                </div>
                <div className="profile-details col-md-7 text-center">
                    <div className="portfolio-details-name mb-16">
                        <span className="primary-text">
                            {" "}
                            Hello, I'm <span className="highlighted-text">`Md Habib`</span>
                        </span>
                    </div>
                    <div className="profile-details-role mb-6">
                        <span className="primary-text">
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Full-Stack Web Developer",
                                        2200,
                                        "MERN Stack Developer",
                                        2200,
                                        "React/React Native",
                                        2200,
                                    ]}
                                />
                            </h1>
                            <span className="profile-role-tagline">
                                Creative feature designer in Front-End and Backend technologies. I have serious passion for UI effects, animations and dynamic user experience.
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                        <button className='btn primary-btn'>
                            {""}
                            Hire Me{" "}
                        </button>
                        <a href="/" download='portfolio habib.pdf'>
                            <button className="btn highlighted-btn">Get Resume</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
