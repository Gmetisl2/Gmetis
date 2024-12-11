import React from 'react';
import logo from './logo.jpg';

const Header = () => (
  <header style={{ backgroundColor: '#007acc', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={logo} alt="gMetis Logo" style={{ height: '40px', width: '40px', borderRadius: '50%' }} />
      <h1 style={{ color: 'white', marginLeft: '10px' }}>gMetis</h1>
    </div>
    <nav>
      <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
        <li><a href="https://docs.gmetis.io" style={{ color: 'white', margin: '0 10px', textDecoration: 'underline' }}>Documentation</a></li>
        <li><a href="https://t.me/gmetisio" style={{ color: 'white', margin: '0 10px', textDecoration: 'underline' }}>Interact & Earn</a></li>
        <li><a href="https://metis.io/forge" style={{ color: 'white', margin: '0 10px', textDecoration: 'underline' }}>Public Sale Metis Forge</a></li>
        <li><a href="https://metis.io/bridge" style={{ color: 'white', margin: '0 10px', textDecoration: 'underline' }}>Bridge to Metis</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;