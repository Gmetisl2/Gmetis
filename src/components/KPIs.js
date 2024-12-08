import React from 'react';
import styled from 'styled-components';
import { FaRobot, FaUsers, FaCoins } from 'react-icons/fa'; // Importing icons

const KPIsContainer = styled.section`
  padding: 40px 20px;
  text-align: center;
  margin-top: 70px; /* Adjust margin to avoid overlap */
`;

const Title = styled.h2`
  color: #007acc;
`;

const KPIsList = styled.div`
  display: flex;
  flex-wrap: wrap; /* Make KPIs wrap on smaller screens */
  justify-content: center; /* Center the KPIs */
  margin: 20px 0;
  gap: 20px; /* Add space between KPIs */
`;

const KPI = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 150px;
  text-align: center;

  h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px; /* Space between icon and text */
  }
`;

const KPIs = () => (
  <KPIsContainer>
    <Title>Key Performance Indicators</Title>
    <KPIsList>
      <KPI>
        <h3><FaRobot /> Bot Interactions</h3>
        <p>1,234</p>
      </KPI>
      <KPI>
        <h3><FaUsers /> User Interactions</h3>
        <p>567</p>
      </KPI>
      <KPI>
        <h3><FaCoins /> Distributed Tokens</h3>
        <p>89,000</p>
      </KPI>
    </KPIsList>
  </KPIsContainer>
);

export default KPIs;