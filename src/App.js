import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Introduction from './components/Introduction';
import KPIs from './components/KPIs';
import Community from './components/Community';
import Tokenomics from './components/Tokenomics';
import Footer from './components/Footer';
import bgGif from './components/bg.gif';

const AppContainer = styled.div`
  text-align: center;
  background-color: #f0f0f0;
  color: #333;
  font-family: Arial, sans-serif;
  background-image: url(${bgGif});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.5); /* 50% transparency */
    z-index: 1;
  }
  > * {
    position: relative;
    z-index: 2;
  }
`;

function App() {
  useEffect(() => {
    document.title = "gMetis - the AI Agent Metis MEME";
  }, []);

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
