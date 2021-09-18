import React from 'react';
import styled from 'styled-components';
import Img from '../assets/Logo1.png';

const NavbarContainer = styled.div`
width: 100%;
height: 80px;
z-index: 20;
background #fff;
padding-top: 10px;
`;
const NavbarWrap = styled.div`
width: 1200px;
height: 100%;
margin: 0 auto;
z-index: 20;
display: flex;
position: relative;
align-items: center;
justify-content: space-between;
`;
const Logo = styled.div`
width: 20%;
height: 80%;
background: url(${Img}) 0 45% no-repeat;
background-size: 100% 100%;
cursor: pointer;
`;

const Nav = styled.div`
flex: 1;
position: relative;
padding-Left: 60%;
`;
const NavLink = styled.a`
color: #000;
padding: 0 15px;
font-size: 16px;
line-height: 80px;
font-weight: 700;
text-decoration: none;
`;

const Navbar = () => {
    return (
        <NavbarContainer>
            <NavbarWrap>
                <Logo />
                <Nav>
                    <NavLink to='/'>HOME</NavLink>
                    <NavLink to='/'>FUN</NavLink>
                </Nav>
            </NavbarWrap>
        </NavbarContainer>
    )
}

export default Navbar