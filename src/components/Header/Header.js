import React from 'react';
import './Header.css';
const Header = () => {
    return (
     <div className="header">
         <h1>My 11 Circle</h1>
        <nav>
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/squad">My 11</a>
        </nav>
     </div>
    );
};

export default Header;