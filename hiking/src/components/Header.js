import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <div id="header">
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/trails'>Find Trails</Link>
            </nav>
        </div>
    )
}

export default Header;