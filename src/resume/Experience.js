import React from 'react';

const Experience = () => {
    return (
        <section>
            <div className="resume-section-header">
                Work Experience
            </div>
            <div className="resume-project-title">
                Freelance - 
                <span className="resume-position"> Web Developer -</span>
                <span className="resume-date"> Aug 2019 - Current</span>
            </div>
            <ul>
                <li>
                Created full stack web applications with Django, React, Express, Node, MongoDB & Bootstrap.
                </li>
                <li>
                Built web-based tools for music creation.  
                </li>
                <li>
                Designed resources that working musicians use in development of projects.
                </li>
            </ul>
            <div className="resume-project-title">
                Luka's Taproom & Lounge - 
                <span className="resume-position"> Front of House Manager -</span>
                <span className="resume-date"> May 2013 - May 2021</span>
            </div>
            <ul>
                <li>
                Supervised a team of servers and bartenders in a high volume setting.
                </li>
                <li>
                Managed booking and execution of large private events.
                </li>
                <li>
                Coordinated with back of house to maintain consistent service and quality.
                </li>
            </ul>
            <div className="resume-project-title">
                Embarcadero Center Cinema - 
                <span className="resume-position"> Projectionist & Box Officer
 -</span>
                <span className="resume-date"> Oct 2011 - Jun 2013</span>
            </div>
            <ul>
                <li>
                Worked with a team to deliver consistent and excellent customer service.
                </li>
                <li>
                Operated and monitored the projector and audio equipment to create a high quality theater experience.
                </li>
            </ul>
        </section>
    );
};
export default Experience;