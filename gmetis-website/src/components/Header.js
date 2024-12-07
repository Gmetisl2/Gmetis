import React from 'react';
import styled from 'styled-components';
import logo from './logo.jpg'; // Adjust the import path

const HeaderContainer = styled.header`
  background-color: #007acc;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
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
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => (
  <HeaderContainer>
    <LogoContainer>
      <Logo src={logo} alt="gMetis Logo" />
      <ProjectName>gMetis</ProjectName>
    </LogoContainer>
    <Nav>
      <NavLink href="https://docs.gmetis.io" target="_blank">Documentation</NavLink>
      <NavLink href="https://herculesdex.com/buy-gmetis" target="_blank">Buy gMetis</NavLink>
      <NavLink href="https://t.me/yourtelegramlink" target="_blank">Join TG</NavLink>
      <NavLink href="https://metis.io" target="_blank">Bridge to Metis</NavLink>
    </Nav>
  </HeaderContainer>
);

export default Header;