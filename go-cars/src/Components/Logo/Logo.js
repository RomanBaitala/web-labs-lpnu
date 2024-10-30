import React from 'react';
import logo from '../../img/car-logo.svg'
import { LogoWrapper } from './Logo.styled';


const Logo = () => {
    return (
        <LogoWrapper>
            <img src={logo} alt="AutoHunt Logo" />
        </LogoWrapper>
    );
};

export default Logo;
