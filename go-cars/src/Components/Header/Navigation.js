import React from 'react';
import { NavWrapper } from './Navigation.styled';

const Navigation = () => {
    return (
        <NavWrapper>
            <ul>
                <li><a href="/new-cars">New Cars</a></li>
                <li><a href="/used-cars">Used Cars</a></li>
                <li><a href="/compare">Compare</a></li>
                <li><a href="/sell">Sell</a></li>
                <li><a href="/article">Article</a></li>
            </ul>
        </NavWrapper>
    );
};

export default Navigation;
