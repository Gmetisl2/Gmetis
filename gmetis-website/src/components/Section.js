import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  padding: 40px 20px;
  text-align: center;
`;

const SectionTitle = styled.h2`
  color: #007acc;
`;

const SectionDescription = styled.p`
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

const Section = ({ title, description, buttons }) => (
  <SectionContainer>
    <SectionTitle>{title}</SectionTitle>
    <SectionDescription>{description}</SectionDescription>
    <div>
      {buttons.map((button, index) => (
        <Button key={index} href={button.link} target="_blank">
          {button.text}
        </Button>
      ))}
    </div>
  </SectionContainer>
);

export default Section;