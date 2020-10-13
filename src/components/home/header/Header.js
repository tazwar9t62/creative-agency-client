import React from 'react';
import NavHeader from './NavHeader/NavHeader';
import "./Header.css"
import MainHeader from './MainHeader/MainHeader';
import ClientsLogo from './CLientsLogo/ClientsLogo';

const Header = () => {
    return (
       <div classnames="pb-5">
            <div className="header-container mb-5">
            <NavHeader/>
            <MainHeader/>
        </div>
        <ClientsLogo/>
       </div>
    );
};

export default Header;