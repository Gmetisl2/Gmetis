import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Introduction from './components/Introduction';
import KPIs from './components/KPIs';
import Community from './components/Community';
import Tokenomics from './components/Tokenomics';
import Footer from './components/Footer';

// src/App.js
import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    document.title = "My New Title";
  }, []);

  return (
    <div>
      <h1>Welcome to My App</h1>
    </div>
  );
};

export default App;

const AppContainer = styled.div`
  text-align: center;
  background-color: #f0f0f0;
  color: #333;
  font-family: Arial, sans-serif;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Introduction />
      <KPIs />
      <Community />
      <Tokenomics />
      <Footer />
    </AppContainer>
  );
}

export default App;