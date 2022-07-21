import React from 'react';

const Projects = () => {
  return (
    <section>
      <div className="resume-section-header">Projects</div>
      <div className="resume-project-title">
        <a href="https://andytisdall.github.io/coderunner/">Coderunner</a>
      </div>
      <ul>
        <li>
          Typescript based web app that allows a user to write and execute
          Javascript code in the browser
        </li>
        <li>
          Client-side transpiling and bundling with ESBuild, support for
          importing npm packages and CSS
        </li>
      </ul>
      <div className="resume-project-title">
        <a href="https://exploring-the-space.com">Exploring the Space</a>
      </div>
      <ul>
        <li>
          Online cataloging & organization of musical compositions and
          recordings with audio playback
        </li>
        <li>Full stack web application using React, Redux, Node, MongoDB</li>
      </ul>
      <div className="resume-project-title">
        <a href="https://apprehenchmen.com">Apprehenchmen</a>
      </div>
      <ul>
        <li>Full stack promotional website for a working band</li>
        <li>Built with Django, Bootstrap & PostgreSQL</li>
      </ul>
    </section>
  );
};
export default Projects;
