import React from 'react';
import styled from 'styled-components';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const TokenomicsContainer = styled.section`
  padding: 40px 20px;
  display: flex;
  justify-content: space-between;
  max-width: 800px;
  margin: 0 auto;
`;

const TokenomicsDetails = styled.div`
  flex: 1;
  margin-right: 20px;
`;

const TokenomicsTitle = styled.h2`
  color: #007acc;
  text-align: center;
`;

const TokenomicsDescription = styled.p`
  margin: 20px 0;
`;

const data = {
  labels: ['Liquidity Pool', 'Rewards', 'Team Budget', 'Infrastructure Costs', 'Marketing'],
  datasets: [
    {
      data: [30, 36.5, 13.5, 10, 10],
      backgroundColor: ['#d9d9d9', '#bfbfbf', '#a6a6a6', '#8c8c8c', '#737373'],
      hoverBackgroundColor: ['#bfbfbf', '#a6a6a6', '#8c8c8c', '#737373', '#595959'],
    },
  ],
};

const Tokenomics = () => (
  <TokenomicsContainer>
    <TokenomicsDetails>
      <TokenomicsTitle>Tokenomics</TokenomicsTitle>
      <TokenomicsDescription>
        gMetis is an ERC-20 token with a total supply of 10,000,000 tokens. The tokens are allocated as follows:
      </TokenomicsDescription>
      <ul>
        <li>30% for liquidity pool</li>
        <li>36.5% for rewards</li>
        <li>13.5% for team budget</li>
        <li>10% for infrastructure costs</li>
        <li>10% for marketing</li>
      </ul>
    </TokenomicsDetails>
    <Pie data={data} />
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <Button href="https://herculesdex.com/buy-gmetis" target="_blank">Buy Token</Button>
    </div>
  </TokenomicsContainer>
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

export default Tokenomics;