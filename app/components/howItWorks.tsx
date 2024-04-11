// components/HowItWorks.js
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

const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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

const HowItWorks = () => {
  const features = [
    {
      icon: '/recruitment-partners.svg',
      color: '#FFA500',
      title: 'Industry-best Recruitment Partners',
      description: 'No matter how complicated or atypical your hiring requirements are, we have the right recruitment specialists to deliver unsurpassed results within 72 hours for any role.'
    },
    {
      icon: '/screening.svg',
      color: '#00FF00',
      title: 'Thoroughly Screened & Vetted Profiles',
      description: 'Our recruiters follow a rigorous evaluation method to assess candidate profiles, double-checking every detail to ensure you connect with only the best talent.'
    },
    {
      icon: '/do-the-work.svg',
      color: '#9370DB',
      title: 'We Do All the Work for sYou',
      description: 'Say goodbye to juggling multiple recruitment agencies to build a great workforce. All you have to do is share your job requirements with us and we\'ll take care of the rest.'
    },
    {
      icon: '/ongoing-support.svg',
      color: '#87CEEB',
      title: '24/7 Ongoing Hiring Support',
      description: 'We have dedicated ecruitment success managers to ensure you\'re fully satisfied at every step of the recruitment journey. You\'re in for a five-star experience every time!'
    }
  ];

  return (
    <Container>
      <Title>How It Works</Title>
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

export default HowItWorks;