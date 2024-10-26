import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo/Logo';
import Navigation from './Navigation';
import LoginLang from './LoginLang';
import { Container } from '../Container/Container';

const SHeader = styled.header `
`

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: none;
    max-width: 1220px;
    margin: 0 auto;
`;

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
