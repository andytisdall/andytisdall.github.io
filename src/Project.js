import React from 'react';

const Project = (props) => {
    return (
        <a className="project" href={props.url}>
            <div className="title">
                {props.title}
            </div>
            <img className="pic" src={props.pic} />
            <div className="description">
                {props.description}
            </div>
        </a>
    );
};

export default Project;