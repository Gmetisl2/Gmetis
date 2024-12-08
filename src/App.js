import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Introduction from './components/Introduction';
import KPIs from './components/KPIs';
import Community from './components/Community';
import Tokenomics from './components/Tokenomics';
import Footer from './components/Footer';

const AppContainer = styled.div`
  text-align: center;
  background-color: #f0f0f0;
  color: #333;
  font-family: Arial, sans-serif;
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