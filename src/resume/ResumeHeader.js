import React from 'react';

const ResumeHeader = () => {
    return (
        <section>
            <div className="resume-header">
                <h1>Andrew Tisdall</h1>
            </div>
            <div className="resume-info">
                <div className="resume-info-item">
                    (415) 819-0251
                </div>
                <div className="resume-info-item">       
                    <a href="mailto:andrew.tisdall@gmail.com">andrew.tisdall@gmail.com</a>
                </div>
                <div className="resume-info-item">
                    <a href="https://andytisdall.github.com">andytisdall.github.com</a>
                </div>
            </div>
        </section>
    );
};
export default ResumeHeader;