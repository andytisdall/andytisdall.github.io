import React from 'react';

const Navbar = props => {

    return (
        <div className='navbar'>

            <a className="link" href="#">
                GitHub
            </a>

            <a className="link" href="#">
                LinkedIn
            </a>

            <a className="link" href="mailto:andrew.tisdall@gmail.com">
                andrew.tisdall@gmail.com
            </a>

        </div>      
    );
};

export default Navbar;