import React from 'react';
import Project from './Project';
import Header from './Header';

import projectData from './data/projectData';

const Main = () => {
  const renderProjects = () => {
    return projectData.map((proj) => {
      return (
        <Project
          key={proj.title}
          title={proj.title}
          description={proj.description}
          pic={proj.pic}
          url={proj.url}
        />
      );
    });
  };

  return (
    <div className="container">
      <Header />
      <div className="project-grid">{renderProjects()}</div>
    </div>
  );
};

export default Main;
