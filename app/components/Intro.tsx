// components/RecruitmentMarketplace.js
"use client";
import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  align-items: center;
  padding: 4rem 2rem;
  background-color: #f5f5f5;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  padding-left: 3rem;

  @media (max-width: 768px) {
    padding-left: 0;
    margin-top: 2rem;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const StartHiringButton = styled.a`
  display: inline-block;
  background-color: #6B5B95;
  color: #fff;
  font-size: 1.1rem;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #584a7c;
  }
`;

const RecruitmentMarketplace = () => {
  return (
    <Container>
      <ImageContainer>
        <img src="/recruitment-marketplace.png" alt="Recruitment Marketplace" />
      </ImageContainer>
      <ContentContainer>
        <Title>A Recruitment Marketplace Connecting Startups With Exceptional Talent</Title>
        <Description>
          Zyvka is on a mission to help startupsbuild their team in a streamlined and seamless manner by leveraging the strength and expertise of our recruitment partners.
        </Description>
        <Description>
          We understand hiring for a specific role, sector, or industry can be difficult. That is where we come in.
        </Description>
        <Description>
          Zyvka provides a unique pltform that acts as a force multiplier and helps hiring managers leverage a vast network of skilled recruiting partners without the traditional hassles of quickly filling open positions with quality candidates.
        </Description>
        <Description>
          As you sit back, sip on your coffee, and fous on your core business, our pool of 100+ seasoned recruitment partners take care of absolutely EVERYTHING!
        </Description>
        <StartHiringButton href="/start-hiring">START HIRING</StartHiringButton>
      </ContentContainer>
    </Container>
  );
};

export default RecruitmentMarketplace;