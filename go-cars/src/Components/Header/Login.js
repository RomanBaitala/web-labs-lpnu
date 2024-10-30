import React from 'react';
import { LoginLangWrapper } from './Login.styled';
import { IoPerson } from 'react-icons/io5';

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
