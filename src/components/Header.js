import React, { useState } from 'react';
import styled from 'styled-components';
import logo from './logo.jpg'; // Adjust the import path
import { FaBars, FaTimes } from 'react-icons/fa';

const HeaderContainer = styled.header`
  background-color: #007acc;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  position: relative;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const ProjectName = styled.span`
  font-size: 1.5em;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: ${(props) => (props.open ? 'block' : 'none')};
    position: absolute;
    top: 70px;
    right: 20px;
    background-color: #007acc; /* Opaque background color */
    padding: 10px;
    border-radius: 5px;
    z-index: 1000; /* Ensure it covers other content */
    text-align: center; /* Center-align text */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add shadow for better visibility */
  }
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  display: block;
  margin: 10px 0;

  &:hover {
    text-decoration: underline;
  }
`;

const HamburgerIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo src={logo} alt="gMetis Logo" />
        <ProjectName>gMetis</ProjectName>
      </LogoContainer>
      <HamburgerIcon onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </HamburgerIcon>
      <Nav open={menuOpen}>
        <NavLink href="https://docs.gmetis.io" target="_blank">Documentation</NavLink>
        <NavLink href="https://t.me/gmetisio" target="_blank">Join TG</NavLink>
        <NavLink href="https://metis.io/bridge" target="_blank">Bridge to Metis</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;