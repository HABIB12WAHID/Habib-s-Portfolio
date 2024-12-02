import React from 'react';
import './Work.css'

const Work = () => {
    const projects = [
        {
            id: 1,
            title: 'E-commerce Website',
            description: 'A fully functional e-commerce platform with user authentication and payment gateway.',
            img: 'https://images.unsplash.com/photo-1514543250559-83867827ecce?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbiUyMGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D',
            link: 'https://example.com/ecommerce',
        },
        {
            id: 2,
            title: 'Portfolio Website',
            description: 'A personal portfolio showcasing projects, skills, and experience.',
            img: 'https://images.unsplash.com/photo-1514543250559-83867827ecce?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbiUyMGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D',
            link: 'https://example.com/portfolio',
        },
        {
            id: 3,
            title: 'Blog Platform',
            description: 'A responsive blog website with dynamic content management.',
            img: 'https://images.unsplash.com/photo-1514543250559-83867827ecce?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbiUyMGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D',
            link: 'https://example.com/blog',
        },
        {
            id: 4,
            title: 'UI/UX Design',
            description: 'A responsive UI/UX website with dynamic content management.',
            img: 'https://images.unsplash.com/photo-1514543250559-83867827ecce?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbiUyMGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D',
            link: 'https://example.com/blog',
        },
        {
            id: 5,
            title: 'React Responsive Website',
            description: 'A responsive React Responsive website with dynamic content management.',
            img: 'https://images.unsplash.com/photo-1514543250559-83867827ecce?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbiUyMGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D',
            link: 'https://example.com/blog',
        },
        {
            id: 6,
            title: 'Full-Stack Web development',
            description: 'A responsive React Responsive website with dynamic content management.',
            img: 'https://images.unsplash.com/photo-1514543250559-83867827ecce?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbiUyMGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D',
            link: 'https://example.com/blog',
        },
    ];

    return (
        <div className="container work-container">
            <div className="text-center work-btn">
                <button className=" btn btn-classic">My Worked History</button>
            </div>
            <hr className='hr'/>
            <div className="row work-details">
                {projects.map((project) => (
                    <div className="col-md-4 mb-4" key={project.id}>
                        <div className="card shadow-sm">
                            <img src={project.img} alt={project.title} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{project.title}</h5>
                                <p className="card-text">{project.description}</p>
                                <div className="search-new-project">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary highlighted-btn">
                                        View Project
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Work;

