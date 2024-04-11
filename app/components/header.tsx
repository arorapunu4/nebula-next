// components/Header.tsx
"use client";
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #6B5B95;
  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 0.5rem;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavigationMenu = styled.nav`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 1rem;
    width: 100%;
  }
`;

const NavigationLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #E6E6FA;
  }

  @media (max-width: 768px) {
    display: block;
    padding: 0.5rem 0;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo>ZYVKA</Logo>
      <NavigationMenu>
        <NavigationLink href="/">Home</NavigationLink>
        <NavigationLink href="/about">About Us</NavigationLink>
        <NavigationLink href="/recruiter">Recruiter</NavigationLink>
        <NavigationLink href="/employer">Employer</NavigationLink>
        <NavigationLink href="/contact">Contact Us</NavigationLink>
        <NavigationLink href="/resources">Resources</NavigationLink>
      </NavigationMenu>
    </HeaderContainer>
  );
};

export default Header;