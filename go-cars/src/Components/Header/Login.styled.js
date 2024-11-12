import styled from 'styled-components';
import { IoPerson, IoCart } from 'react-icons/io5';

export const PersonIcon = styled(IoPerson)`
    width: 15px;
    height: 15px;
`

export const CartIcon = styled(IoCart)`
    width: 25px;
    height: 25px;
`

export const LoginLangWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    a {
        color: white;
        text-decoration: none;
    }
`;