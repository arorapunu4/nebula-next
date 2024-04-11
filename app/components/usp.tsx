// components/HowWeHire.js
"use client";
import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  background-color: #6B5B95;
  color: #fff;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 3rem;
`;

const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 2rem;
  width: 100%;
  max-width: 1200px;
`;

const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${props => props.color};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;

  img {
    width: 40px;
    height: 40px;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  font-size: 1.1rem;
`;

const HowWeHire = () => {
  const features = [
    {
      icon: '/recruiter-network.svg',
      color: '#FFA500',
      title: '100+ Individually vtted recruiters in our global network',
      description: 'Our recruitment partners are all ex-HR managers who know the ins and outs of various industries, boasting a successful track record of acquiring top talent for numerous startups and industry giants.'
    },
    {
      icon: '/interview-shortlist.svg',
      color: '#00FF00',
      title: 'More than 70% Interview shortlist ratio',
      description: 'We follow a rigorous screening and vetting process to ensure you connect with only the best talent.'
    },
    {
      icon: '/fast-hiring.svg',
      color: '#9370DB',
      title: '72 Hours To shortlist the initially qualified candidates',
      description: 'Say goodbye to lengthy hiring processes. We deliver unsurpassed results within 72 hours for any role.'
    },
    {
      icon: '/free-services.svg',
      color: '#87CEEB',
      title: '100% FREE services on our platform - no fees required until you hire a candidate.',
      description: 'We are committed to making the hiring process as easy and accessible as possible for startups.'
    }
  ];

  return (
    <Container>
      <Title>How We Make Hiring Easy and Fast</Title>
      <FeaturesContainer>
        {features.map((feature, index) => (
          <FeatureCard key={index}>
            <FeatureIcon color={feature.color}>
              <img src={feature.icon} alt={feature.title} />
            </FeatureIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeaturesContainer>
    </Container>
  );
};

export default HowWeHire;