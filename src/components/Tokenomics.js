import React from 'react';
import styled from 'styled-components';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const TokenomicsContainer = styled.section`
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
`;

const TokenomicsDetails = styled.div`
  flex: 1;
  text-align: center;
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
      backgroundColor: ['#007acc', '#36a2eb', '#a6a6a6', '#8c8c8c', '#737373'],
      hoverBackgroundColor: ['#005999', '#258ccf', '#8c8c8c', '#737373', '#595959'],
      borderWidth: 1,
      borderAlign: 'inner',
      borderColor: ['#fff', '#fff', '#fff', '#fff', '#fff'],
      offset: [5, 5, 0, 0, 0], // Exploding segments
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false, // Hide legend
    },
    tooltip: {
      callbacks: {
        label: function(context) {
          let label = context.label || '';
          if (label) {
            label += ': ';
          }
          label += `${context.raw}%`;
          return label;
        }
      }
    }
  },
  responsive: true,
  maintainAspectRatio: false,
};

const ChartContainer = styled.div`
  width: 100%;
  max-width: 400px; /* Set a max width for the chart */
  margin: 20px auto;
`;

const Tokenomics = () => (
  <TokenomicsContainer>
    <TokenomicsDetails>
      <TokenomicsTitle>Tokenomics</TokenomicsTitle>
      <TokenomicsDescription>
        gMetis is an ERC-20 token with a total supply of 10,000,000 tokens. The tokens are allocated as follows:
      </TokenomicsDescription>
    </TokenomicsDetails>
    <ChartContainer>
      <Pie data={data} options={options} />
    </ChartContainer>
    <p><strong>Note:</strong> "Rewards" are only accessible by the AI agent and no one else.</p>
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
