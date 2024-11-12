import React from 'react';
import { 
    LoginLangWrapper,
    // PersonIcon, 
    CartIcon 
} from './Login.styled';
import { Link } from 'react-router-dom';

const LoginLang = () => {
    return (
        <LoginLangWrapper>
                <Link to='/cart'><CartIcon color='white' /></Link>
                {/* <Link to='/'><PersonIcon color='white'/> Sign In</Link> */}
        </LoginLangWrapper>
    );
};

export default LoginLang;
