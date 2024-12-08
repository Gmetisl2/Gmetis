import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #007acc;
  padding: 20px;
  color: #fff;
  text-align: center;
`;

const Disclaimer = styled.p`
  font-size: 0.8em;
  margin-top: 10px;
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; 2024 gMetis. All rights reserved.</p>
    <Disclaimer>
      Investing in crypto assets involves risk. Please ensure you fully understand the risks involved and invest responsibly. This project complies with MiCA regulations.
    </Disclaimer>
  </FooterContainer>
);

export default Footer;