import React from 'react';
import styled from 'styled-components';

import { IoPerson } from 'react-icons/io5';

const LoginLangWrapper = styled.div`
    display: flex;
    gap: 20px;

    .login a {
        color: white;
        text-decoration: none;
    }
`;

const LoginLang = () => {
    return (
        <LoginLangWrapper>
            <div className="login">
                <a href="/login"><IoPerson color='white'/> Sign In</a>
            </div>
        </LoginLangWrapper>
    );
};

export default LoginLang;
