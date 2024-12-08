import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Introduction from './components/Introduction';
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
  overflow-x: hidden; /* Prevent horizontal scrolling */
  padding-top: 120px; /* Add padding to the top to avoid overlap */
`;

function App() {
  useEffect(() => {
    document.title = "gMetis - the AI Agent Metis MEME";
  }, []);

  return (
    <AppContainer>
      <Header />
      <Introduction />
      <Community />
      <Tokenomics />
      <Footer />
    </AppContainer>
  );
}

export default App;
