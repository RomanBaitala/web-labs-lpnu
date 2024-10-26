import React from 'react';
import styled from 'styled-components';
import logo from '../../img/car-logo.svg'

const LogoWrapper = styled.div`
    img {
        height: 40px;
    }
`;

const Logo = () => {
    return (
        <LogoWrapper>
            <img src={logo} alt="AutoHunt Logo" />
        </LogoWrapper>
    );
};

export default Logo;
