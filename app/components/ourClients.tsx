// components/OurClients.js

"use client";
import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  background-color: #f5f5f5;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 3rem;
`;

const LogosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 3rem;
  width: 100%;
  max-width: 1200px;
`;

const LogoCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  max-width: 100%;
  height: auto;
  filter: grayscale(100%);
  transition: filter 0.3s ease;

  &:hover {
    filter: grayscale(0%);
  }
`;

const OurClients = () => {
  const clients = [
    '/walmart-logo.png',
    '/cognizant-logo.png',
    '/accenture-logo.png',
    '/intel-logo.png',
    '/deutsche-bank-logo.png',
    '/mercedes-benz-logo.png',
    '/ford-logo.png',
    '/caterpillar-logo.png'
  ];

  return (
    <Container>
      <Title>We made it hapen for them</Title>
      <LogosContainer>
        {clients.map((client, index) => (
          <LogoCard key={index}>
            <Logo src={client} alt={`Client ${index + 1}`} />
          </LogoCard>
        ))}
      </LogosContainer>
    </Container>
  );
};

export default OurClients;