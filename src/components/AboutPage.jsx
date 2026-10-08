import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { DarkTheme } from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import droneImg from '../assets/Images/drone.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const DroneContainer = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
    filter: drop-shadow(0 0 15px rgba(0, 240, 255, 0.4));
}

@media (max-width: 768px) {
  top: 5rem;
  right: 50%;
  transform: translateX(50%);
  width: 40vw;
}
`
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: calc(0.55rem + 0.8vw);
  backdrop-filter: blur(4px);
  overflow-y: auto;
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;

  @media (max-width: 768px) {
    width: 80vw;
    height: 50vh;
    left: 50%;
    top: 15rem;
    transform: translateX(-50%);
    padding: 1.2rem;
    font-size: calc(0.7rem + 0.5vw);
  }
`

const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>

                <LogoComponent theme='dark' />
                <SocialIcons theme='dark' />
                <PowerButton />
                <ParticleComponent theme='dark' />

                <DroneContainer>
                    <img src={droneImg} alt="drone" />
                </DroneContainer>
                <Main>
                    I am a Developer specializing in software security, development, system automation, IoT's, and UAV technology.
                    <br /><br />
                    My technical work bridges the gap between software and hardware. On the software side, I focus on full-stack development, security assessments, and writing automation tools. On the hardware side, I work extensively with embedded systems, microcontrollers (like ESP32), and UAV(Drones) telemetry and maintenance.
                    <br /><br />
                    I approach every project from web applications to custom hardware modifications with a problem-solving mindset and a belief that 'everything is an art when you put your consciousness into it'.
                    <br /><br />
                    Always open to collaborating on security research, robotics/drone projects, or software development.
                </Main>

                <BigTitle text="ABOUT" top="10%" left="5%" />


            </Box>

        </ThemeProvider>

    )
}

export default AboutPage
