import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
            <div className="container footer-container py-5 px-4">
                <div className="row text-center text-md-start">
                    {/* Navigation Links */}
                    <div className="col-12 col-md-4 mb-4 headline-text">
                        <h5 className="text-start">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="/" className="text-black text-decoration-none">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/services" className="text-black text-decoration-none">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="text-black text-decoration-none">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="/work" className="text-black text-decoration-none">
                                    Project work
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div className="col-12 col-md-4 mb-4 headline-text">
                        <h5 className="text-start">Follow Me</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="/" className="text-black text-decoration-none text-center">
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href="/" className="text-black text-decoration-none text-center">
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a href="/" className="text-black text-decoration-none text-center">
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a href="/" className="text-black text-decoration-none text-center">
                                    LinkedIn
                                </a>
                            </li>                          
                        </ul>
                    </div>

                    {/* Copyright Text */}
                    <div className="col-12 col-md-4 headline-text">
                        <h5 className="text-start">Contact</h5>
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
