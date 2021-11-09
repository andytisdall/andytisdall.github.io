import React from 'react';

const Projects = () => {
    return (
        <section>
            <div className="resume-section-header">
                Projects
            </div>
            <div className="resume-project-title">
                <a href="https://exploring-the-space.com">Exploring the Space</a>
            </div>
            <ul>
                <li>
                Online cataloging & organization of musical compositions and recordings with audio playback
                </li>
                <li>
                Full stack web application using React, Redux, Node, MongoDB	
                </li>
            </ul>
            <div className="resume-project-title">
                <a href="https://apprehenchmen.com">Apprehenchmen</a>
            </div>
            <ul>
                <li>
                Full stack website for a working band
                </li>
                <li>
                Built with Django, Bootstrap & PostgreSQL
                </li>
            </ul>
            <div className="resume-project-title">
                <a href="https://andytisdall.github.io/finger-synth">Finger Synth</a>
            </div>
            <ul>
                <li>
                Mobile web app provides an interactive sound generator with touch interaction
                </li>
                <li>
                Incorporates ToneJS module for audio creation, built with React
                </li>
            </ul>
        </section>
    );
};
export default Projects;