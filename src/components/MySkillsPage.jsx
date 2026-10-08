import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { motion } from 'motion/react'
import { lightTheme } from './Themes';
import { CyberSecurity, Develope, DronePropeller } from './AllSvgs';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;

@media (max-width: 768px) {
  flex-direction: column;
  height: auto;
  min-height: 100vh;
  padding: 6rem 1rem 4rem 1rem;
  overflow-y: auto;
}
`

const Main = styled(motion.div)`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 1.5rem;
width: 25vw;
height: 65vh;
z-index: 3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

transition: color 0.4s cubic-bezier(0.25, 1, 0.5, 1), 
            background-color 0.4s cubic-bezier(0.25, 1, 0.5, 1),
            box-shadow 0.4s cubic-bezier(0.25, 1, 0.5, 1);

@media (max-width: 768px) {
  width: 82vw;
  height: auto;
  margin: 1rem 0;
}

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
    box-shadow: 0 20px 35px rgba(0, 0, 0, 0.25);
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(0.9em + 0.8vw);
transition: color 0.4s ease, fill 0.4s ease;

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
        transition: fill 0.4s ease;
    }
}

&>*:first-child{
margin-right: 0.8rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.55em + 0.7vw);
padding: 0.3rem 0;
transition: color 0.4s ease;

${Main}:hover &{
    color:${props => props.theme.body};
}

strong{
    margin-bottom: 0.5rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 1.2rem;
}
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Box>

                <LogoComponent theme='light' />
                <SocialIcons theme='light' />
                <PowerButton />
                <ParticleComponent theme='light' />

                {/* Cyber Security Card */}
                <Main
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                >
                    <Title>
                        <CyberSecurity width={36} height={36} /> Cyber Security
                    </Title>
                    <Description>
                        I specialize in system vulnerability assessment, network penetration testing, and security automation.
                    </Description>
                    <Description>
                        <strong>Focus Areas</strong>
                        <ul>
                            <li>Vulnerability Assessment</li>
                            <li>Network Pentesting</li>
                            <li>System Security</li>
                        </ul>
                    </Description>
                    <Description>
                        <strong>Tools & Tech</strong>
                        <p>
                            Wireshark, Nmap, Burp Suite, Metasploit, Linux, Python
                        </p>
                    </Description>
                </Main>

                {/* Developer Card */}
                <Main
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                >
                    <Title>
                        <Develope width={36} height={36} /> Fullstack Developer
                    </Title>
                    <Description>
                        I enjoy building modern web applications, scalable backends, and bringing interactive software ideas to life.
                    </Description>
                    <Description>
                        <strong>Skills</strong>
                        <p>
                            HTML, CSS, Java-Script, FastAPI, SpringBoot, React, Node.js, Python, REST APIs, MySQL.
                        </p>
                    </Description>
                    <Description>
                        <strong>Tools</strong>
                        <p>
                            VS Code, Git/GitHub, Docker, XAMPP, Linux Terminal, Postman
                        </p>
                    </Description>
                </Main>

                {/* UAVs & IoTs Card */}
                <Main
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                >
                    <Title>
                        <DronePropeller width={36} height={36} /> UAVs & IoTs
                    </Title>
                    <Description>
                        Bridging hardware and software through custom drone telemetry, microcontrollers, embedded C/C++, and IoT automation.
                    </Description>
                    <Description>
                        <strong>Focus Areas</strong>
                        <ul>
                            <li>UAV Flight Controllers</li>
                            <li>ESP32 / Arduino IoT</li>
                            <li>Telemetry & Sensors</li>
                        </ul>
                    </Description>
                    <Description>
                        <strong>Tools & Tech</strong>
                        <p>
                            QGroundControl, Mission Planner, PlatformIO, ESP-IDF, C/C++
                        </p>
                    </Description>
                </Main>

                <BigTitle text="SKILLS" top="80%" right="30%" />

            </Box>
        </ThemeProvider>
    )
}

export default MySkillsPage
