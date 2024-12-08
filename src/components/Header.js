import React, { useState } from 'react';
import styled from 'styled-components';
import logo from './logo.jpg'; // Adjust the import path
import { FaBars, FaTimes } from 'react-icons/fa';

const HeaderContainer = styled.header`
  background-color: #007acc;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
    display: ${(props) => (props.open ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 60px;
    right: 0;
    left: 0;
    background-color: #007acc;
    padding: 20px;
    z-index: 999;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
    z-index: 1001;
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo src={logo} alt="gMetis Logo" />
        <ProjectName>gMetis</ProjectName>
      </LogoContainer>
      <HamburgerIcon onClick={handleMenuToggle}>
        {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </HamburgerIcon>
      <Nav open={menuOpen}>
        <NavLink href="https://docs.gmetis.io" target="_blank" onClick={handleMenuToggle}>Documentation</NavLink>
        <NavLink href="https://t.me/gmetisio" target="_blank" onClick={handleMenuToggle}>Join TG</NavLink>
        <NavLink href="https://metis.io/bridge" target="_blank" onClick={handleMenuToggle}>Bridge to Metis</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
