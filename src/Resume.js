import React from 'react';
import Education from './resume/Education';
import Skills from './resume/Skills';
import Projects from './resume/Projects';
import References from './resume/References';
import ResumeHeader from './resume/ResumeHeader';
import Experience from './resume/Experience';

const Resume = props => {
    return (
        <div className="resume-background">
            <div className="resume">
                <div className="resume-bar" />
                <ResumeHeader />
                <Skills />
                <Projects />
                <Experience />
                <Education />
                <References />
            </div>  
        </div>
    );
};

export default Resume;