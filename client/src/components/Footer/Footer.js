import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
            <div className="container footer-container pt-5 px-5 mt-1">
                <div className="row text-center text-md-start">
                    {/* Navigation Links */}
                    <div className="col-12 col-md-4 mb-4 headline-text">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li className="mt-3">
                                <a href="/" className="text-black text-decoration-none">
                                    Home
                                </a>
                            </li>
                            <li className="mt-3">
                                <a href="/about" className="text-black text-decoration-none">
                                    About
                                </a>
                            </li>
                            <li className="mt-3">
                                <a href="/services" className="text-black text-decoration-none">
                                    Services
                                </a>
                            </li>
                            <li className="mt-3">
                                <a href="/work" className="text-black text-decoration-none">
                                    Project work
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div className="col-12 col-md-4 mb-4 headline-text">
                        <h5>Follow Me</h5>
                        <ul className="list-unstyled">
                            <li className="mt-3">
                                <a href="/" className="text-black text-decoration-none text-center">
                                    Facebook
                                </a>
                            </li>
                            <li className="mt-3">
                                <a href="/" className="text-black text-decoration-none text-center">
                                    Twitter
                                </a>
                            </li>
                            <li className="mt-3">
                                <a href="https://github.com/HABIB12WAHID" target="blank" className="text-black text-decoration-none text-center">
                                    GitHub
                                </a>
                            </li>
                            <li className="mt-3">
                                <a href="https://www.linkedin.com/in/md-habib-mia-295361332/" target="blank" className="text-black text-decoration-none text-center">
                                    LinkedIn
                                </a>
                            </li>                          
                        </ul>
                    </div>

                    {/* Copyright Text */}
                    <div className="col-12 col-md-4 headline-text">
                        <h5>Contact</h5>
                        <p><strong className="whatsapp">Email:</strong> bbc13news@gmail.com</p>
                        <p><strong className="whatsapp">Phone:</strong> 01998582585</p>
                        <p> <strong className="whatsapp">Whatsapp:</strong> +8801998582585 </p>
                        <p>© {new Date().getFullYear()} habib. All rights reserved.</p>
                    </div>
                </div>
            </div>
    );
};

export default Footer;
