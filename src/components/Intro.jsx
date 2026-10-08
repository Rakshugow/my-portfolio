import React from 'react';
import styled from 'styled-components';
import { motion } from 'motion/react';
import Me from '../assets/Images/profile-img.png';

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 65vw;
  height: 55vh;
  display: flex;

  background: linear-gradient(
        to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${props => props.theme.body};
  border-right: 2px solid ${props => props.theme.text};

  z-index: 1;

  min-height: 280px;
  max-height: 520px;

  @media (max-width: 1024px) {
    width: 75vw;
  }

  @media (max-width: 768px) {
    width: 75vw;
    max-height: 380px;
    min-height: 270px;
  }

  @media (max-width: 480px) {
    width: 72vw;
    max-height: 350px;
    min-height: 250px;
  }
`;

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;
`;

const ProfileImg = styled(motion.img)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 100%;
  height: 120%;
  max-width: 95%;
  object-fit: contain;
  object-position: center bottom;
  pointer-events: none;

  @media (max-width: 1024px) {
    height: 110%;
  }

  @media (max-width: 768px) {
    height: 100%;
    max-width: 98%;
  }

  @media (max-width: 480px) {
    height: 98%;
    max-width: 96%;
  }
`;

const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${props => props.theme.body};
  padding: 2rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: ${props => `rgba(${props.theme.bodyRgba}, 0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }
`;

const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: '55vh' }}
      transition={{ type: 'spring', duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text>
          <h1>Hi,</h1>
          <h3>I'm Rakshith</h3>
          <h6>I am an enthusiastic ethical hacker and web developer, passionate about UAVs.</h6>
        </Text>
      </SubBox>
      <SubBox>
        <ProfileImg
          src={Me}
          alt="Rakshith Profile"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        />
      </SubBox>
    </Box>
  );
};

export default Intro;
