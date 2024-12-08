import React from 'react';
import styled from 'styled-components';


const CommunityContainer = styled.section`
  padding: 40px 20px;
  text-align: center;
`;

const Title = styled.h2`
  color: #007acc;
`;

const Description = styled.p`
  margin: 20px 0;
`;

const Button = styled.a`
  display: inline-block;
  margin: 10px;
  padding: 15px 25px;
  color: #fff;
  background-color: #007acc;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005f99;
  }
`;

const Community = () => (
  <CommunityContainer>
    <Title>Join the Community</Title>
    <Description>
      Engage with our AI-driven community and earn daily rewards! The AI agent selects top contributors based on their engagement levels and rewards them with gMetis tokens.
    </Description>
    <Button href="https://t.me/gmetisio" target="_blank">Join Telegram</Button>
  </CommunityContainer>
);

export default Community;
