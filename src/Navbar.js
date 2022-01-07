import React from 'react';

const Navbar = props => {

    return (
        <div className='navbar'>
            
            <a className="link" href="/">
                Andy Tisdall
            </a>

            <a className="link" href="#/resume">
                Resume
            </a>

            <a className="link" href="https://github.com/andytisdall">
                GitHub
            </a>

            <a className="link" href="https://www.linkedin.com/in/andrew-tisdall-849b237a/">
                LinkedIn
            </a>

            <a className="link" href="mailto:andrew.tisdall@gmail.com">
                andrew.tisdall@gmail.com
            </a>

        </div>      
    );
};

export default Navbar;