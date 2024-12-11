import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'; // Importing the hamburger icon from react-icons
import logo from './logo.jpg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header style={{ backgroundColor: '#007acc', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="gMetis Logo" style={{ height: '40px', width: '40px', borderRadius: '50%' }} />
        <h1 style={{ color: 'white', marginLeft: '10px' }}>gMetis</h1>
      </div>
      <nav>
        <ul className="nav-links" style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
          <li><a href="https://docs.gmetis.io" style={{ color: 'white', margin: '0 10px', textDecoration: 'underline' }}>Documentation</a></li>
          <li><a href="https://t.me/gmetisio" style={{ color: 'white', margin: '0 10px', textDecoration: 'underline' }}>Interact & Earn</a></li>
          <li><a href="https://metis.io/forge" style={{ color: 'white', margin: '0 10px', textDecoration: 'underline' }}>Public Sale Metis Forge</a></li>
          <li><a href="https://metis.io/bridge" style={{ color: 'white', margin: '0 10px', textDecoration: 'underline' }}>Bridge to Metis</a></li>
        </ul>
        <FaBars className="hamburger" size={30} color="white" onClick={toggleMenu} style={{ cursor: 'pointer', display: 'none' }} />
        <ul className="mobile-nav-links" style={{ display: isOpen ? 'flex' : 'none', flexDirection: 'column', listStyle: 'none', margin: 0, padding: 0, position: 'absolute', top: '60px', right: '10px', backgroundColor: '#007acc', borderRadius: '5px' }}>
          <li><a href="https://docs.gmetis.io" style={{ color: 'white', margin: '10px 0', textDecoration: 'underline' }}>Documentation</a></li>
          <li><a href="https://t.me/gmetisio" style={{ color: 'white', margin: '10px 0', textDecoration: 'underline' }}>Interact & Earn</a></li>
          <li><a href="https://metis.io/forge" style={{ color: 'white', margin: '10px 0', textDecoration: 'underline' }}>Public Sale Metis Forge</a></li>
          <li><a href="https://metis.io/bridge" style={{ color: 'white', margin: '10px 0', textDecoration: 'underline' }}>Bridge to Metis</a></li>
        </ul>
      </nav>
      <style jsx>{`
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .hamburger {
            display: block;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;