"use client";
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #6e6ee6;
  color: #fff;
  padding: 40px 0;

  @media (max-width: 767px) {
    padding: 30px 20px;
  }
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ServicesSection = styled.div`
  flex: 1;

  @media (max-width: 767px) {
    margin-bottom: 30px;
  }
`;

const ConnectSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 767px) {
    margin-bottom: 30px;
  }
`;

const ContactSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 767px) {
    margin-bottom: 30px;
  }
`;

const GlobalPresenceSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 20px;
`;

const LinksList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    margin-bottom: 10px;
    a {
      color: #fff;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    color: #fff;
    text-decoration: none;
    margin-bottom: 10px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <ServicesSection>
          <SectionTitle>Our Services</SectionTitle>
          <LinksList>
            <li><a href="#">For Recruiters</a></li>
            <li><a href="#">For Employers</a></li>
            <li><a href="#">About Us</a></li>
          </LinksList>
        </ServicesSection>
        <ConnectSection>
          <SectionTitle>Let's Connect!</SectionTitle>
          <LinksList>
            <li><a href="#"><i className="fab fa-facebook"></i></a></li>
            <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
          </LinksList>
        </ConnectSection>
        <ContactSection>
          <SectionTitle>Contact Us</SectionTitle>
          <ContactInfo>
            <a href="tel:+1(415)324-5151">+1-(415)324-5151</a>
            <a href="tel:+91-9820029166">+91-9820029166</a>
            <a href="mailto:contact@zyvka.com">contact@zyvka.com</a>
          </ContactInfo>
        </ContactSection>
        <GlobalPresenceSection>
          <SectionTitle>Global Presence</SectionTitle>
          <div>
            <p>Head Quarter Address:</p>
            <p>3400 CottageWay,Ste G2#7513</p>
            <p>Sacramento, CA-95825</p>
            <p>Other Locations:</p>
            <p>India | Canada</p>
          </div>
        </GlobalPresenceSection>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;