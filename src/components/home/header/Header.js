import React from 'react';
import NavHeader from './NavHeader/NavHeader';
import "./Header.css"
import MainHeader from './MainHeader/MainHeader';
import ClientsLogo from './CLientsLogo/ClientsLogo';

const Header = () => {
    return (
       <div>
            <div className="header-container">
            <NavHeader/>
            <MainHeader/>
        </div>
        <ClientsLogo/>
       </div>
    );
};

export default Header;