import React from 'react';
import styled from 'styled-components';

const IntroductionContainer = styled.section`
  padding: 40px 20px;
  text-align: center;
`;

const Title = styled.h1`
  color: #007acc;
`;

const Description = styled.p`
  margin: 20px 0;
`;

const Introduction = () => (
  <IntroductionContainer>
    <Title>Welcome to gMetis</Title>
    <Description>
      gMetis is a pioneering AI-agent-driven crypto project built on the Metis Layer 2 of Ethereum. It combines the engaging aspects of a meme token with the utility of an AI-driven community management tool.
    </Description>
  </IntroductionContainer>
);

export default Introduction;