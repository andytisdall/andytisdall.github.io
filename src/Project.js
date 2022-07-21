import React from 'react';

const Project = (props) => {
  return (
    <div className="project-wrapper">
      <div className="project-back"></div>
      <a className="project" href={props.url}>
        <div className="title">{props.title}</div>
        <img className="pic" src={props.pic} alt={props.title} />
        <div className="description">{props.description}</div>
      </a>
    </div>
  );
};

export default Project;
