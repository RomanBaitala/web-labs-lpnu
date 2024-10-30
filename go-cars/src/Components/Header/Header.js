import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from './Navigation';
import LoginLang from './Login';
import { Container } from '../Container/Container';
import { SHeader, HeaderWrapper } from './Header.styled';

const Header = () => {
    return (
        <SHeader>
            <Container>
                <HeaderWrapper>
                    <Logo />
                    <Navigation />
                    <LoginLang />
                </HeaderWrapper>
            </Container>
        </SHeader>
    );
};

export default Header;
