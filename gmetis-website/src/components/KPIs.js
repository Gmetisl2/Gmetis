import React from 'react';
import styled from 'styled-components';

const KPIsContainer = styled.section`
  padding: 40px 20px;
  text-align: center;
`;

const Title = styled.h2`
  color: #007acc;
`;

const KPIsList = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
`;

const KPI = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 150px;
`;

const KPIs = () => (
  <KPIsContainer>
    <Title>Key Performance Indicators</Title>
    <KPIsList>
      <KPI>
        <h3>Bot Interactions</h3>
        <p>1,234</p>
      </KPI>
      <KPI>
        <h3>User Interactions</h3>
        <p>567</p>
      </KPI>
      <KPI>
        <h3>Distributed Tokens</h3>
        <p>89,000</p>
      </KPI>
    </KPIsList>
  </KPIsContainer>
);

export default KPIs;