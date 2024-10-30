import React from 'react';
import { IoPerson } from 'react-icons/io5';
import { LoginLangWrapper } from './LoginLang.styled';

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
