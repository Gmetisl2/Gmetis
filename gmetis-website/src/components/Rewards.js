import React from 'react';
import styled from 'styled-components';

const RewardsContainer = styled.div`
  padding: 40px 20px;
  text-align: left;
  max-width: 800px;
  margin: 0 auto;
`;

const RewardsTitle = styled.h2`
  color: #007acc;
  text-align: center;
`;

const RewardsDescription = styled.p`
  margin: 20px 0;
`;

const Rewards = () => (
  <RewardsContainer>
    <RewardsTitle>Rewards</RewardsTitle>
    <RewardsDescription>
      Join our community and interact with our AI-driven platform to earn daily rewards! The AI agent selects top contributors based on their engagement levels and rewards them with gMetis tokens.
    </RewardsDescription>
    <ul>
      <li>Engage with the community on Telegram and X.com</li>
      <li>Earn rewards based on your activity and contributions</li>
      <li>Get rewarded daily with gMetis tokens</li>
    </ul>
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <Button href="https://t.me/yourtelegramlink" target="_blank">Join Telegram</Button>
      <Button href="https://x.com/yourxcomlink" target="_blank">Follow on X.com</Button>
    </div>
  </RewardsContainer>
);

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

export default Rewards;