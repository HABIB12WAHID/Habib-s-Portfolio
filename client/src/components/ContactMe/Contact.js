import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact-section container py-5 mt-1">
            <h2 className="text-center mb-4">Contact Me</h2>
            <hr className="hr" />
            <p className="text-center mb-4 mt-4">
                Feel free to reach out for any inquiries or collaborations!
            </p>
            <div className="row align-items-center mb-3">
                <div className="col-md-5 text-center mb-4 mb-md-0">
                    <img
                        src="https://png.pngtree.com/png-clipart/20190831/ourmid/pngtree-business-man-handshake-cooperation-data-promotion-illustration-png-image_1716789.jpg"
                        alt="Profile"
                        className="img-fluid shadow-sm"
                    />
                </div>
                <div className="col-md-7">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Your Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Your Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">
                                Your Message
                            </label>
                            <textarea
                                className="form-control"
                                id="message"
                                rows="5"
                                placeholder="Write your message here"
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
