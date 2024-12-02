import React from "react";
import "./Services.css";

const Services = () => {
  const services = [
    {
      title: "Full-Stack Solutions",
      description: "E-Commerce Platforms Development, Content Management System (CMS), Real-Time Applications, Progressive Web Apps (PWA)",
      icon: "bi bi-code-slash",
    },
    {
      title: "Website Development",
      description: "Corporate Website Creation, E-commerce Website Development, Landing Page Design, Portfolio Websites",
      icon: "bi bi-cart-check",
    },
    {
      title: " Front-End Development",
      description: "UI/UX Design Implementation, Responsive Design, Single Page Applications (SPA), Cross-Browser Compatibility",
      icon: "bi bi-graph-up-arrow",
    },
    {
        title: "Backend API Development",
        description: "API Design and Architecture, Data Management, Authentication and Authorization, Business Logic Implementation, Security Implementation",
        icon: "bi bi-code-slash",
      },
      {
        title: "Database Management:",
        description: "Custom e-commerce platforms with payment gateway integration.",
        icon: "bi bi-cart-check",
      },
      {
        title: "Deployment Services",
        description: "CI/CD Pipeline Setup, Web Hosting and Server Setup, Version Control Management: Git, GitHub",
        icon: "bi bi-graph-up-arrow",
      },
  ];

  return (
    <div className="services-section container py-5">
      <h2 className="text-center mb-4">My Services</h2>
      <hr className="hr"/>
      <div className="row">
        {services.map((service, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card service-card shadow-sm">
              <div className="card-body text-center">
                <i className={`${service.icon} service-icon mb-3`}></i>
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
