import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
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
        <FaBars className="hamburger" size={30} color="white" onClick={toggleMenu} style={{ cursor: 'pointer' }} />
        <ul className={`nav-links ${isOpen ? 'open' : ''}`} style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          <li><a href="https://docs.gmetis.io" style={{ color: 'white', margin: '0 10px', textDecoration: 'underline' }}>Documentation</a></li>
          <li><a href="https://t.me/gmetisio" style={{ color: 'white', margin: '0 10px', textDecoration: 'underline' }}>Interact & Earn</a></li>
          <li><a href="https://metis.io/forge" style={{ color: 'white', margin: '0 10px', textDecoration: 'underline' }}>Public Sale Metis Forge</a></li>
          <li><a href="https://metis.io/bridge" style={{ color: 'white', margin: '0 10px', textDecoration: 'underline' }}>Bridge to Metis</a></li>
        </ul>
      </nav>
      <style jsx>{`
        .hamburger {
          display: none;
        }
        .nav-links {
          display: flex;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 60px;
            right: 10px;
            background-color: #007acc;
            border-radius: 5px;
            padding: 10px;
          }
          .nav-links.open {
            display: flex;
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